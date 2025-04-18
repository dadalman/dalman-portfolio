import { Linkedin, Github, Instagram, Facebook, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-12 py-20 -mb-20 px-6 bg-white  text-neutral-900 "
    >
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">CONTACT ME</h2>
        <div className="w-16 h-1 mx-auto bg-primary-400" />
        <p className="text-lg text-gray-700 ">
          Got a project, collaboration idea, or just want to say hi? Let’s
          connect!
        </p>

        <form
          action="https://formspree.io/f/xkgjlply"
          method="POST"
          className="space-y-4 mt-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-100 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-100  focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-md bg-gray-100  focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-primary-400 hover:bg-primary-300 text-white rounded-md transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-10 text-dark ">
          {/* Email */}
          <a
            href="mailto:dadalmanofficial@gmail.com"
            className="hover:opacity-80 transition"
            title="Email"
          >
            <Mail className="w-7 h-7" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/denver-dalman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            title="LinkedIn"
          >
            <Linkedin className="w-7 h-7" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/dadalman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            title="GitHub"
          >
            <Github className="w-7 h-7" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/davey_dalman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            title="Instagram"
          >
            <Instagram className="w-7 h-7" />
          </a>

          {/* X (formerly Twitter) - custom SVG */}
          <a
            href="https://x.com/davey_dalman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            title="X"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.66 3H17.4L12 10.06 6.6 3H3l7.5 10L3 21h3.3l5.7-7.68L17.4 21h3.26L13.2 10.83 20.66 3Z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/DADalman08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            title="Facebook"
          >
            <Facebook className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
