"use client";
import "./globals.css";

import Header from "@/components/Header";
import Landing from "@/components/Landing";
import AboutMe from "@/components/AboutMe";
import SwipeCapsule from "@/components/SwipeCapsule";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Landing />

        {/* <section className="relative z-30 flex justify-center items-center py-32">
          <SwipeCapsule />
        </section> */}

        <AboutMe />
      </main>
    </div>
  );
}
