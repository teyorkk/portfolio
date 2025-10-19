import { useState } from "react";
import Reveal from "../Ui/Reveal";
import ProjectCard from "./ProjectCard";
import Modal from "../Ui/Modal";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
  features?: string[];
}

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-stretch">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delay={idx * 80}>
            <ProjectCard
              title={p.title}
              description={p.description}
              image={p.image}
              link={p.link}
              tags={p.tags}
              onClick={() => setSelectedProject(p)}
            />
          </Reveal>
        ))}
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <ProjectModal
            title={selectedProject.title}
            description={selectedProject.description}
            image={selectedProject.image}
            link={selectedProject.link}
            tags={selectedProject.tags}
            features={selectedProject.features}
          />
        )}
      </Modal>
    </>
  );
};

export default ProjectsGrid;
