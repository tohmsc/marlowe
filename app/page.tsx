"use client";

import { useEffect, useState } from "react";
import { AsciiPanel } from "@/components/ascii-panel";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

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

        {/* Bottom section: Marlowe and Description */}
        <div className="flex flex-col items-start gap-2">
          <span
            className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all duration-1000 ease-out ${
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
            Marlowe is a private AI workspace for investment teams. Our agents learn and improve through use, training your firm's own digital teammates to augment deal review and underwriting.
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
