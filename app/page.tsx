"use client";

import { useEffect, useState } from "react";
import { AsciiPanel } from "@/components/ascii-panel";
import { WorkflowPanel } from "@/components/workflow-panel";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showWorkflows, setShowWorkflows] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [logoFadedOut, setLogoFadedOut] = useState(false);

  useEffect(() => {
    // Trigger load animations
    const timer = setTimeout(() => setLoaded(true), 100);

    // Fade out logo after it's been visible
    const fadeOutTimer = setTimeout(() => setLogoFadedOut(true), 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  const toggleView = () => {
    setShowWorkflows((prev) => !prev);
  };

  const toggleLogo = () => {
    setShowLogo((prev) => !prev);
  };

  return (
    <>
      {/* Mobile Layout - vertical stack */}
      <div className="md:hidden h-dvh bg-[#f5f4f0] overflow-hidden flex flex-col p-6">
        {/* Top row: Contact right */}
        <div className="flex justify-end items-center">
          <a
            href="https://cal.com/lets-meet/"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 hover:text-zinc-600 cursor-pointer ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            style={{
              transitionProperty: "opacity, transform, color",
              transitionDuration: loaded ? "300ms" : "1000ms",
              transitionTimingFunction: "ease-out",
              transitionDelay: loaded ? "0ms" : "400ms",
            }}
          >
            Contact
          </a>
        </div>

        {/* Globe / Workflow Panel - centered, takes up middle space */}
        <div className="flex-1 flex items-center justify-center overflow-hidden relative">
          {/* Globe */}
          <div
            className={`transition-all duration-500 ease-out ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } ${showWorkflows ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}
            style={{ transitionDelay: showWorkflows ? "0ms" : "300ms" }}
          >
            <AsciiPanel onClick={toggleView} />
          </div>
          {/* Workflows - full screen overlay on mobile */}
          <div
            className={`absolute inset-0 bg-[#f5f4f0] flex items-center justify-center transition-all duration-500 ease-out ${
              showWorkflows ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <WorkflowPanel onBack={toggleView} />
          </div>
        </div>

        {/* Bottom section: Logo, Marlowe and Description */}
        <div className="flex flex-col items-start gap-2">
          <img
            src="/icon.svg"
            alt="Marlowe"
            className={`w-8 h-8 mb-1 transition-all duration-1000 ease-out ${
              showLogo ? "opacity-100" : "opacity-0"
            }`}
          />
          <span
            onClick={toggleLogo}
            onTouchStart={toggleLogo}
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all duration-1000 ease-out cursor-pointer ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Marlowe
          </span>
          <span
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-600 transition-all duration-1200 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            AI teammates for investment teams
          </span>
        </div>
      </div>

      {/* Desktop Layout - absolute positioning */}
      <div className="hidden md:flex h-dvh bg-[#f5f4f0] overflow-hidden items-center justify-center p-12">
        {/* Logo and Wordmark - top left */}
        <div
          className="absolute top-12 left-12 flex items-center gap-2"
          onMouseEnter={() => setShowLogo(true)}
          onMouseLeave={() => setShowLogo(false)}
        >
          <img
            src="/icon.svg"
            alt="Marlowe"
            className={`w-8 h-8 transition-all duration-1000 ease-out ${
              showLogo ? "opacity-100" : logoFadedOut ? "opacity-0" : loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: showLogo ? "0ms" : logoFadedOut ? "0ms" : "1600ms" }}
          />
          <span
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all duration-1000 ease-out ${
              showLogo ? "opacity-100" : logoFadedOut ? "opacity-0" : loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: showLogo ? "0ms" : logoFadedOut ? "0ms" : "1600ms" }}
          >
            Marlowe
          </span>
        </div>

        {/* Contact - top right */}
        <div className="absolute top-12 right-12">
          <a
            href="https://cal.com/lets-meet/"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 hover:text-zinc-600 cursor-pointer ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            style={{
              transitionProperty: "opacity, transform, color",
              transitionDuration: loaded ? "300ms" : "1000ms",
              transitionTimingFunction: "ease-out",
              transitionDelay: loaded ? "0ms" : "400ms",
            }}
          >
            Contact
          </a>
        </div>

        {/* Globe / Workflow Panel - center */}
        <div
          className={`relative transition-all duration-1500 ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Globe */}
          <div
            className={`transition-all duration-500 ease-out ${
              showWorkflows ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <AsciiPanel onClick={toggleView} />
          </div>
          {/* Workflows */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
              showWorkflows ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <WorkflowPanel onBack={toggleView} />
          </div>
        </div>

        {/* Location - bottom right */}
        <div className="absolute bottom-12 right-12">
          <span
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all duration-1000 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            San Francisco, California
          </span>
        </div>

        {/* Description - bottom left */}
        <div className="absolute bottom-12 left-12 max-w-sm">
          <span
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all duration-1000 ease-out inline-block ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            Marlowe is a private AI workspace for investment teams. Our agents learn and improve through use, training your firm's own digital teammates to augment deal review and underwriting.
          </span>
        </div>
      </div>
    </>
  );
}
