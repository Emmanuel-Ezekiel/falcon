"use client";

import { useAuth } from "@/redux/slices/authSlice/useAuth";

export default function DashboardPage() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>You are not authenticated. Please log in.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4 text-muted-foreground">
        This is a protected route. You can only see this if you&apos;re
        authenticated.
      </p>
    </div>
  );
}
