"use client"

import type React from "react"

import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import type { AppDispatch, RootState } from "@/redux/store"
import { logout } from "@/redux/slices/authSlice/authSlice"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  const handleLogout = async () => {
    await dispatch(logout())
    router.push("/login")
  }

  if (!isAuthenticated) {
    return null // Or a loading spinner, or redirect to login
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div>Welcome to the Dashboard</div>
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="container py-6">{children}</main>
    </div>
  )
}

