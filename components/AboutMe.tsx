import Image from "next/image";
import Link from "next/link";
// import SwipeCapsule from "./SwipeCapsule";

const events = [
  {
    img: "/assets/images/codebility-se-logo.jpeg",
    name: "Frontend Developer @Codebility",
    label: "Software Engineer",
    date: "May 2024 - Present",
    desc: "Working as a frontend software developer, focusing on building user-friendly mobile applications.",
    link: "https://www.codebility.tech/",
  },
  {
    img: "/assets/images/enstack-web-banner.png",
    name: "Employee @Enstack Technologies, Inc.",
    label: "Software Engineer",
    date: "July 2023 - December 2024",
    desc: "Worked as a software engineer, focusing on front-end development.",
    link: "https://www.enstack.com/",
  },
  {
    img: "/assets/images/enhack-banner.jpg",
    name: "ENHACK: Hackathon for SMEs",
    label: "Champion",
    date: "July 2023",
    desc: "Built an AI-powered mobile app to help SMEs track their progress, manage their inventory, and manage sales.",
    link: "https://www.facebook.com/share/p/1Coi2dD6Bp/",
  },
  {
    img: "/assets/images/ai4allminds-banner.jpg",
    name: "#AI4ALLMINDS Hackathon",
    label: "Champion",
    date: "June 2023",
    desc: "Built and pitched an AI-powered study assistant that learns with the user to give efficient learning modules.",
    link: "https://www.facebook.com/share/p/1XGbveeNvr/",
  },
  {
    img: "/assets/images/xircus-hackathon-banner.jpg",
    name: "Xircus Web3 Hackathon",
    label: "Champion",
    date: "April 2023",
    desc: "Won the grand prize for building an Idol NFC Community platform.",
    link: "https://www.facebook.com/share/p/15NvnEjfTh/",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="scroll-mt-12 py-16 px-4 sm:px-6 bg-white  text-neutral-900 "
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold">ABOUT ME</h2>
        <div className="w-16 h-1 mx-auto bg-primary-400" />
        <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-700">
          I'm a hackathon enthusiast and a software engineer who thrives on
          learning fast, building thoughtful user experiences, and solving
          real-world problems through tech!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
        {/* Left Side - Life & Events */}
        <div className="space-y-2">
          <div className="pl-2">
            <h3 className="text-xl sm:text-2xl font-semibold">life</h3>
            <p className="text-xs sm:text-sm mt-1 text-muted">
              #hackathon_champion #software_engineer #leader #coder #designer
              #business_strategist #all_rounder
            </p>
          </div>

          <div className="space-y-10 sm:space-y-8 mt-4 sm:mt-0">
            {events.map((event, i) => (
              <Link
                key={i}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 hover:bg-gray-100 p-2 rounded-lg transition mb-3 sm:mb-8">
                  <div className="w-full sm:min-w-[120px] sm:w-[120px] h-[120px] relative rounded-sm overflow-hidden bg-black border-dark border">
                    <Image
                      src={event.img}
                      alt={event.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="-mt-2 sm:mt-0">
                    <h4 className="font-bold text-base sm:text-lg">
                      {event.name}
                    </h4>
                    <span className="text-xs text-primary-400 font-medium">
                      {event.label}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-500 ">
                      {event.date}
                    </p>
                    <p className="text-sm mt-1 text-gray-700 ">{event.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side - Skills */}
        <div className="space-y-4 px-2">
          <h3 className="text-xl sm:text-2xl font-semibold">skills</h3>

          {/* Skill categories */}
          {[
            {
              title: "front-end",
              skills: [
                "react native",
                "next.js",
                "angular",
                "swiftui",
                "tailwindcss",
                "css",
                "sass",
                "html",
              ],
            },
            { title: "back-end", skills: ["node.js", "mongodb", "express.js"] },
            {
              title: "design",
              skills: ["figma", "canva", "responsive design"],
            },
            {
              title: "else",
              skills: ["python", "selenium", "xcode", "git", "github"],
            },
          ].map((group) => (
            <div key={group.title}>
              <h4 className="text-sm sm:text-md font-medium text-dark">
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary  px-3 py-1 rounded-sm text-sm font-bold text-dark"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-dark mt-10 text-center sm:text-left sm:mx-24">
        🧑🏻‍💻 software engineer
      </p>
    </section>
  );
}
