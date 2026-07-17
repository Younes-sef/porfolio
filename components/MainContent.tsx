"use client";
import { useState } from "react";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";

type Tab = "About" | "Resume" | "Projects";

export default function MainContent() {
  const [activeTab, setActiveTab] = useState<Tab>("Projects");

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return <About />;
      case "Resume":
        return <Resume />;
      case "Projects":
        return <Projects />;
      default:
        return (
          <div className="flex items-center justify-center h-64 text-muted animate-in fade-in">
            {activeTab} section coming soon...
          </div>
        );
    }
  };

  const navItems: Tab[] = ["About", "Resume", "Projects"];

  return (
    <div className="bg-card rounded-2xl border border-line p-8 md:p-10 flex-1 relative min-h-[80vh] md:min-h-0 pb-24 md:pb-10 overflow-hidden">
      
      {/* Top Nav (Pill on desktop) */}
      <nav className="absolute top-0 right-0 bg-paper border border-line rounded-bl-2xl rounded-tr-2xl hidden md:flex items-center px-8 py-5 gap-8 z-20">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`font-medium transition-colors ${
              activeTab === item ? "text-accent" : "text-muted hover:text-ink"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Mobile Nav (Bottom Bar) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-line md:hidden flex justify-between px-6 py-4 z-50 rounded-t-2xl shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`font-medium text-sm transition-colors ${
              activeTab === item ? "text-accent" : "text-muted"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Main Content Area */}
      <div className="pt-2 md:pt-12">
        {renderContent()}
      </div>

    </div>
  );
}
