import { useMemo, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
  FaPhp,
  FaGit,
} from "react-icons/fa";
import {
  SiFlutter,
  SiSharp,
  SiSqlite,
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import SkillsFilter, { type Category } from "./SkillsFilter";
import SkillsGrid from "./SkillsGrid";
import skillsData from "../../data/skills.json";

const skillIconMap: Record<string, React.ReactNode> = {
  css: <FaCss3Alt className="text-blue-500" />,
  html: <FaHtml5 className="text-orange-500" />,
  js: <FaJs className="text-yellow-400" />,
  nextjs: <SiNextdotjs className="text-black dark:text-white" />,
  react: <FaReact className="text-cyan-400" />,
  tailwind: <SiTailwindcss className="text-sky-400" />,
  ts: <SiTypescript className="text-blue-600" />,
  php: <FaPhp className="text-indigo-700" />,
  sqlite: <SiSqlite className="text-blue-400" />,
  mysql: <SiMysql className="text-blue-500" />,
  postgres: <SiPostgresql className="text-blue-900 dark:text-blue-400" />,
  git: <FaGit className="text-orange-600" />,
  github: <FaGithub className="text-gray-800 dark:text-gray-200" />,
  flutter: <SiFlutter className="text-blue-400" />,
  csharp: <SiSharp className="text-purple-700" />,
  java: <FaJava className="text-orange-600" />,
};

const allSkills = skillsData.map((s) => ({
  name: s.name,
  category: s.category as Exclude<Category, "All">,
  icon: skillIconMap[s.icon] ?? <FaReact />,
}));

const Skills = () => {
  const [selected, setSelected] = useState<Category>("All");

  const filtered = useMemo(() => {
    const list =
      selected === "All"
        ? allSkills
        : allSkills.filter((s) => s.category === selected);
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [selected]);

  return (
    <section className="py-16" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
          Skills
        </h2>
        <SkillsFilter selected={selected} onSelect={setSelected} />
        <SkillsGrid skills={filtered} />
      </div>
    </section>
  );
};

export default Skills;
