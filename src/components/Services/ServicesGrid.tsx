import Reveal from "../Ui/Reveal";
import ServiceCard, { type Service } from "./ServiceCard";

interface ServicesGridProps {
  services: Service[];
}

const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <article className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
      {services.map((s, idx) => (
        <Reveal key={s.title} delay={idx * 70}>
          <ServiceCard service={s} />
        </Reveal>
      ))}
    </article>
  );
};

export default ServicesGrid;
