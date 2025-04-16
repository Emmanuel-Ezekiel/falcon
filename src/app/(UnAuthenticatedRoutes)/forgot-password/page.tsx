"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { forgotPassword } from "@/services/authServices";

// Form validation schema
const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const data: ForgotPasswordFormData = {
      email: formData.get("email") as string,
    };

    // Validate form data
    const result = forgotPasswordSchema.safeParse(data);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(formattedErrors);
      setLoading(false);
      toast.error("Please fix the errors in the form");
      return;
    }

    try {
      const response = await forgotPassword(data.email);
      if (response.isSuccess) {
      
        toast.success("Password reset instructions sent to your email");
        router.push("/reset-password?email=" + encodeURIComponent(data.email));
      } else {
        toast.error(response.message || "Failed to send reset instructions");
        setErrors({ form: response.message });
      }
    } catch {
      toast.error("An error occurred while processing your request");
      setErrors({ form: "An error occurred while processing your request" });
    } 
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Reset password</CardTitle>
          <CardDescription>
            Enter your email address and we&apos;ll send you a link to reset
            your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                className={errors.email ? "border-red-500" : ""}
                required
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>
            {errors.form && (
              <p className="text-sm text-red-500">{errors.form}</p>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send reset link
            </Button>
            <div className="text-center text-sm">
              Remember your password?{" "}
              <Link href="/login" className="text-primary underline">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
