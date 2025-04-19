import {
  Lightbulb,
  Ruler,
  PenTool,
  Monitor,
  Workflow,
  Code,
} from "lucide-react";

const steps = [
  {
    title: "Understand",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    description:
      "I start by identifying the user's pain points and the problem we're solving. Whether it's a client brief or personal project, I research the users, competitors, and trends to set a strong foundation.",
    image: "",
  },
  {
    title: "Define",
    icon: <Ruler className="w-6 h-6 text-primary" />,
    description:
      "I refine the core goals and user needs into a clear problem statement. This step helps shape the product direction and ensures we solve the right problem.",
    image: "",
  },
  {
    title: "Ideate",
    icon: <Workflow className="w-6 h-6 text-primary" />,
    description:
      "I collaborate closely with clients or stakeholders to brainstorm and explore multiple solutions. We sketch, review references, and align on the user journey together.",
    image: "",
  },
  {
    title: "Design",
    icon: <PenTool className="w-6 h-6 text-primary" />,
    description:
      "I build high-fidelity mockups in Figma, applying design principles like hierarchy, contrast, spacing, and accessibility. I keep visuals clean, modern, and on-brand.",
    image: "",
  },
  {
    title: "Prototype & Test",
    icon: <Monitor className="w-6 h-6 text-primary" />,
    description:
      "I create interactive prototypes and share them for feedback. I iterate quickly based on real user insights to make sure the design feels right.",
    image: "",
  },
  {
    title: "Handoff / Build",
    icon: <Code className="w-6 h-6 text-primary" />,
    description:
      "I ensure smooth dev handoff (or build it myself when I’m also the developer 😎). I keep styles consistent, components modular, and details pixel-perfect.",
    image: "",
  },
];

export default function DesignProcess() {
  return (
    <section
      id="design-process"
      className="bg-white text-neutral-900 py-16 px-4 sm:px-6 scroll-mt-12"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          🧠 My Design Process
        </h2>
        <p className="text-gray-700 text-base sm:text-lg">
          A simple but solid process that ensures every design is thoughtful,
          user-centered, and ready to ship. <br />I mostly use{" "}
          <a
            href="https://www.figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline text-primary-600"
          >
            <img
              src="/assets/icons/figma-logo.svg"
              alt="Figma"
              className="inline w-4 h-4"
            />
            Figma
          </a>{" "}
          for UI design and prototyping, and{" "}
          <a
            href="https://www.protopie.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:underline text-primary-600"
          >
            <img
              src="/assets/icons/protopie-logo.svg"
              alt="ProtoPie"
              className="inline w-4 h-4 "
            />
            ProtoPie
          </a>{" "}
          for advanced interactions.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-neutral-100 rounded-sm p-6 shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-dark p-2 rounded-full">{step.icon}</div>
              <h4 className="font-semibold text-lg">
                {index + 1}. {step.title}
              </h4>
            </div>
            <p className="text-sm text-gray-700 mb-4">{step.description}</p>
            {step.image && (
              <img
                src={step.image}
                alt={`${step.title} visual`}
                className="w-full rounded-sm border border-gray-200"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
