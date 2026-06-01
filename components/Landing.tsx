export default function Landing() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line"
    >
      {/* Refined ambient accents — single-hue glows on a slow 2-D drift */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-drift-a absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent/[0.13] blur-3xl" />
        <div className="animate-drift-b absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-accent/[0.10] blur-3xl" />
        <div className="animate-drift-c absolute left-1/3 top-1/3 h-56 w-56 rounded-full bg-accent/[0.08] blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl flex-col justify-center px-6 py-24 md:px-10">
        <p className="label animate-fade-up mb-6 flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-accent" />
          Based in the Philippines · Available for work
        </p>

        <h1 className="animate-fade-up font-display text-[15vw] font-bold leading-[0.92] tracking-tight sm:text-[12vw] lg:text-[8.5rem]">
          Denver
          <br />
          Dalman<span className="text-accent">.</span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Software engineer, designer, and founder of{" "}
            <a
              href="https://popdom.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg underline decoration-accent decoration-2 underline-offset-4"
            >
              POPDOM
            </a>
            .
            <br />
            5 years building and shipping products end to end — from interface
            to production.
          </p>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="#work"
              className="group inline-flex items-center justify-between gap-6 border border-fg px-6 py-3 text-sm font-medium transition-colors hover:bg-fg hover:text-bg md:w-64"
            >
              Selected work
              <span className="transition-transform group-hover:translate-x-1">
                ↓
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-between gap-6 border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-fg md:w-64"
            >
              Get in touch
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
