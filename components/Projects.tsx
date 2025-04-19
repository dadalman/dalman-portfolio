export default function Projects() {
  const projects = [
    {
      title: "Enstack: AI-Powered Entrepreneurship",
      description:
        "As a former team member at Enstack, I played a role in designing and developing its core mobile and web applications. I focused on crafting a seamless, user-centric experience across platforms and integrating APIs.",
      image: "/assets/images/enstack-banner.png",
      tags: ["Figma", "Angular", "Mobile App", "Sass"],
      link: "https://www.enstack.com/downloads",
    },
    {
      title: "Enstack Magic",
      description:
        "Enstack Magic is a standalone AI-powered tool designed to assist entrepreneurs. I took the lead in front-end development, focusing on creating a smooth and responsive user interface.",
      image: "/assets/images/enstack-magic-banner.png",
      tags: ["Angular", "Mobile App", "Sass"],
      link: "https://www.enstack.com/magic",
    },
    {
      title: "Fanhub: Idol NFC Community",
      description:
        "Fanhub is a social app prototype I designed, where fans can collect, trade, and interact using NFC-powered idol cards and access exclusive fan perks. The concept brings physical fan experiences into the digital world.",
      image: "/assets/images/fanhub-banner.png",
      tags: ["Figma", "Hi-Fidelity", "Prototype"],
      link: "https://www.figma.com/proto/66DGpp3oPOLSFLrEFTiWWS/Fanhub-Design?node-id=21-4900&starting-point-node-id=21%3A4900",
    },
    {
      title: "Be the NEXT: My Bias List",
      description:
        "A web app that lets users rank their favorite trainees from a survival show.",
      image: "/assets/images/btn-bias-list-banner.png",
      tags: ["Next.js", "TailwindCSS", "Figma"],
      link: "https://btn-my-bias-list.vercel.app/",
    },
    {
      title: "MemoRise",
      description:
        "A productivity app that uses spaced repetition and AI-generated flashcards to help users retain information faster and longer.",
      image: "/assets/images/memorise-banner.png",
      tags: ["Figma", "Hi-Fidelity", "Prototype"],
      link: "https://www.figma.com/proto/95QtUeX5RpYNsEE11iO0he/MemoRise?node-id=1-2&starting-point-node-id=1%3A2",
    },
    {
      title: "OwnFlix",
      description:
        "A mobile movie app built with React Native by following a guided tutorial. Features include movie browsing and detail views.",
      image: "/assets/images/mobile-movie-banner.png",
      tags: ["React Native", "Expo", "Mobile App"],
      link: "https://github.com/dadalman/mobile-movie-app",
    },
    // {
    //   title: "LocaLink",
    //   description:
    //     "Connects locals to share knowledge and services—farmers, teachers, shopkeepers, and more.",
    //   image: "/assets/images/localink-banner.png",
    //   tags: ["figma", "hi-fidelity", "prototype"],
    //   link: "https://www.figma.com/proto/t8MVZIjEyrwTQ3E8itcHoc/LocaLink?node-id=11-499&p=f&t=i6AMhAduz2DOrNgw-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A499",
    // },

    // Add more projects here if needed
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-12 py-16 px-4 sm:px-6 bg-light  text-neutral-900"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold">PROJECTS</h2>
        <div className="w-16 h-1 mx-auto bg-primary-400" />
        <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-700">
          Check out some of the projects I've worked on, from hackathons to full
          applications, showcasing my passion for problem-solving through tech!
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform"
            />
            <div className="p-4">
              <h4 className="font-bold text-lg">{project.title}</h4>
              {/* Tags */}
              <div className="mt-2 mb-3">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2 py-1 text-xs font-semibold text-neutral-700 bg-primary  rounded-sm mr-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm">{project.description}</p>
              {/* <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:underline mt-2 inline-block"
              >
                View Project
              </a> */}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
