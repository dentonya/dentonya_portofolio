"use client";

import { useState } from "react";
import ProfileSection from "@/components/ProfileSection";
import ChatInterface from "@/components/ChatInterface";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("me");

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-3 md:p-6 lg:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        {/* Profile Content Section */}
        <ProfileSection activeTab={activeTab} />
        
        {/* Tab Navigation & Chat */}
        <ChatInterface activeTab={activeTab} setActiveTab={setActiveTab} />

        <footer className="text-center mt-8 text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Dennis Atonya. Built with Next.js and TypeScript.</p>
        </footer>
      </div>
    </main>
  );
}
