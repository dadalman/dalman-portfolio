import Image from "next/image";
import Link from "next/link";

const events = [
  {
    img: "/assets/images/xircus-hackathon-banner.jpg",
    name: "Xircus Web3 Hackathon",
    label: "Champion",
    date: "April 2023",
    desc: "Won the grand prize for building an AI-powered community platform.",
    link: "https://www.facebook.com/share/p/15NvnEjfTh/",
  },
  {
    img: "/assets/images/ai4allminds-banner.jpg",
    name: "#AI4ALLMINDS Hackathon",
    label: "Champion",
    date: "June 2023",
    desc: "Built and pitched a functional MVP in under 48 hours.",
    link: "https://www.facebook.com/share/p/1XGbveeNvr/",
  },
  {
    img: "/assets/images/enhack-banner.jpg",
    name: "ENHACK: Hackathon for SMEs",
    label: "Champion",
    date: "July 2023",
    desc: "Gave a talk on building performant cross-platform apps with React Native.",
    link: "https://www.facebook.com/share/p/1Coi2dD6Bp/",
  },
  {
    img: "/assets/images/enstack-web-banner.png",
    name: "Employee @Enstack Technologies, Inc.",
    label: "Software Engineer",
    date: "July 2023 - December 2024",
    desc: "Led the winning team for a real-world client redesign challenge.",
    link: "https://www.enstack.com/",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-black text-neutral-900 dark:text-white"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">ABOUT ME</h2>
        <div className="w-16 h-1 mx-auto bg-primary-400" />
        <p className="max-w-xl mx-auto text-lg text-gray-700 dark:text-gray-300">
          I am a hackathon enthusiast and a software engineer, always learning
          and striving to grow both professionally and in life!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
        {/* Left Side - Life & Events */}
        <div className="space-y-2">
          <div className="pl-2">
            <h3 className="text-2xl font-semibold">life</h3>
            <p className="text-sm mt-1 text-muted">
              #hackathon_champion #software_engineer #leader #coder #designer
              #business_strategist #all_rounder
            </p>
          </div>

          <div className="space-y-8">
            {events.map((event, i) => (
              <Link
                key={i}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-start gap-4 hover:bg-gray-100  dark:hover:bg-white/5 p-2 rounded-lg transition">
                  <div className="min-w-[120px] h-[120px] relative rounded-sm overflow-hidden bg-black border-dark border">
                    <Image
                      src={event.img}
                      alt={event.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{event.name}</h4>
                    <span className="text-xs text-primary-400 font-medium">
                      {event.label}
                    </span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {event.date}
                    </p>
                    <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side - Skills */}
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold">skills</h3>

          <div>
            <h4 className="text-md font-medium text-dark">front-end</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "react native",
                "next.js",
                "angular",
                "tailwindcss",
                "css",
                "sass",
                "html",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-primary dark:bg-white/10 px-3 py-1 rounded-sm text-md font-bold text-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-md font-medium text-dark">back-end</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {["mongodb", "express.js"].map((skill) => (
                <span
                  key={skill}
                  className="bg-primary dark:bg-white/10 px-3 py-1 rounded-sm text-md font-bold text-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-md font-medium text-dark">design</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {["figma", "canva", "responsive design"].map((skill) => (
                <span
                  key={skill}
                  className="bg-primary dark:bg-white/10 px-3 py-1 rounded-sm  text-md font-bold text-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-md font-medium text-dark">else</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {["git", "github", "node.js"].map((skill) => (
                <span
                  key={skill}
                  className="bg-primary dark:bg-white/10 px-3 py-1 rounded-sm text-md font-bold text-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-md text-dark mt-8 mx-24">🧑🏻‍💻 software engineer</p>
    </section>
  );
}
