type Category =
  | "All"
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools"
  | "Mobile";

interface SkillsFilterProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

const categories: Category[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Mobile",
];

const SkillsFilter = ({ selected, onSelect }: SkillsFilterProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
      {categories.map((cat) => {
        const active = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              active
                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100 focus:ring-gray-900 dark:focus:ring-gray-100"
                : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:-translate-y-0.5 focus:ring-gray-400 dark:focus:ring-gray-500"
            }`}
            aria-pressed={active}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default SkillsFilter;
export type { Category };
