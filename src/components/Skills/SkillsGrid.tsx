import Reveal from "../Ui/Reveal";
import SkillCard from "./SkillCard";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid = ({ skills }: SkillsGridProps) => {
  return (
    <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, idx) => (
        <Reveal key={skill.name} delay={idx * 60}>
          <SkillCard icon={skill.icon} name={skill.name} />
        </Reveal>
      ))}
    </article>
  );
};

export default SkillsGrid;
