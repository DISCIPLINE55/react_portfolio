import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Post {
  id?: string;
  author_id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  cover_image_url?: string | null;
  published: boolean;
}

export default function Admin() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Post | null>(null);

  const emptyPost = useMemo<Post>(() => ({ title: "", slug: "", excerpt: "", content: "", cover_image_url: null, published: false }), []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      const uid = session?.user?.id ?? null;
      setUserId(uid);
      if (!uid) {
        navigate("/auth", { replace: true });
        return;
      }
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      const uid = session?.user?.id ?? null;
      setUserId(uid);
      if (!uid) {
        navigate("/auth", { replace: true });
      } else {
        loadPosts();
      }
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const loadPosts = async () => {
    const { data, error } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Failed to load posts", description: error.message, variant: "destructive" });
      return;
    }
    setPosts(data as Post[]);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  const onFileChange = async (file?: File | null) => {
    if (!file || !userId) return;
    const path = `${userId}/${Date.now()}-${file.name}`;
    const { error: upErr } = await supabase.storage.from("article-covers").upload(path, file, { cacheControl: "3600", upsert: false });
    if (upErr) {
      toast({ title: "Upload failed", description: upErr.message, variant: "destructive" });
      return;
    }
    const { data } = supabase.storage.from("article-covers").getPublicUrl(path);
    setSelected((prev) => ({ ...(prev ?? emptyPost), cover_image_url: data.publicUrl, }));
    toast({ title: "Image uploaded", description: "Cover image set." });
  };

  const savePost = async () => {
    if (!userId || !selected) return;
    setLoading(true);
    try {
      if (selected.id) {
        const { error } = await supabase.from("posts").update({
          title: selected.title,
          slug: selected.slug,
          excerpt: selected.excerpt,
          content: selected.content,
          cover_image_url: selected.cover_image_url,
          published: selected.published,
        }).eq("id", selected.id);
        if (error) throw error;
        toast({ title: "Post updated" });
      } else {
        const { error } = await supabase.from("posts").insert({
          author_id: userId,
          title: selected.title,
          slug: selected.slug,
          excerpt: selected.excerpt,
          content: selected.content,
          cover_image_url: selected.cover_image_url,
          published: selected.published,
        });
        if (error) throw error;
        toast({ title: "Post created" });
      }
      await loadPosts();
      setSelected(null);
    } catch (e: any) {
      toast({ title: "Save failed", description: e.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const editPost = (p: Post) => setSelected({ ...p });

  const deletePost = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Post deleted" });
    await loadPosts();
    if (selected?.id === id) setSelected(null);
  };

  return (
    <main>
      <Seo title="Admin | Manage Posts" description="Create, edit, publish posts and upload covers." canonical="/admin" />
      <section className="py-10">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-semibold">Admin Panel</h1>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline"><a href="/">Home</a></Button>
              <Button variant="secondary" onClick={() => setSelected(emptyPost)}>New Post</Button>
              <Button variant="outline" onClick={loadPosts}>Refresh</Button>
              <Button onClick={signOut}>Sign out</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Posts List */}
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Posts</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2">
                {posts.length === 0 && <p className="text-sm text-muted-foreground">No posts yet.</p>}
                {posts.map((p) => (
                  <div key={p.id} className="flex items-center justify-between rounded-md border p-2">
                    <div>
                      <div className="font-medium text-sm">{p.title}</div>
                      <div className="text-xs text-muted-foreground">/{p.slug}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" onClick={() => editPost(p)}>Edit</Button>
                      <Button size="sm" variant="ghost" onClick={() => deletePost(p.id!)}>Delete</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Editor */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>{selected?.id ? "Edit Post" : "New Post"}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" value={selected?.title ?? ""} onChange={(e) => setSelected((s) => ({ ...(s ?? emptyPost), title: e.target.value }))} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="slug">Slug</Label>
                  <Input id="slug" value={selected?.slug ?? ""} onChange={(e) => setSelected((s) => ({ ...(s ?? emptyPost), slug: e.target.value }))} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea id="excerpt" value={selected?.excerpt ?? ""} onChange={(e) => setSelected((s) => ({ ...(s ?? emptyPost), excerpt: e.target.value }))} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="content">Content (Markdown or text)</Label>
                  <Textarea id="content" className="min-h-[180px]" value={selected?.content ?? ""} onChange={(e) => setSelected((s) => ({ ...(s ?? emptyPost), content: e.target.value }))} />
                </div>
                <div className="grid gap-2">
                  <Label>Cover Image</Label>
                  <input type="file" accept="image/*" onChange={(e) => onFileChange(e.target.files?.[0])} />
                  {selected?.cover_image_url && (
                    <img src={selected.cover_image_url} alt="Post cover preview" className="h-32 w-full object-cover rounded border" loading="lazy" decoding="async" />
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={selected?.published ?? false}
                      onChange={(e) => setSelected((s) => ({ ...(s ?? emptyPost), published: e.target.checked }))}
                    />
                    Published
                  </label>
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-3">
                <Button onClick={savePost} disabled={loading || !selected}>{loading ? "Saving..." : "Save"}</Button>
                <Button variant="ghost" onClick={() => setSelected(null)}>Cancel</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
