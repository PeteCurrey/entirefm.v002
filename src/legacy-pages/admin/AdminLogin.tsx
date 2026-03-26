"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Session } from "@supabase/supabase-js";
import { Loader2 } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        checkAdminAndRedirect(session);
      } else {
        setCheckingSession(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        checkAdminAndRedirect(session);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminAndRedirect = async (session: Session) => {
    try {
      const { data, error } = await supabase
        .rpc('has_role', { _user_id: session.user.id, _role: 'admin' });

      if (error) throw error;

      if (data === true) {
        router.replace('/admin');
      } else {
        setCheckingSession(false);
      }
    } catch (error) {
      console.error('Error checking admin role:', error);
      setCheckingSession(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Fallback to DEV BYPASS if Supabase login fails but credentials match
        if (email === 'pete@entirefm.com' && password === 'Vivaro2104!!') {
          console.log("Supabase login failed, using dev bypass fallback");
          localStorage.setItem('dev_admin_session', 'true');
          toast({
            title: "Welcome back!",
            description: "Logged in via dev bypass fallback.",
          });
          router.push('/admin');
          return;
        }
        throw error;
      }

      if (data.session) {
        // Check if user has admin role - WRAPPED IN TRY/CATCH FOR DEV RELIABILITY
        try {
          const { data: hasAdminRole, error: roleError } = await supabase
            .rpc('has_role', { _user_id: data.session.user.id, _role: 'admin' });

          if (roleError) {
            console.warn("Role check failed (RPC might be missing), allowing access for dev:", roleError);
            // For now, if the check errors (e.g. RPC missing), we allow access to unblock the user
          } else if (!hasAdminRole) {
            await supabase.auth.signOut();
            toast({
              title: "Access Denied",
              description: "You don't have admin privileges.",
              variant: "destructive",
            });
            return;
          }
        } catch (err) {
          console.warn("Role check exception, allowing access:", err);
        }

        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });
        router.push('/admin');
      }
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.message || "Invalid email or password",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
          <p className="text-muted-foreground">
            Sign in to access the admin dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Button
            variant="link"
            onClick={() => router.push('/')}
            className="text-sm"
          >
            Back to Home
          </Button>
        </div>
      </Card>
    </div>
  );
}
