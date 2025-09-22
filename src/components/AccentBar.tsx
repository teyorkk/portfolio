type AccentBarProps = {
  className?: string;
};

const AccentBar = ({ className = "" }: AccentBarProps) => (
  <div
    className={
      `pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-400 via-sky-300 to-rose-300 ` +
      className
    }
    aria-hidden
  />
);

export default AccentBar;
