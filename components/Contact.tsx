const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/denver-dalman/" },
  { label: "GitHub", href: "https://github.com/dadalman" },
  { label: "Instagram", href: "https://www.instagram.com/davey_dalman/" },
  { label: "X", href: "https://x.com/davey_dalman" },
  { label: "Facebook", href: "https://www.facebook.com/DADalman08" },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="label mb-6">Contact</p>

        <div className="grid gap-16 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <h2 className="font-display text-[10vw] font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s build
              <br />
              something<span className="text-accent">.</span>
            </h2>

            <a
              href="mailto:dadalmanofficial@gmail.com"
              className="mt-10 inline-block border-b-2 border-accent pb-1 text-lg transition-colors hover:text-accent md:text-2xl"
            >
              dadalmanofficial@gmail.com
            </a>

            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label transition-colors hover:text-accent"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Minimal form */}
          <form
            action="https://formspree.io/f/xkgjlply"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-fg outline-none transition-colors placeholder:text-faint focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-fg outline-none transition-colors placeholder:text-faint focus:border-accent"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="label">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 text-fg outline-none transition-colors placeholder:text-faint focus:border-accent"
                placeholder="What are you working on?"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-between gap-6 border border-fg px-6 py-3 text-sm font-medium transition-colors hover:bg-fg hover:text-bg"
            >
              Send message
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
