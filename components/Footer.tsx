import { Linkedin, Github, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary  text-gray-700  px-6 py-10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold">Denver Arquillano Dalman</h3>
          <p className="text-sm mt-1">
            Web Developer, Mobile Developer, UI/UX Designer
          </p>
        </div>

        <div className="text-sm">
          © {new Date().getFullYear()} Denver Dalman. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
