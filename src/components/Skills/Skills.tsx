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
import { SiFlutter } from "react-icons/si";
import {
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
import React, { useMemo, useState } from "react";

type Category =
  | "All"
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools"
  | "Mobile";

const allSkills: {
  name: string;
  icon: React.ReactNode;
  category: Exclude<Category, "All">;
}[] = [
  // Frontend
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-500" />,
    category: "Frontend",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    category: "Frontend",
  },
  {
    name: "Nextjs",
    icon: <SiNextdotjs className="text-black" />,
    category: "Frontend",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    category: "Frontend",
  },
  // Backend
  {
    name: "PHP",
    icon: <FaPhp className="text-indigo-700" />,
    category: "Backend",
  },
  // Database
  {
    name: "SQLite",
    icon: <SiSqlite className="text-blue-400" />,
    category: "Database",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-500" />,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-900" />,
    category: "Database",
  },
  // Tools
  {
    name: "Git",
    icon: <FaGit className="text-orange-600" />,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800" />,
    category: "Tools",
  },
  // Mobile
  {
    name: "Flutter",
    icon: <SiFlutter className="text-blue-400" />,
    category: "Mobile",
  },
  // Programming Languages (mapped logically)
  {
    name: "C#",
    icon: <SiSharp className="text-purple-700" />,
    category: "Backend",
  },
  {
    name: "Java",
    icon: <FaJava className="text-orange-600" />,
    category: "Backend",
  },
];

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
