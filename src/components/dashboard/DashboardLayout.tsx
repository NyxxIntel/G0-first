"use client";

import React from "react";
import { Card } from "@/once-ui/components";
import LogoutButton from "@/components/LogoutButton";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <LogoutButton />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} style={{ minHeight: "120px" }}>
            <div className="p-4">Top Stat {i + 1}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {[...Array(2)].map((_, i) => (
          <Card key={i} style={{ minHeight: "300px" }}>
            <div className="p-4">Middle Chart/Labels {i + 1}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(2)].map((_, i) => (
          <Card key={i} style={{ minHeight: "300px" }}>
            <div className="p-4">Bottom Section {i + 1}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
