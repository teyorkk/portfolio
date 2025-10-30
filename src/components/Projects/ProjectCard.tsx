import AccentBar from "../Ui/AccentBar";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
  onClick?: () => void;
}

const hoverClassesForTag = (tag: string) => {
  const key = tag.trim().toLowerCase();
  switch (key) {
    case "n8n":
      return "hover:bg-pink-600 hover:border-pink-600 hover:text-white";
    case "sqlite":
      return "hover:bg-cyan-600 hover:border-cyan-600 hover:text-white";
    case "react":
      return "hover:bg-cyan-600 hover:border-cyan-600 hover:text-white";
    case "tailwind":
    case "tailwind css":
      return "hover:bg-sky-600 hover:border-sky-600 hover:text-white";
    case "flutter":
      return "hover:bg-blue-600 hover:border-blue-600 hover:text-white";
    case "mysql":
      return "hover:bg-orange-500 hover:border-orange-500 hover:text-white";
    case "php":
      return "hover:bg-indigo-600 hover:border-indigo-600 hover:text-white";
    case "typescript":
    case "ts":
      return "hover:bg-blue-600 hover:border-blue-600 hover:text-white";
    case "nextjs":
      return "hover:bg-gray-900 hover:border-gray-900 hover:text-white";
    case "postgres":
    case "postgresql":
      return "hover:bg-blue-800 hover:border-blue-800 hover:text-white";
    case "java":
      return "hover:bg-orange-600 hover:border-orange-600 hover:text-white";
    case "c#":
    case "csharp":
      return "hover:bg-purple-700 hover:border-purple-700 hover:text-white";
    case "git":
      return "hover:bg-orange-600 hover:border-orange-600 hover:text-white";
    case "github":
      return "hover:bg-gray-900 hover:border-gray-900 hover:text-white";
    case "kotlin":
      return "hover:bg-purple-600 hover:border-purple-600 hover:text-white";
    case "firebase":
      return "hover:bg-yellow-600 hover:border-yellow-600 hover:text-white";
    default:
      return "hover:bg-gray-800 hover:border-gray-800 hover:text-white";
  }
};

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
