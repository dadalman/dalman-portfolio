const skills = [
  {
    group: "Frontend",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Angular",
      "SwiftUI",
      "TailwindCSS",
      "TanStack Query",
      "Framer Motion",
      "PWA",
    ],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Supabase", "Firebase", "SQLite", "MongoDB"],
  },
  { group: "Design", items: ["Figma", "ProtoPie", "Responsive design"] },
  {
    group: "Tooling",
    items: ["TypeScript", "Vite", "Vercel", "Python", "Git", "Xcode"],
  },
];

const recognition = [
  { award: "Champion", event: "ENHACK — Hackathon for SMEs", year: "2023" },
  { award: "Champion", event: "#AI4ALLMINDS Hackathon", year: "2023" },
  { award: "Grand Prize", event: "Xircus Web3 Hackathon", year: "2023" },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1.1fr_1fr]">
          {/* Bio */}
          <div>
            <h2 className="mb-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              About
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I&apos;m a software engineer and designer who likes to own the
                whole arc of a product — from the first wireframe to the deployed
                build. I move fast, sweat the details, and care most about
                shipping things people actually use.
              </p>
              <p>
                Lately I&apos;ve been founding{" "}
                <a
                  href="https://popdom.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg underline decoration-accent decoration-2 underline-offset-4"
                >
                  POPDOM
                </a>{" "}
                and building products for teams and idol communities across the
                web.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="label mb-5">Recognition</h3>
              <ul className="space-y-3">
                {recognition.map((r) => (
                  <li
                    key={r.event}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-3"
                  >
                    <span className="text-sm">
                      <span className="text-accent">{r.award}</span>
                      <span className="mx-2 text-faint">·</span>
                      {r.event}
                    </span>
                    <span className="label tabular-nums">{r.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="label mb-8">Capabilities</h3>
            <div className="space-y-8">
              {skills.map((s) => (
                <div
                  key={s.group}
                  className="grid grid-cols-[100px_1fr] gap-4 border-b border-line pb-6"
                >
                  <span className="font-display text-sm font-bold">
                    {s.group}
                  </span>
                  <p className="text-sm leading-relaxed text-muted">
                    {s.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
