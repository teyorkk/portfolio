import { FaReact, FaServer, FaDatabase } from "react-icons/fa";
import ServicesGrid from "./ServicesGrid";
import { type Service } from "./ServiceCard";
import servicesData from "../../data/services.json";

const iconMap: Record<string, React.ReactNode> = {
  react: <FaReact className="text-cyan-500" />,
  server: <FaServer className="text-gray-800 dark:text-gray-200" />,
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
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900 dark:text-gray-100">
          Services
        </h2>
        <ServicesGrid services={services} />
      </div>
    </section>
  );
};

export default Services;
