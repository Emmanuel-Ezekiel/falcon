"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2, Eye, EyeOff } from "lucide-react"
import { z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { resetPassword } from "@/services/authServices"

// Form validation schema
const resetPasswordSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    code: z.string().min(1, "Reset code is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>

export default function ResetPasswordPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const email = searchParams.get("email")
  const code = searchParams.get("code")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setErrors({})

    if (!email || !code) {
      toast.error("Missing email or reset code. Please use the link from your email.")
      setLoading(false)
      return
    }

    const formData = new FormData(event.currentTarget)
    const data: ResetPasswordFormData = {
      email,
      code,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    }

    // Validate form data
    const result = resetPasswordSchema.safeParse(data)

    if (!result.success) {
      const formattedErrors: Record<string, string> = {}
      result.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0] as string] = issue.message
      })
      setErrors(formattedErrors)
      setLoading(false)
      toast.error("Please fix the errors in the form")
      return
    }

    try {
      const response = await resetPassword(data)
      if (response.isSuccess) {
        toast.success("Password reset successfully")
        router.push("/login?reset=success")
      } else {
        toast.error(response.message || "Failed to reset password")
        setErrors({ form: response.message })
      }
    } catch {
      toast.error("An error occurred while resetting your password")
      setErrors({ form: "An error occurred while resetting your password" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>Enter your new password below</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
              {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  className={errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
              {errors.confirmPassword && <p className="text-xs text-red-500">{errors.confirmPassword}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Reset Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
