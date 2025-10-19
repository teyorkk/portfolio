import {
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCertificate,
} from "react-icons/fa";

interface CertificationModalProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
  description?: string;
  skills?: string[];
}

const CertificationModal = ({
  title,
  issuer,
  date,
  image,
  link,
  description,
  skills = [],
}: CertificationModalProps) => {
  return (
    <div className="p-6 md:p-8">
      {/* Certificate Image */}
      <div className="mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain"
          decoding="async"
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h2>

      {/* Issuer and Date */}
      <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <FaCertificate className="text-indigo-500" />
          <span className="font-medium">{issuer}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-500" />
          <span>{date}</span>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
          {description}
        </p>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Skills Covered
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border border-indigo-300 dark:border-indigo-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Button */}
      {link && (
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            <FaExternalLinkAlt className="text-sm" />
            View Certificate
          </a>
        </div>
      )}
    </div>
  );
};

export default CertificationModal;
