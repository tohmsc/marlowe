"use client";

import { useEffect, useState } from "react";
import { AsciiPanel } from "@/components/ascii-panel";

export default function Home() {
  const [dateTime, setDateTime] = useState<string>("");
  const [loaded, setLoaded] = useState(false);
  const [isHoveringAccess, setIsHoveringAccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { timeZone: "America/Los_Angeles" };
      const sfDate = new Date(now.toLocaleString("en-US", options));
      const hours = String(sfDate.getHours()).padStart(2, "0");
      const minutes = String(sfDate.getMinutes()).padStart(2, "0");
      setDateTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Trigger load animations
    const timer = setTimeout(() => setLoaded(true), 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="h-screen bg-[#f5f4f0] overflow-hidden flex items-center justify-center p-12">
      {/* Time - appears first */}
      <div className="absolute top-12 left-12 right-12 flex justify-center">
        <span
          className={`font-[family-name:var(--font-inter)] text-sm text-zinc-900 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {dateTime}
        </span>
      </div>

      {/* Request Access - appears second */}
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

      {/* Location - appears third */}
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

      {/* Globe - fades in from center */}
      <div
        className={`transition-all duration-1500 ease-out ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <AsciiPanel />
      </div>

      {/* Description - appears fourth */}
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

      {/* Marlowe - appears last, the finale */}
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
  );
}
