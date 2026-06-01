import "./globals.css";

import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Landing />
        <Projects />
        <Experience />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
