"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { generateMockResponse } from "@/utils/mockAI";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ChatInterface({ activeTab, setActiveTab }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setActiveTab("chat");

    try {
      // Use client-side mock AI since API routes don't work with static export
      const responseText = generateMockResponse(userMessage.content);

      // Simulate a slight delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 500));

      const assistantMessage: Message = {
        role: "assistant",
        content: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: "me", label: "Me", icon: "👤" },
    { id: "projects", label: "Projects", icon: "💼" },
    { id: "skills", label: "Skills", icon: "🛠️" },
    { id: "experience", label: "Experience", icon: "📊" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "contact", label: "Contact", icon: "📧" },
    { id: "chat", label: "Chat", icon: "💬" },
  ];

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex items-center justify-center gap-1.5 md:gap-2 p-2 md:p-4 border-b border-gray-200 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-all text-sm md:text-base ${
              activeTab === tab.id
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span className="text-base md:text-lg">{tab.icon}</span>
            <span className="font-medium hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Chat Messages - Only show when chat tab is active */}
      {activeTab === "chat" && (
        <div className="p-3 md:p-6 h-[400px] md:h-[500px] overflow-y-auto">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[80%] p-3 md:p-4 rounded-xl md:rounded-2xl ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "bg-gray-50 text-gray-800 border border-gray-200"
                  }`}
                >
                  <div className="prose prose-sm max-w-none text-sm md:text-base">
                    {message.role === "assistant" ? (
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    ) : (
                      <p className="text-white m-0">{message.content}</p>
                    )}
                  </div>
                  <div
                    className={`text-xs mt-1.5 md:mt-2 ${
                      message.role === "user" ? "text-blue-100" : "text-gray-400"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </motion.div>
          )}

          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full text-gray-400">
              <p>Ask me anything about Dennis...</p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-3 md:p-4 border-t border-gray-200">
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything"
            disabled={isLoading}
            className="flex-1 px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2.5 md:p-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
