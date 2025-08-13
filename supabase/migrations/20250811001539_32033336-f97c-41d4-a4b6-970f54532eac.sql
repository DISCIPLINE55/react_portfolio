-- Blog CMS schema for posts, roles, and storage
-- 1) Roles enum and user_roles table
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Function to check roles (avoids recursive RLS issues)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles ur
    WHERE ur.user_id = _user_id AND ur.role = _role
  );
$$;

-- 2) Posts table
CREATE TABLE IF NOT EXISTS public.posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id uuid NOT NULL,
  title text NOT NULL,
  slug text NOT NULL,
  excerpt text,
  content text,
  cover_image_url text,
  published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (slug)
);

ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Timestamp update function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for posts
DO $$ BEGIN
  CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON public.posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- RLS policies for posts
-- Public can read published posts
CREATE POLICY IF NOT EXISTS "Public can view published posts"
ON public.posts FOR SELECT
USING (published = true);

-- Authenticated can read their own posts or all if admin
CREATE POLICY IF NOT EXISTS "Authenticated can view own or admin all"
ON public.posts FOR SELECT TO authenticated
USING (author_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- Create own posts (or admin)
CREATE POLICY IF NOT EXISTS "Users can create their own posts"
ON public.posts FOR INSERT TO authenticated
WITH CHECK (author_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- Update own posts (or admin)
CREATE POLICY IF NOT EXISTS "Users can update own posts or admin"
ON public.posts FOR UPDATE TO authenticated
USING (author_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))
WITH CHECK (author_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- Delete own posts (or admin)
CREATE POLICY IF NOT EXISTS "Users can delete own posts or admin"
ON public.posts FOR DELETE TO authenticated
USING (author_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- 3) Storage bucket for cover images
INSERT INTO storage.buckets (id, name, public)
SELECT 'article-covers', 'article-covers', true
WHERE NOT EXISTS (
  SELECT 1 FROM storage.buckets WHERE id = 'article-covers'
);

-- Storage policies
-- Public read access to article covers
DO $$ BEGIN
  CREATE POLICY "Public can read article covers"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'article-covers');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Authenticated users can upload/update/delete files in a folder named by their user id
DO $$ BEGIN
  CREATE POLICY "Users can upload to own folder in article covers"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'article-covers' AND auth.uid()::text = (storage.foldername(name))[1]);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can update own files in article covers"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'article-covers' AND auth.uid()::text = (storage.foldername(name))[1]);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE POLICY "Users can delete own files in article covers"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'article-covers' AND auth.uid()::text = (storage.foldername(name))[1]);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Optional: index on slug for faster lookups (unique added above)
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON public.posts (created_at DESC);