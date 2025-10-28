import { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";
import { BOT_AVATAR_URL } from "./config";

type ChatHeaderProps = {
  sessionId: string;
  onClose: () => void;
};

const ChatHeader = ({ sessionId, onClose }: ChatHeaderProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3">
        {imgError ? (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <FaRobot className="text-white text-lg" />
          </div>
        ) : (
          <img
            src={BOT_AVATAR_URL}
            alt="AI bot avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white/60 dark:ring-black/30"
            onError={() => setImgError(true)}
          />
        )}
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            Moises Ai
          </h3>
          <p
            className="text-xs text-gray-500 dark:text-gray-400 cursor-help"
            title={`Session: ${sessionId}`}
          >
            Online • Session Active
          </p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        aria-label="Close chat"
      >
        <FaTimes className="text-gray-600 dark:text-gray-400" />
      </button>
    </div>
  );
};

export default ChatHeader;
