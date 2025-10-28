import type { PropsWithChildren } from "react";
import AccentBar from "../Ui/AccentBar";

type ChatWindowProps = PropsWithChildren<{
  isOpen: boolean;
  ariaLabel?: string;
}>;

const ChatWindow = ({
  isOpen,
  ariaLabel = "AI Chat Assistant",
  children,
}: ChatWindowProps) => {
  return (
    <div
      className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[32rem] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-50 origin-bottom-right ${
        isOpen
          ? "animate-chatSlideIn pointer-events-auto"
          : "animate-chatSlideOut pointer-events-none"
      }`}
      role="dialog"
      aria-label={ariaLabel}
      aria-hidden={!isOpen}
    >
      <AccentBar />
      {children}
    </div>
  );
};

export default ChatWindow;
