"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"
import { z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { verifyEmail } from "@/services/authServices"

// Form validation schema
const verifyEmailSchema = z.object({
  verificationCode: z.string().min(6, "Verification code must be at least 6 characters"),
})

type VerifyEmailFormData = z.infer<typeof verifyEmailSchema>

export default function VerifyEmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [verified, setVerified] = useState(false)

  const email = searchParams.get("email")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setErrors({})

    const formData = new FormData(event.currentTarget)
    const data: VerifyEmailFormData = {
      verificationCode: formData.get("verificationCode") as string,
    }

    if (!email) {
      toast.error("Email is missing. Please try the verification link from your email again.")
      setLoading(false)
      return
    }

    // Validate form data
    const result = verifyEmailSchema.safeParse(data)

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
      const response = await verifyEmail(data.verificationCode, email)
      if (response.success) {
        setVerified(true)
        toast.success("Email verified successfully")
      } else {
        toast.error(response.message || "Failed to verify email")
        setErrors({ form: response.message })
      }
    } catch {
      toast.error("An error occurred while verifying your email")
      setErrors({ form: "An error occurred while verifying your email" })
    } finally {
      setLoading(false)
    }
  }

  if (verified) {
    return (
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <Card className="w-full max-w-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Email Verified</CardTitle>
            <CardDescription>Your email has been successfully verified.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" onClick={() => router.push("/auth/login")}>
              Proceed to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Verify Your Email</CardTitle>
          <CardDescription>Enter the verification code sent to your email.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="verificationCode">Verification Code</Label>
              <Input
                id="verificationCode"
                name="verificationCode"
                className={errors.verificationCode ? "border-red-500" : ""}
                required
              />
              {errors.verificationCode && <p className="text-xs text-red-500">{errors.verificationCode}</p>}
            </div>
            {errors.form && <p className="text-sm text-red-500">{errors.form}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Verify Email
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
};