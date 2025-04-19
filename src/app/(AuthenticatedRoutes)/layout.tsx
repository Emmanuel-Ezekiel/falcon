"use client"

import type React from "react"

// import { useDispatch, useSelector } from "react-redux"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { LogOut } from "lucide-react"
// import type { AppDispatch, RootState } from "@/redux/store"
// import { logout } from "@/redux/slices/authSlice/authSlice"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const dispatch = useDispatch<AppDispatch>()
  // const router = useRouter()
  // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  // const handleLogout = async () => {
  //   await dispatch(logout())
  //   router.push("/login")
  // }

  return (
    <div className="min-h-screen bg-background">
      <main>{children}</main>
    </div>
  )
}

