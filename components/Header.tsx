import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:py-4 py-4 shadow-md bg-primary">
        {/* Left: Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/assets/images/profile-img.jpg"
            alt="Logo"
            className="w-13 h-13 rounded-full"
          />
          <span className="text-xl font-bold text-gray-800">DHAYNAMICO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-black text-xl">
            Home
          </a>
          <a href="#about" className="text-gray-600 hover:text-black text-xl">
            About
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-black text-xl"
          >
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black text-xl">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white  flex flex-col items-center justify-center space-y-6 transition-opacity">
          <a
            href="/"
            className="text-2xl text-gray-800  hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-2xl text-gray-800  hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-2xl text-gray-800  hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-2xl text-gray-800  hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
}
