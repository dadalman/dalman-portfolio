const roles = [
  {
    period: "2026 — Now",
    company: "POPDOM",
    role: "Founder",
    desc: "Founded and building POPDOM — leading product, design, and engineering.",
    href: "https://popdom.app",
  },
  {
    period: "2025 — Now",
    company: "Ryval",
    role: "Software Engineer",
    desc: "Building and shipping product features across the stack.",
    href: "",
  },
  {
    period: "2025 — 2026",
    company: "Unit Network",
    role: "Software Engineer · Full-time",
    desc: "Full-time engineer for ten months, delivering production web features.",
    href: "",
  },
  {
    period: "2024 — 2025",
    company: "Codebility",
    role: "Frontend Developer",
    desc: "Frontend development focused on user-friendly mobile and web apps.",
    href: "https://www.codebility.tech/",
  },
  {
    period: "2023 — 2024",
    company: "Enstack Technologies",
    role: "Software Engineer · Frontend",
    desc: "Built responsive web and mobile interfaces and integrated third-party APIs.",
    href: "https://www.enstack.com/",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-b border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="mb-16 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
        </h2>

        <div className="border-t border-line">
          {roles.map((r) => {
            const inner = (
              <div className="grid gap-2 py-8 md:grid-cols-[200px_1fr] md:gap-10">
                <span className="label pt-1 tabular-nums">{r.period}</span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                      {r.company}
                    </h3>
                    {r.href && (
                      <span className="text-sm text-muted transition-colors group-hover:text-accent">
                        ↗
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-medium text-accent">
                    {r.role}
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {r.desc}
                  </p>
                </div>
              </div>
            );

            return r.href ? (
              <a
                key={r.company}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-line transition-colors hover:bg-accent-soft"
              >
                {inner}
              </a>
            ) : (
              <div key={r.company} className="border-b border-line">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
