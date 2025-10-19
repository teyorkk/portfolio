import { FaGithub } from "react-icons/fa";

interface ProjectModalProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
  features?: string[];
}

const ProjectModal = ({
  title,
  description,
  image,
  link,
  tags = [],
  features = [],
}: ProjectModalProps) => {
  const tagColors = (tag: string) => {
    const key = tag.trim().toLowerCase();
    switch (key) {
      case "sqlite":
      case "react":
        return "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-700";
      case "tailwind":
      case "tailwind css":
        return "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 border-sky-300 dark:border-sky-700";
      case "flutter":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700";
      case "mysql":
        return "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-700";
      case "php":
        return "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border-indigo-300 dark:border-indigo-700";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600";
    }
  };

  return (
    <div className="p-6 md:p-8">
      {/* Project Image */}
      <div className="mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover"
          decoding="async"
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
        {title}
      </h2>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-sm font-medium rounded-full border ${tagColors(
                tag
              )}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Key Features
          </h3>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
              >
                <span className="text-green-500 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        {link.includes("github") && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            <FaGithub className="text-lg" />
            View Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
