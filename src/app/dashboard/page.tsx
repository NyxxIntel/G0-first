"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "@/components/dashboard/DashboardLayout";

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/check-auth");
        if (res.status === 200) {
          setIsAuthenticated(true);
        } else {
          router.replace("/login");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        router.replace("/login");
      }
    };

    checkAuth();
  }, [router]);

  if (isAuthenticated === null) {
    return <p className="text-center text-white">Loading...</p>; // Show loading while checking auth
  }

  return <Dashboard />;
}
