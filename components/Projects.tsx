"use client";

import { useState } from "react";
import Image from "next/image";

type Work = {
  title: string;
  tag: string;
  year: string;
  role: string;
  desc: string;
  contribution: string;
  href: string;
  img?: string;
  mobile?: boolean;
  mobileImages?: string[];
  stack?: string[];
};

const work: Work[] = [
  {
    title: "POPDOM",
    tag: "Web App",
    year: "2026",
    role: "Founder",
    desc: "A collectibles platform for idol culture — artists drop digital and physical photocards with rarity tiers, and fans collect and trade them in a built-in marketplace.",
    contribution:
      "Founded POPDOM and built the entire product end to end — product direction, UX, front-end, and backend, including the collection and drops systems.",
    href: "https://popdom.app",
    mobile: true,
    mobileImages: [
      "/assets/work/popdom-mobile-1.png",
      "/assets/work/popdom-mobile-2.png",
      "/assets/work/popdom-mobile-3.png",
    ],
    stack: ["React", "TanStack Query", "Supabase", "Firebase", "PWA"],
  },
  {
    title: "HOLODREAM AR",
    tag: "AR Web App",
    year: "2025",
    role: "Design + Build",
    desc: "Turn physical cards into immersive augmented-reality experiences — no app needed.",
    contribution:
      "Designed and built the product and its site end to end, including the in-browser AR experience.",
    href: "https://holodream.app",
    mobile: true,
    mobileImages: [
      "/assets/work/holodream-mobile-1.png",
      "/assets/work/holodream-mobile-2.png",
      "/assets/work/holodream-mobile-3.png",
    ],
  },
  {
    title: "ECLIPSE PROTOCOL",
    tag: "iOS Game · Bullet Hell",
    year: "2026",
    role: "Mobile Game · Shipped",
    desc: "An auto-targeting bullet-hell game featuring exclusive PROJECT WAN content — built and shipped to the App Store.",
    contribution:
      "Designed and developed the game and shipped it to the App Store, wrapping the React build natively with Capacitor.",
    href: "https://apps.apple.com/us/app/project-wan-chronicles/id6758196754",
    mobile: true,
    mobileImages: [
      "/assets/work/eclipse-protocol-mobile-1.webp",
      "/assets/work/eclipse-protocol-mobile-2.webp",
      "/assets/work/eclipse-protocol-mobile-3.webp",
    ],
    stack: ["React", "Capacitor", "Supabase"],
  },
  {
    title: "PROJECT WAN",
    tag: "Website",
    year: "2025",
    role: "Design + Build",
    desc: "Official site for the P-pop idol group PROJECT WAN.",
    contribution:
      "Designed and built the official group site from scratch.",
    href: "https://projectwan.live",
    img: "/assets/work/projectwan.png",
  },
  {
    title: "BID IT LINK",
    tag: "Web App",
    year: "2025",
    role: "Design + Build",
    desc: "Create auction links, share them anywhere, and collect bids.",
    contribution: "Designed and built the product end to end.",
    href: "https://biditlink.com",
    img: "/assets/work/biditlink.png",
  },
  {
    title: "ANONYBOX",
    tag: "Web App",
    year: "2025",
    role: "Design + Build",
    desc: "Anonymous, embeddable comment sections you can drop anywhere.",
    contribution:
      "Designed and built the product end to end — the embeddable comment widget and the dashboard.",
    href: "https://anonybox.space",
    img: "/assets/work/anonybox.png",
  },
  {
    title: "FOCUS STRIP",
    tag: "Web App",
    year: "2025",
    role: "Design + Build",
    desc: "Track your projects and the time you spend on them.",
    contribution: "Designed and built the app from scratch.",
    href: "https://focus-strip.vercel.app",
    mobile: true,
    mobileImages: [
      "/assets/work/focus-strip-mobile-1.png",
      "/assets/work/focus-strip-mobile-2.png",
      "/assets/work/focus-strip-mobile-3.png",
    ],
  },
  {
    title: "DOMINION LABS STUDIO",
    tag: "Website",
    year: "2025",
    role: "Design + Build",
    desc: "Studio site for a product and engineering lab — engineer your narrative.",
    contribution: "Designed and built the studio's site from scratch.",
    href: "https://dominionlabs.studio",
    img: "/assets/work/dominionlabs.png",
  },
];

// Older / smaller pieces — kept for depth, shown compactly so they don't
// compete with the flagship work above.
const earlier = [
  {
    title: "Enstack Magic",
    role: "Frontend Lead",
    year: "2024",
    href: "https://www.enstack.com/magic",
  },
  {
    title: "Be the NEXT — My Bias List",
    role: "Design + Build",
    year: "2024",
    href: "https://btn-my-bias-list.vercel.app/",
  },
  {
    title: "MemoRise",
    role: "Product Design",
    year: "2023",
    href: "https://www.figma.com/proto/95QtUeX5RpYNsEE11iO0he/MemoRise?node-id=1-2&starting-point-node-id=1%3A2",
  },
];

