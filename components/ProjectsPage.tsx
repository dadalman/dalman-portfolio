import Image from "next/image";

const projects = [
  {
    img: "/assets/images/project-ai.png",
    name: "AI-Powered Community App",
    date: "April 2023",
    desc: "Built for the Xircus Hackathon. Combines AI chat, governance, and token rewards in one platform.",
    tags: ["React Native", "AI", "Web3"],
  },
  {
    img: "/assets/images/project-mind.png",
    name: "AllMinds Mental Health Tool",
    date: "June 2023",
    desc: "Won AI4ALLMINDS Hackathon. A full-stack MVP that recommends resources based on emotion detection.",
    tags: ["Next.js", "Tailwind", "Emotion API"],
  },
  {
    img: "/assets/images/project-enhack.png",
    name: "SME Toolkit",
    date: "July 2023",
    desc: "Designed to streamline business operations for MSMEs. Featured live chat, analytics, and marketing tools.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    img: "/assets/images/project-zuki.png",
    name: "zukiCo Digital Loyalty Card",
    date: "Ongoing",
    desc: "Progressive Web App for local shops to digitize their loyalty programs. Works offline, no login required.",
    tags: ["PWA", "IndexedDB", "Push Notifications"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-6 bg-white  text-neutral-900 ">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">PROJECTS</h1>
        <div className="w-16 h-1 mx-auto bg-primary-400" />
        <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-700 ">
          Here are some of the most exciting projects I've built — from
          hackathons to real-world apps.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border border-gray-200  rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white "
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-2">
              <h2 className="font-bold text-lg">{project.name}</h2>
              <p className="text-xs text-primary-400 font-medium">
                {project.date}
              </p>
              <p className="text-sm text-gray-700 ">{project.desc}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary-600  px-2 py-1 rounded text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
