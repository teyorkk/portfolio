import { FaGithub } from "react-icons/fa";
import { getTagBadgeClasses } from "../../lib/tagStyles";

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
  const tagColors = (tag: string) => getTagBadgeClasses(tag);

  return (
    <div className="p-4 sm:p-6">
      {/* Project Image */}
      <div className="mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-h-[300px] sm:max-h-[650px] object-cover"
          decoding="async"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h2>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
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
      <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      {features.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
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
      <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
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
