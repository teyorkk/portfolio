import type { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  name: string;
  className?: string;
}

const SkillCard = ({ icon, name, className = "" }: SkillCardProps) => {
  return (
    <div
      className={`flex flex-col items-center bg-gray-100 rounded-2xl shadow-xl border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 shadow-inner">
        <span className="text-4xl">{icon}</span>
      </div>
      <span className="text-lg font-semibold text-gray-800 tracking-wide">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
