"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    if (result && result.ok) {
      router.push("/");
    }
  }

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">Forgot your password?</Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="password"
              autoComplete="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="remember" onClick={() => setRememberMe(!rememberMe)} />
            <Label htmlFor="remember">Remember me</Label>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? <Loader2 size={16} className="animate-spin" /> : <p>Login</p>}
          </Button>
          <div className={cn("w-full gap-2 flex items-center", "justify-between flex-col")}> 
            <Button
              variant="outline"
              className={cn("w-full gap-2")}
              disabled={loading}
              onClick={async () => {
                setLoading(true);
                await signIn("google", { callbackUrl: "/" });
                setLoading(false);
              }}
            >
              Sign in with Google
            </Button>
            <Button
              variant="outline"
              className={cn("w-full gap-2")}
              disabled={loading}
              onClick={async () => {
                setLoading(true);
                await signIn("github", { callbackUrl: "/" });
                setLoading(false);
              }}
            >
              Sign in with GitHub
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-center w-full border-t py-4">
          <p className="text-center text-xs text-neutral-500">
            built with <Link href="https://better-auth.com" className="underline" target="_blank">better-auth.</Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}