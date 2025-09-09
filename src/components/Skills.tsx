
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
  FaPython,
  FaPhp,
  FaGit,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import {
  SiSharp,
  SiMysql,
  SiGodotengine,
  SiTailwindcss,
  SiTypescript,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "C#", icon: <SiSharp className="text-purple-700" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-800" /> },
  { name: "Java", icon: <FaJava className="text-orange-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Godot", icon: <SiGodotengine className="text-gray-700" /> },
  { name: "Git", icon: <FaGit className="text-orange-600" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
];

const Skills = () => {
  return (
    <section className="py-16 bg-white" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-gray-100 rounded-2xl shadow-xl border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 card"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 shadow-inner">
                <span className="text-4xl">{skill.icon}</span>
              </div>
              <span className="text-lg font-semibold text-gray-800 tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
