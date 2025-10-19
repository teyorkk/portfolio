// React import not needed with automatic JSX runtime

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
};

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard = ({ certification }: CertificationCardProps) => {
  const { title, issuer, date, image, link } = certification;
  return (
    <>
      <a
        href={link || "#"}
        target={link ? "_blank" : undefined}
        rel={link ? "noreferrer" : undefined}
        className="group block w-56 sm:w-64 select-none"
        aria-label={`${title} by ${issuer}`}
      >
        <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200 bg-white">
          <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
              {title}
            </h3>
            <p className="text-xs text-gray-600 line-clamp-1">{issuer}</p>
            <p className="text-[11px] text-gray-500 mt-1">{date}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default CertificationCard;
