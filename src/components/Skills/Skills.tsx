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
import SkillCard from "./SkillCard";
import Reveal from "../Ui/Reveal";
import { useMemo, useState } from "react";
import skillsData from "../../data/skills.json";

type Category =
  | "All"
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools"
  | "Mobile";

const skillIconMap: Record<string, React.ReactNode> = {
  css: <FaCss3Alt className="text-blue-500" />,
  html: <FaHtml5 className="text-orange-500" />,
  js: <FaJs className="text-yellow-400" />,
  nextjs: <SiNextdotjs className="text-black" />,
  react: <FaReact className="text-cyan-400" />,
  tailwind: <SiTailwindcss className="text-sky-400" />,
  ts: <SiTypescript className="text-blue-600" />,
  php: <FaPhp className="text-indigo-700" />,
  sqlite: <SiSqlite className="text-blue-400" />,
  mysql: <SiMysql className="text-blue-500" />,
  postgres: <SiPostgresql className="text-blue-900" />,
  git: <FaGit className="text-orange-600" />,
  github: <FaGithub className="text-gray-800" />,
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
    // Sort alphabetically by name
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [selected]);

  const categories: Category[] = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "Mobile",
  ];

  return (
    <section className="py-16 " id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Skills
        </h2>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {categories.map((cat) => {
            const active = selected === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  active
                    ? "bg-gray-900 text-white border-gray-900 focus:ring-gray-900"
                    : "bg-white/80 text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400 hover:-translate-y-0.5 focus:ring-gray-400"
                }`}
                aria-pressed={active}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filtered.map((skill, idx) => (
            <Reveal key={skill.name} delay={idx * 60}>
              <SkillCard icon={skill.icon} name={skill.name} />
            </Reveal>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Skills;
