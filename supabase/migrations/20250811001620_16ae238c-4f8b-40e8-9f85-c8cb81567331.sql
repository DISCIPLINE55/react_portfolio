-- Fix: Recreate policies using DO blocks (CREATE POLICY lacks IF NOT EXISTS)

-- Public can read published posts
DO $$ BEGIN
  CREATE POLICY "Public can view published posts"
  ON public.posts FOR SELECT
  USING (published = true);
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Authenticated can read their own posts or all if admin
DO $$ BEGIN
  CREATE POLICY "Authenticated can view own or admin all"
  ON public.posts FOR SELECT TO authenticated
  USING (author_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Create own posts (or admin)
DO $$ BEGIN
  CREATE POLICY "Users can create their own posts"
  ON public.posts FOR INSERT TO authenticated
  WITH CHECK (author_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Update own posts (or admin)
DO $$ BEGIN
  CREATE POLICY "Users can update own posts or admin"
  ON public.posts FOR UPDATE TO authenticated
  USING (author_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))
  WITH CHECK (author_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Delete own posts (or admin)
DO $$ BEGIN
  CREATE POLICY "Users can delete own posts or admin"
  ON public.posts FOR DELETE TO authenticated
  USING (author_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
EXCEPTION WHEN duplicate_object THEN NULL; END $$;