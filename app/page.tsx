"use client";

import { useEffect, useState } from "react";
import { AsciiPanel } from "@/components/ascii-panel";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [isHoveringAccess, setIsHoveringAccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Trigger load animations
    const timer = setTimeout(() => setLoaded(true), 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Mobile Layout - vertical stack */}
      <div className="md:hidden h-dvh bg-[#f5f4f0] overflow-hidden flex flex-col p-6 pb-16">
        {/* Top row: Request Access right */}
        <div className="flex justify-end items-center">
          <button
            onMouseEnter={() => setIsHoveringAccess(true)}
            onMouseLeave={() => {
              setIsHoveringAccess(false);
              setCopied(false);
            }}
            onClick={() => {
              navigator.clipboard.writeText("contact@askmarlowe.com");
              setCopied(true);
              window.location.href = "mailto:contact@askmarlowe.com";
            }}
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 hover:text-zinc-600 cursor-pointer relative w-24 text-right ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            style={{
              transitionProperty: "opacity, transform, color",
              transitionDuration: loaded ? "300ms" : "1000ms",
              transitionTimingFunction: "ease-out",
              transitionDelay: loaded ? "0ms" : "400ms",
            }}
          >
            <span
              className={`transition-opacity duration-500 ease-out ${
                isHoveringAccess || copied ? "opacity-0" : "opacity-100"
              }`}
            >
              Request Access
            </span>
            <span
              className={`absolute right-0 top-0 whitespace-nowrap transition-opacity duration-500 ease-out ${
                isHoveringAccess && !copied ? "opacity-100" : "opacity-0"
              }`}
            >
              contact@askmarlowe.com
            </span>
            <span
              className={`absolute right-0 top-0 whitespace-nowrap transition-opacity duration-500 ease-out ${
                copied ? "opacity-100" : "opacity-0"
              }`}
            >
              Copied!
            </span>
          </button>
        </div>

        {/* Globe - centered, takes up middle space */}
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <div
            className={`transition-all duration-1500 ease-out ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <AsciiPanel />
          </div>
        </div>

        {/* Bottom section: Description and Marlowe */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span
            className={`font-[family-name:var(--font-inter)] text-xs text-zinc-600 transition-all duration-1000 ease-out max-w-xs ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Intelligent AI workspace for investment teams
          </span>
          <span
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all duration-1200 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            Marlowe
          </span>
        </div>
      </div>

      {/* Desktop Layout - absolute positioning */}
      <div className="hidden md:flex h-dvh bg-[#f5f4f0] overflow-hidden items-center justify-center p-12">
        {/* Request Access - top right */}
        <div className="absolute top-12 right-12">
          <button
            onMouseEnter={() => setIsHoveringAccess(true)}
            onMouseLeave={() => {
              setIsHoveringAccess(false);
              setCopied(false);
            }}
            onClick={() => {
              navigator.clipboard.writeText("contact@askmarlowe.com");
              setCopied(true);
              window.location.href = "mailto:contact@askmarlowe.com";
            }}
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 hover:text-zinc-600 cursor-pointer relative ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            style={{
              transitionProperty: "opacity, transform, color",
              transitionDuration: loaded ? "300ms" : "1000ms",
              transitionTimingFunction: "ease-out",
              transitionDelay: loaded ? "0ms" : "400ms",
            }}
          >
            <span
              className={`transition-opacity duration-500 ease-out ${
                isHoveringAccess || copied ? "opacity-0" : "opacity-100"
              }`}
            >
              Request Access
            </span>
            <span
              className={`absolute right-0 top-0 whitespace-nowrap transition-opacity duration-500 ease-out ${
                isHoveringAccess && !copied ? "opacity-100" : "opacity-0"
              }`}
            >
              contact@askmarlowe.com
            </span>
            <span
              className={`absolute right-0 top-0 whitespace-nowrap transition-opacity duration-500 ease-out ${
                copied ? "opacity-100" : "opacity-0"
              }`}
            >
              Copied!
            </span>
          </button>
        </div>

        {/* Globe - center */}
        <div
          className={`transition-all duration-1500 ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <AsciiPanel />
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
            Marlowe is a private AI workspace for investment teams that builds and applies custom software agents to accelerate deal review and underwriting.
          </span>
        </div>

        {/* Marlowe - bottom center */}
        <div className="absolute bottom-12 left-12 right-12 flex justify-center">
          <span
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all duration-1200 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "1400ms" }}
          >
            Marlowe
          </span>
        </div>
      </div>
    </>
  );
}
