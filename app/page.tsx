"use client";
import "./globals.css";

import Header from "@/components/Header";
import Landing from "@/components/Landing";
import AboutMe from "@/components/AboutMe";
import SwipeCapsule from "@/components/SwipeCapsule";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DesignProcess from "@/components/DesignProcess";

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
        <Projects />

        <DesignProcess />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
