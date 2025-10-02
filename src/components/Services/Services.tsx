import Reveal from "../Ui/Reveal";
import { FaReact, FaServer, FaDatabase } from "react-icons/fa";
import ServiceCard, { type Service } from "./ServiceCard";
import servicesData from "../../data/services.json";

const iconMap: Record<string, React.ReactNode> = {
  react: <FaReact className="text-cyan-500" />,
  server: <FaServer className="text-gray-800" />,
  database: <FaDatabase className="text-blue-600" />,
};

const services: Service[] = servicesData.map((s) => ({
  title: s.title,
  description: s.description,
  icon: iconMap[s.icon] ?? <FaReact />,
}));

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
