// React import not needed with automatic JSX runtime

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
  description?: string;
  skills?: string[];
};

interface CertificationCardProps {
  certification: Certification;
  onClick?: () => void;
}

const CertificationCard = ({
  certification,
  onClick,
}: CertificationCardProps) => {
  const { title, issuer, date, image } = certification;
  return (
    <>
      <div
        onClick={onClick}
        className="group block w-56 sm:w-64 select-none cursor-pointer"
        aria-label={`${title} by ${issuer}`}
      >
        <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              decoding="async"
            />
          </div>
          <div className="p-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
              {title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
              {issuer}
            </p>
            <p className="text-[11px] text-gray-500 dark:text-gray-500 mt-1">
              {date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificationCard;
