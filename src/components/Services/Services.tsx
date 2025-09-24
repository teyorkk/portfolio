import Reveal from "../Ui/Reveal";
import { FaReact, FaServer, FaDatabase } from "react-icons/fa";
import ServiceCard, { type Service } from "./ServiceCard";

const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and modern UIs with React, TypeScript, and Tailwind CSS.",
    icon: <FaReact className="text-cyan-500" />,
  },
  {
    title: "Backend & APIs",
    description:
      "Designing and integrating RESTful APIs, authentication, and server logic.",
    icon: <FaServer className="text-gray-800" />,
  },
  {
    title: "Database Management",
    description:
      "Schema design, queries, and optimization for relational databases.",
    icon: <FaDatabase className="text-blue-600" />,
  },
];

const Services = () => {
  return (
    <section className="py-12 sm:py-16" id="services">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900">
          Services
        </h2>
        <article className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 70}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Services;
