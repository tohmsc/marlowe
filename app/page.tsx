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
    console.log("toggleView called, current showWorkflows:", showWorkflows);
    setShowWorkflows((prev) => !prev);
  };

  const toggleLogo = () => {
    setShowLogo((prev) => !prev);
  };

  return (
    <>
      {/* Mobile Layout - absolute positioning like desktop */}
      <div className="md:hidden h-dvh bg-[#f5f4f0] paper-texture business-card-edge-strong overflow-hidden relative">
        {/* Logo - top left */}
        <div className="absolute top-6 left-6 z-10 pointer-events-none">
          <img
            src="/icon.svg"
            alt="Marlowe"
            className={`w-8 h-8 transition-all duration-1000 ease-out ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            }`}
            style={{ transitionDelay: "600ms" }}
          />
        </div>

        {/* Contact - top right */}
        <div className="absolute top-6 right-6 z-10 pointer-events-none">
          <a
            href="https://cal.com/lets-meet/"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 hover:text-zinc-600 cursor-pointer emboss-medium emboss-interactive pointer-events-auto ${
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

        {/* Globe - center */}
        {!showWorkflows && (
          <div className="absolute inset-0 top-20 bottom-24" style={{ zIndex: 5 }}>
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out ${
                loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: "200ms",
                zIndex: 10
              }}
            >
              {/* Wrapper for desktop clicks */}
              <div className="relative">
                <AsciiPanel onClick={toggleView} />
                {/* Mobile-only transparent tap overlay - simple and reliable */}
                <div
                  className="md:hidden absolute inset-0 -inset-x-8 -inset-y-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleView();
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    toggleView();
                  }}
                  style={{
                    touchAction: 'manipulation',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Workflows - full screen overlay on mobile */}
        <div
          className={`absolute inset-0 overflow-y-auto bg-[#f5f4f0] paper-texture business-card-edge-strong transition-all duration-300 ease-out ${
            showWorkflows ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
          }`}
          style={{
            transitionDelay: showWorkflows ? "200ms" : "0ms",
            zIndex: showWorkflows ? 20 : 1
          }}
        >
          <div className="min-h-full flex flex-col justify-center px-6 py-20">
            <WorkflowPanel onBack={toggleView} />
          </div>
        </div>

        {/* Marlowe and Description - bottom left */}
        <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none flex flex-col gap-1">
          <span
            onClick={toggleLogo}
            onTouchStart={toggleLogo}
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all duration-1000 ease-out emboss-brand pointer-events-auto ${
              logoFadedOut ? "opacity-0" : loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: logoFadedOut ? "0ms" : "600ms" }}
          >
            Marlowe
          </span>
          <span
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-600 transition-all duration-1200 ease-out emboss-subtle ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            AI teammates for investment teams
          </span>
        </div>
      </div>

      {/* Desktop Layout - absolute positioning */}
      <div className="hidden md:flex h-dvh bg-[#f5f4f0] paper-texture business-card-edge-strong overflow-hidden items-center justify-center p-12">
        {/* Logo and Wordmark - top left */}
        <div
          className="absolute top-12 left-12 flex items-center gap-2"
          onMouseEnter={() => {
            console.log('Hovering!');
            setShowLogo(true);
          }}
          onMouseLeave={() => {
            console.log('Left hover');
            setShowLogo(false);
          }}
        >
          <img
            src="/icon.svg"
            alt="Marlowe"
            className={`w-8 h-8 transition-all duration-1000 ease-out ${
              showLogo ? "opacity-100" : logoFadedOut ? "opacity-0" : loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: showLogo ? "0ms" : logoFadedOut ? "0ms" : "1600ms" }}
          />
          <div className="overflow-hidden">
            <span
              className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all emboss-brand inline-block whitespace-nowrap ${
                showLogo
                  ? "opacity-100 translate-x-0 duration-300 ease-out"
                  : logoFadedOut
                  ? "opacity-0 -translate-x-full duration-300 ease-out"
                  : loaded
                  ? "opacity-100 translate-x-0 duration-1000 ease-out"
                  : "opacity-0 -translate-x-full duration-1000 ease-out"
              }`}
              style={{ transitionDelay: showLogo ? "0ms" : logoFadedOut ? "0ms" : "1600ms" }}
            >
              Marlowe
            </span>
          </div>
        </div>

        {/* Contact - top right */}
        <div className="absolute top-12 right-12 flex items-center h-8">
          <a
            href="https://cal.com/lets-meet/"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 hover:text-zinc-600 cursor-pointer emboss-medium emboss-interactive ${
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
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all duration-1000 ease-out emboss-medium ${
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
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all duration-1000 ease-out inline-block emboss-subtle ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            Marlowe is a private AI workspace for investment teams. Our agents learn and improve through use, training your firm&apos;s own digital teammates to augment deal review and underwriting.
          </span>
        </div>
      </div>
    </>
  );
}
