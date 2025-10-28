import { FaRobot, FaTimes } from "react-icons/fa";

type FloatingButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const FloatingButton = ({ isOpen, onToggle }: FloatingButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 ease-out flex items-center justify-center z-50 group ${
        isOpen
          ? "scale-90 rotate-180"
          : "scale-100 rotate-0 hover:scale-110 hover:-translate-y-1"
      }`}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <div
        className={`relative transition-all duration-500 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        {isOpen ? (
          <FaTimes
            className="text-xl sm:text-2xl transition-all duration-300 ease-out"
            style={{ animation: isOpen ? "iconSpin 0.5s ease-out" : "none" }}
          />
        ) : (
          <FaRobot className="text-xl sm:text-2xl transition-all duration-300 ease-out group-hover:scale-110" />
        )}
      </div>
      {!isOpen && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse transition-all duration-300"></span>
      )}
    </button>
  );
};

export default FloatingButton;
