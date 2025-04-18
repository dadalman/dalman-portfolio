export default function Landing() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[calc(100vh-84px)] md:min-h-[calc(100vh-94px)] flex items-center justify-center px-4 text-neutral-900 dark:bg-black dark:text-white"
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0 -z-10 bg-light dark:bg-black">
        {/* Orange Circles */}
        <div className="absolute bg-orange-200 rounded-full w-52 h-52 md:w-72 md:h-72 top-10 left-10 opacity-30 animate-float-slow" />
        <div className="absolute bg-orange-200 rounded-full w-24 h-24 md:w-36 md:h-36 bottom-16 right-16 opacity-20 animate-float-medium" />

        {/* Cream Circles */}
        <div className="absolute bg-[#FFDCB4] rounded-full w-32 h-32 md:w-48 md:h-48 bottom-20 right-10 opacity-20 animate-float-medium" />
        <div className="hidden md:block absolute bg-[#FFDCB4] rounded-full w-40 h-40 top-1/4 right-1/4 opacity-25 animate-float-slow" />

        {/* Dark Orange Circles */}
        <div className="absolute bg-[#FF8518] rounded-full w-20 h-20 md:w-24 md:h-24 top-1/2 left-1/3 opacity-25 animate-float-fast" />
        <div className="hidden md:block absolute bg-[#FF8518] rounded-full w-32 h-32 bottom-1/3 left-1/2 opacity-15 animate-float-medium" />

        {/* Charcoal Circles */}
        <div className="absolute bg-[#2C2C2C] rounded-full w-28 h-28 md:w-40 md:h-40 bottom-10 left-1/4 opacity-10 animate-float-slow" />
        <div className="hidden md:block absolute bg-[#2C2C2C] rounded-full w-28 h-28 top-12 right-1/3 opacity-10 animate-float-fast" />
      </div>

      {/* Content */}
      <div className="max-w-3xl text-center space-y-6 -mt-20">
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
          <span className="font-semibold">ui/ux designer</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="#projects"
            className="min-w-[170px] px-6 py-2 rounded-sm bg-neutral-900 text-white hover:bg-neutral-700 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            See Projects
          </a>
          <a
            href="#designs"
            className="min-w-[170px] px-6 py-2 rounded-sm bg-neutral-900 text-white hover:bg-neutral-700 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            See Designs
          </a>
          <a
            href="#about"
            className="min-w-[170px] px-6 py-2 rounded-sm border border-neutral-800 dark:border-white hover:bg-neutral-100 dark:hover:bg-white/10 transition"
          >
            More About Me
          </a>
          <a
            href="#contact"
            className="min-w-[170px] px-6 py-2 rounded-sm bg-primary text-black hover:bg-orange-300 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
