import { FaPaperPlane } from "react-icons/fa";
import type { RefObject, MutableRefObject } from "react";

type ChatInputProps = {
  inputRef:
    | RefObject<HTMLInputElement>
    | MutableRefObject<HTMLInputElement | null>;
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
};

const ChatInput = ({
  inputRef,
  value,
  onChange,
  onSend,
  isLoading,
}: ChatInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-base"
          disabled={isLoading}
        />
        <button
          onClick={onSend}
          disabled={!value.trim() || isLoading}
          className="px-4 py-2.5 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          aria-label="Send message"
        >
          <FaPaperPlane className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
