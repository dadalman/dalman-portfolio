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
    company: "RYVAL",
    role: "Software Engineer",
    desc: "Building and shipping product features across the stack.",
    href: "https://ryval.com",
  },
  {
    period: "2025 — 2026",
    company: "Unit Network",
    role: "Software Engineer · Full-time",
    desc: "Full-time engineer for ten months, delivering production web features.",
    href: "https://unit.network/",
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

const awards = [
  {
    award: "Champion",
    event: "ENHACK — Hackathon for SMEs",
    year: "2023",
    desc: "Built an AI-powered mobile app that helps SMEs track progress, manage inventory, and run sales.",
    href: "https://www.facebook.com/share/p/1Coi2dD6Bp/",
  },
  {
    award: "Champion",
    event: "#AI4ALLMINDS Hackathon",
    year: "2023",
    desc: "Built and pitched an AI study assistant that learns with the user to deliver efficient learning modules.",
    href: "https://www.facebook.com/share/p/1XGbveeNvr/",
  },
  {
    award: "Grand Prize",
    event: "Xircus Web3 Hackathon",
    year: "2023",
    desc: "Won the grand prize for building an idol NFC community platform.",
    href: "https://www.facebook.com/share/p/15NvnEjfTh/",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-b border-line py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1.25fr_1fr] md:gap-20 md:px-10">
        {/* Experience */}
        <div>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="mb-12 text-sm leading-relaxed text-muted">
            5 years building for the web —
            <br />
            freelance since 2021.
          </p>
          <div className="border-t border-line">
            {roles.map((r) => {
              const inner = (
                <>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
                      {r.company}
                      {r.href && (
                        <span className="ml-2 text-sm text-muted transition-colors group-hover:text-accent">
                          ↗
                        </span>
                      )}
                    </h3>
                    <span className="label shrink-0 tabular-nums">
                      {r.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {r.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {r.desc}
                  </p>
                </>
              );

              return r.href ? (
                <a
                  key={r.company}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-line py-6 transition-colors hover:bg-accent-soft"
                >
                  {inner}
                </a>
              ) : (
                <div key={r.company} className="border-b border-line py-6">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        {/* Recognition */}
        <div id="recognition" className="scroll-mt-16">
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Recognition
          </h2>
          <p className="mb-12 text-sm leading-relaxed text-muted">
            Three first-place hackathon finishes building AI and community
            products.
          </p>
          <div className="border-t border-line">
            {awards.map((a) => (
              <a
                key={a.event}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-line py-6 transition-colors hover:bg-accent-soft"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
                    {a.event}
                    <span className="ml-2 text-sm text-muted transition-colors group-hover:text-accent">
                      ↗
                    </span>
                  </h3>
                  <span className="label shrink-0 tabular-nums">{a.year}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {a.award}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {a.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
