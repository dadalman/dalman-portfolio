export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-black text-neutral-900 dark:text-white"
    >
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">CONTACT ME</h2>
        <div className="w-16 h-1 mx-auto bg-primary-400" />
        <p className="text-lg text-gray-700 dark:text-gray-300">
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
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-white/10 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-white/10 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-white/10 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-primary-400 hover:bg-primary-200 text-white rounded-md hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-4 mt-10 text-primary">
          <a href="mailto:youremail@example.com" className="underline">
            Email
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
