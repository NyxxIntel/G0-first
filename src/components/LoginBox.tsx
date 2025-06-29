"use client";

import React, { useState } from "react";
import { Column, Input, Button } from "@/once-ui/components";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext"; // ✅ Import useAuth

export default function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // ✅ Get login function from context
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      login(); // ✅ Update context state immediately
      router.push("/dashboard");
    } else {
      alert(result.message);
    }
  };

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
        }}
        onSubmit={handleLogin}
      >
        <Input
          labelAsPlaceholder
          id="email"
          name="email"
          type="text"
          label="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          labelAsPlaceholder
          id="password"
          name="password"
          type="password"
          label="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" size="m" fillWidth>
          Login
        </Button>
      </form>
    </Column>
  );
}
