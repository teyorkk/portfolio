import AccentBar from "../Ui/AccentBar";
import { getTagHoverClasses } from "../../lib/tagStyles";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
  onClick?: () => void;
}

const hoverClassesForTag = (tag: string) => getTagHoverClasses(tag);

const ProjectCard = ({
  title,
  description,
  image,
  tags = [],
  onClick,
}: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="relative flex flex-col bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden group border border-gray-200 dark:border-gray-700 transform hover:scale-105 duration-300 h-full cursor-pointer"
    >
      {/* Accent */}
      <AccentBar className="z-10" />
      <div className="bg-white dark:bg-gray-900 overflow-hidden">
        <div className="relative w-full" style={{ paddingTop: "52%" }}>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            decoding="async"
          />
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-md mb-3 flex-1">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className={`px-2 py-1 text-xs rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-colors duration-200 ${hoverClassesForTag(
                  t
                )}`}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
