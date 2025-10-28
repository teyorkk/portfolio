import { useState, useRef, useEffect } from "react";
import { sendMessageToN8N } from "../lib/chatbotClient";
import type { Message } from "../lib/chatTypes";
import ChatWindow from "./Chatbot/ChatWindow";
import ChatHeader from "./Chatbot/ChatHeader";
import ChatMessages from "./Chatbot/ChatMessages";
import ChatInput from "./Chatbot/ChatInput";
import FloatingButton from "./Chatbot/FloatingButton";

// Message type moved to shared types file

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! I'm Moises' AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Always generate a fresh session ID on each page load/refresh
  const [sessionId] = useState(
    () => `session_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
  );
  const inputRef = useRef<HTMLInputElement>(null);

  // Get n8n webhook URL from environment variable
  const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;

  // Auto-scroll is handled inside ChatMessages

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // sendMessageToN8N moved to lib/chatbotClient

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // 1) Check custom replies first (bypass webhook when matched)

    // Get bot response from n8n (pass history including current user message)
    const botResponseText = await sendMessageToN8N(
      inputValue,
      sessionId,
      [...messages, userMessage],
      N8N_WEBHOOK_URL
    );

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponseText,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <>
      <ChatWindow isOpen={isOpen} ariaLabel="AI Chat Assistant">
        <ChatHeader sessionId={sessionId} onClose={() => setIsOpen(false)} />
        <ChatMessages messages={messages} isLoading={isLoading} />
        <ChatInput
          inputRef={inputRef}
          value={inputValue}
          onChange={setInputValue}
          onSend={handleSendMessage}
          isLoading={isLoading}
        />
      </ChatWindow>

      <FloatingButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  );
};

export default ChatBot;
