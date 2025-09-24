import ProjectCard from "./ProjectCard";
import Reveal from "../Ui/Reveal";
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS.",
    image: "/port.png",
    link: "https://github.com/teyorkk/portfolio",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Expense Tracker",
    description: "A mobile expense tracker app using flutter.",
    image: "/expense.jpg",
    link: "https://github.com/teyorkk/expense_tracker_flutter",
    tags: ["Flutter", "SQLite"],
  },
  {
    title: "Cineverse",
    description: "A movie review logging website.",
    image: "/cineverse.png",
    link: "https://github.com/teyorkk/cineverse",
    tags: ["MySQL", "PHP"],
  },
];

const Project = () => {
  return (
    <section className="py-16" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-stretch">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 80}>
              <ProjectCard
                title={p.title}
                description={p.description}
                image={p.image}
                link={p.link}
                tags={p.tags}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
