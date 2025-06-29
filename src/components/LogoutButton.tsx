"use client";

import React from "react";
import { Button } from "@/once-ui/components";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";
export default function LogoutButton() {
  const router = useRouter();
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });
      logout();
      router.push("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      size="s"
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "#ff4d4d",
        color: "#fff",
        borderRadius: "8px",
      }}
    >
      Logout
    </Button>
  );
}
