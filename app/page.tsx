"use client";

import Header from "@/components/Header";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      {/* Page content */}
      <main>
        <Landing />
      </main>
    </div>
  );
}
