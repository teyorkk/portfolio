import ProjectsGrid from "./ProjectsGrid";
import projectsData from "../../data/projects.json";

const Project = () => {
  return (
    <section className="py-16" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          Projects
        </h2>
        <ProjectsGrid projects={projectsData} />
      </div>
    </section>
  );
};

export default Project;
