import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Seo from "@/components/Seo";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

export default function Auth() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showReset, setShowReset] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

useEffect(() => {
  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === "PASSWORD_RECOVERY") {
      setShowReset(true);
      return;
    }
    if (session?.user) navigate("/admin", { replace: true });
  });
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session?.user) navigate("/admin", { replace: true });
  });
  return () => subscription.unsubscribe();
}, [navigate]);

const handleAuth = async () => {
  setLoading(true);
  try {
    if (mode === "signup") {
      // Validate and sanitize the origin to prevent URL injection
      const origin = window.location.origin.replace(/[^a-zA-Z0-9:.-]/g, '');
      const redirectUrl = `${origin}/auth`;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: redirectUrl },
      });
      if (error) throw error;

      // Attempt immediate sign-in
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (!signInError) {
        toast({ title: "Account created", description: "You're now signed in." });
        navigate("/admin", { replace: true });
      } else {
        setMode("signin");
        toast({ title: "Check your email", description: "If confirmation is required, confirm then sign in." });
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast({ title: "Welcome back", description: "You are now signed in." });
      navigate("/admin", { replace: true });
    }
  } catch (e: any) {
    toast({ title: "Authentication error", description: e.message, variant: "destructive" });
  } finally {
    setLoading(false);
  }
};

const handleForgotPassword = async () => {
  try {
    if (!email) {
      toast({ title: "Enter your email", description: "Provide your account email to reset password." });
      return;
    }
    // Validate and sanitize the origin to prevent URL injection
    const origin = window.location.origin.replace(/[^a-zA-Z0-9:.-]/g, '');
    const redirectTo = `${origin}/auth`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
    if (error) throw error;
    toast({ title: "Password reset sent", description: "Check your email for reset instructions." });
  } catch (e: any) {
    toast({ title: "Reset error", description: e.message, variant: "destructive" });
  }
};

const handlePasswordUpdate = async () => {
  if (!newPassword || newPassword.length < 6) {
    toast({ title: "Weak password", description: "Use at least 6 characters.", variant: "destructive" });
    return;
  }
  if (newPassword !== confirmPassword) {
    toast({ title: "Passwords do not match", description: "Please confirm your new password.", variant: "destructive" });
    return;
  }
  setLoading(true);
  try {
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) throw error;
    toast({ title: "Password updated", description: "You can now sign in with your new password." });
    setShowReset(false);
    setMode("signin");
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
  } catch (e: any) {
    toast({ title: "Update error", description: e.message, variant: "destructive" });
  } finally {
    setLoading(false);
  }
};

  return (
    <main>
      <Seo title="Login | Admin Access" description="Sign in or sign up to manage posts." canonical="/auth" />
      <section className="py-16">
        <div className="container max-w-md">
          <h1 className="text-3xl font-semibold mb-6">Access Admin</h1>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{mode === "signup" ? "Create an account" : "Sign in"}</CardTitle>
              <Button variant="ghost" onClick={() => navigate("/")}>Close</Button>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {mode === "signin" && (
                <div className="flex justify-end">
                  <Button variant="link" onClick={handleForgotPassword}>Forgot password?</Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex items-center gap-3">
              <Button onClick={handleAuth} disabled={loading}>
                {loading ? "Please wait..." : mode === "signup" ? "Sign up" : "Sign in"}
              </Button>
              <Button variant="ghost" onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
              >
                {mode === "signup" ? "Have an account? Sign in" : "New here? Sign up"}
              </Button>
            </CardFooter>
          </Card>
          <Dialog open={showReset} onOpenChange={setShowReset}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reset your password</DialogTitle>
                <DialogDescription>Enter a new password for your account.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 py-2">
                <div className="grid gap-2">
                  <Label htmlFor="new-password">New password</Label>
                  <Input id="new-password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm new password</Label>
                  <Input id="confirm-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
              </div>
              <DialogFooter className="flex items-center gap-2">
                <Button variant="ghost" onClick={() => setShowReset(false)}>Cancel</Button>
                <Button onClick={handlePasswordUpdate} disabled={loading}>{loading ? "Updating..." : "Update password"}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </main>
  );
}
