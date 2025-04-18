"use client";
import "./globals.css";

import Header from "@/components/Header";
import Landing from "@/components/Landing";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Landing />
        <AboutMe />
      </main>
    </div>
  );
}
