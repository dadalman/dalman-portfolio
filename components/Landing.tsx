// app/components/Landing.tsx
export default function Landing() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-84px)] md:min-h-[calc(100vh-94px)] flex items-center justify-center px-4 bg-light text-neutral-900 dark:bg-black dark:text-white"
    >
      <div className="max-w-3xl text-center space-y-6">
        <div>
          <p className="text-sm tracking-wide uppercase text-gray-500 dark:text-gray-400">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
            DENVER ARQUILLANO DALMAN
          </h1>
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          I am a <span className="font-semibold">front-end web developer</span>,{" "}
          <span className="font-semibold">mobile developer</span>,{" "}
          <span className="font-semibold">designer</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="#projects"
            className="px-6 py-2 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-700 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            See Projects
          </a>
          <a
            href="#designs"
            className="px-6 py-2 rounded-2xl border border-neutral-800 dark:border-white hover:bg-neutral-100 dark:hover:bg-white/10 transition"
          >
            See Designs
          </a>
          <a
            href="#about"
            className="px-6 py-2 rounded-2xl border border-neutral-800 dark:border-white hover:bg-neutral-100 dark:hover:bg-white/10 transition"
          >
            More About Me
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-2xl bg-primary text-black hover:bg-orange-300 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
