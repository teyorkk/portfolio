import type { ReactNode } from "react";
import AccentBar from "../Ui/AccentBar";

export type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div
      className="group relative overflow-hidden w-full h-40 sm:h-45 flex flex-col rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      aria-label={`${service.title} service card`}
      role="article"
    >
      <AccentBar />
      <div className="flex items-center gap-2.5">
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 shadow-inner transition-transform duration-200 group-hover:scale-105">
          <span className="text-xl sm:text-2xl transition-transform duration-200 group-hover:scale-110">
            {service.icon}
          </span>
        </div>
        <h3
          className="text-base sm:text-lg font-semibold text-gray-900 leading-snug"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical" as any,
            overflow: "hidden",
          }}
        >
          {service.title}
        </h3>
      </div>
      <p
        className="mt-2 text-sm sm:text-base leading-relaxed text-gray-600 flex-1 overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical" as any,
        }}
      >
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
