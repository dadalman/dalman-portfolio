"use client";

import { useState } from "react";
import Image from "next/image";

type Work = {
  title: string;
  year: string;
  role: string;
  desc: string;
  href: string;
  img?: string;
  stack?: string[];
};

const work: Work[] = [
  {
    title: "POPDOM",
    year: "2026",
    role: "Founder",
    desc: "A platform to collect and trade idol photocards — digital drops and real cards delivered to your door.",
    href: "https://popdom.app",
    img: "/assets/work/popdom.png",
    stack: ["React", "TanStack Query", "Supabase", "Firebase", "PWA"],
  },
  {
    title: "Project WAN: Chronicles",
    year: "2026",
    role: "Mobile Game · Shipped",
    desc: "The official PROJECT WAN game — built and shipped to the App Store.",
    href: "https://apps.apple.com/us/app/project-wan-chronicles/id6758196754",
    img: "/assets/work/projectwan-chronicles.png",
    stack: ["React", "Capacitor", "Supabase"],
  },
  {
    title: "HOLODREAM AR",
    year: "2025",
    role: "Design + Build",
    desc: "Turn physical cards into immersive augmented-reality experiences — no app needed.",
    href: "https://holodream.app",
    img: "/assets/work/holodream.png",
  },
  {
    title: "PROJECT WAN",
    year: "2025",
    role: "Design + Build",
    desc: "Official site for the P-pop idol group PROJECT WAN.",
    href: "https://projectwan.live",
    img: "/assets/work/projectwan.png",
  },
  {
    title: "ANONYBOX",
    year: "2025",
    role: "Design + Build",
    desc: "Anonymous, embeddable comment sections you can drop anywhere.",
    href: "https://anonybox.space",
    img: "/assets/work/anonybox.png",
  },
  {
    title: "DOMINION LABS STUDIO",
    year: "2025",
    role: "Design + Build",
    desc: "Studio site for a product and engineering lab — engineer your narrative.",
    href: "https://dominionlabs.studio",
    img: "/assets/work/dominionlabs.png",
  },
  {
    title: "BID IT LINK",
    year: "2025",
    role: "Design + Build",
    desc: "Create auction links, share them anywhere, and collect bids.",
    href: "https://biditlink.com",
    img: "/assets/work/biditlink.png",
  },
  {
    title: "FOCUS STRIP",
    year: "2025",
    role: "Design + Build",
    desc: "Track your projects and the time you spend on them.",
    href: "https://focus-strip.vercel.app",
    img: "/assets/work/focus-strip.png",
  },
  {
    title: "Enstack Magic",
    year: "2024",
    role: "Frontend Lead",
    desc: "AI-powered tool for entrepreneurs — I led the front-end.",
    href: "https://www.enstack.com/magic",
    img: "/assets/work/enstack-magic.png",
  },
  {
    title: "Be the NEXT — My Bias List",
    year: "2024",
    role: "Design + Build",
    desc: "Rank your favorite trainees from a survival show.",
    href: "https://btn-my-bias-list.vercel.app/",
    img: "/assets/work/btn-bias-list.png",
  },
  {
    title: "MemoRise",
    year: "2023",
    role: "Product Design",
    desc: "Spaced-repetition study app — wireframes to a hi-fi interactive prototype.",
    href: "https://www.figma.com/proto/95QtUeX5RpYNsEE11iO0he/MemoRise?node-id=1-2&starting-point-node-id=1%3A2",
  },
];

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
            Selected work
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

                  <h3
                    className={`font-display text-2xl font-bold tracking-tight transition-all duration-300 group-hover:translate-x-2 sm:text-3xl md:text-4xl ${
                      isOpen ? "translate-x-2 text-accent" : ""
                    }`}
                  >
                    {item.title}
                  </h3>

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
                      {item.img ? (
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-line bg-bg">
                          <Image
                            src={item.img}
                            alt={`${item.title} screenshot`}
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="object-cover object-top"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-[16/10] w-full items-center justify-center rounded-sm border border-dashed border-line">
                          <span className="label">No preview available</span>
                        </div>
                      )}

                      <div>
                        <p className="text-sm font-medium text-accent">
                          {item.role}
                          <span className="mx-2 text-faint">·</span>
                          <span className="text-muted">{item.year}</span>
                        </p>
                        <p className="mt-3 text-lg leading-relaxed">
                          {item.desc}
                        </p>

                        {item.stack && (
                          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
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
      </div>
    </section>
  );
}