const placeholder = (text: string) => (
  <div className="flex aspect-[16/10] w-full items-center justify-center rounded-sm border border-dashed border-line">
    <span className="label">{text}</span>
  </div>
);

// Single landscape screenshot (desktop / web projects).
function DesktopShot({ src, alt }: { src?: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  if (!src || errored) return placeholder("No preview available");
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-line bg-bg">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 60vw"
        className="object-cover object-top"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

// Row of portrait phone frames (mobile-first projects). Any image that fails to
// load drops out of the row; if none load, a placeholder shows instead.
function MobileGallery({ images, alt }: { images: string[]; alt: string }) {
  const [errored, setErrored] = useState<number[]>([]);
  const allFailed = images.length === 0 || errored.length >= images.length;
  if (allFailed) return placeholder("Mobile preview coming soon");

  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center gap-3 overflow-x-auto rounded-sm border border-line bg-fg/[0.04] p-4 sm:gap-4">
      {images.map((src, i) =>
        errored.includes(i) ? null : (
          <div
            key={src}
            className="relative aspect-[9/19] h-full shrink-0 overflow-hidden rounded-[1.2rem] border border-line bg-bg shadow-md"
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              sizes="160px"
              className="object-cover object-top"
              onError={() => setErrored((prev) => [...prev, i])}
            />
          </div>
        )
      )}
    </div>
  );
}

// Renders a project preview: a phone-frame row for mobile-first projects, a
// landscape screenshot otherwise. Missing/broken images degrade gracefully.
function Preview({
  img,
  mobileImages,
  alt,
  mobile,
}: {
  img?: string;
  mobileImages?: string[];
  alt: string;
  mobile?: boolean;
}) {
  if (mobile) return <MobileGallery images={mobileImages ?? []} alt={alt} />;
  return <DesktopShot src={img} alt={alt} />;
}

export default function Projects() {
  // POPDOM (index 0) is expanded by default.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="work"
      className="scroll-mt-16 border-b border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 flex items-baseline justify-between">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Things I&apos;ve built
          </h2>
          <span className="label">{work.length} projects</span>
        </div>

        <ul className="border-t border-line">
          {work.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.title} className="border-b border-line">
                {/* Row header — toggles the panel */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-7 text-left transition-colors hover:bg-accent-soft md:gap-8 md:py-8"
                >
                  <span className="label tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className={`flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1.5 transition-transform duration-300 group-hover:translate-x-2 ${
                      isOpen ? "translate-x-2" : ""
                    }`}
                  >
                    <h3
                      className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 sm:text-3xl md:text-4xl ${
                        isOpen ? "text-accent" : ""
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span className="label shrink-0 rounded-full border border-line px-2.5 py-0.5">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="label tabular-nums hidden sm:block">
                      {item.year}
                    </span>
                    <span
                      className={`grid h-6 w-6 place-items-center text-lg text-muted transition-all duration-300 group-hover:text-accent ${
                        isOpen ? "rotate-45 text-accent" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                </button>

                {/* Expanding detail panel */}
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-10 md:grid-cols-[1.5fr_1fr] md:items-center md:gap-12">
                      <Preview
                        img={item.img}
                        mobileImages={item.mobileImages}
                        alt={`${item.title} screenshot`}
                        mobile={item.mobile}
                      />

                      <div>
                        <p className="text-sm font-medium text-accent">
                          {item.role}
                          <span className="mx-2 text-faint">·</span>
                          <span className="text-muted">{item.year}</span>
                        </p>
                        <p className="mt-3 text-lg leading-relaxed">
                          {item.desc}
                        </p>

                        <p className="label mt-6">What I did</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {item.contribution}
                        </p>

                        {item.stack && (
                          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                            {item.stack.map((s) => (
                              <span key={s} className="label">
                                {s}
                              </span>
                            ))}
                          </div>
                        )}

                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group mt-7 inline-flex items-center gap-3 border-b-2 border-accent pb-1 text-sm font-medium transition-colors hover:text-accent"
                        >
                          Visit live
                          <span className="transition-transform group-hover:translate-x-1">
                            ↗
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Earlier work — compact, de-emphasized */}
        <div className="mt-16">
          <h3 className="label mb-6">Earlier work</h3>
          <ul className="border-t border-line">
            {earlier.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 border-b border-line py-4 transition-colors hover:bg-accent-soft"
                >
                  <span className="font-display text-base font-bold tracking-tight transition-transform group-hover:translate-x-1">
                    {item.title}
                  </span>
                  <span className="flex shrink-0 items-baseline gap-4 md:gap-6">
                    <span className="label hidden sm:block">{item.role}</span>
                    <span className="label tabular-nums">{item.year}</span>
                    <span className="text-muted transition-colors group-hover:text-accent">
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
