"use client";

import { useRef } from "react";

interface WorkflowPanelProps {
  onBack?: () => void;
}

export function WorkflowPanel({ onBack }: WorkflowPanelProps) {
  const touchStart = useRef<{ x: number; y: number; time: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;

    const touch = e.changedTouches[0];
    const deltaX = Math.abs(touch.clientX - touchStart.current.x);
    const deltaY = Math.abs(touch.clientY - touchStart.current.y);
    const deltaTime = Date.now() - touchStart.current.time;

    // Only trigger back on a tap (minimal movement, quick touch)
    if (deltaX < 10 && deltaY < 10 && deltaTime < 300) {
      e.preventDefault();
      e.stopPropagation();
      if (onBack) {
        onBack();
      }
    }

    touchStart.current = null;
  };

  return (
    <div className="w-full md:w-[1000px] max-w-full">
      <div
        onClick={onBack}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="cursor-pointer md:px-16 w-full"
      >
        {/* Title */}
        <h2 className="font-[family-name:var(--font-inter)] text-sm md:text-base text-zinc-900 font-medium mb-6 md:mb-8 emboss-medium">
          À la carte
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-24 gap-y-6 md:gap-y-10 max-w-full">
        {/* Deal Flow */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-widest mb-2.5 md:mb-4">
            Deal Flow
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-xs md:text-[13px] text-zinc-600 space-y-1.5 md:space-y-2.5 leading-relaxed">
            <li>Auto classification by industry sector, stage and fit</li>
            <li>Automated founder & executive vetting</li>
            <li>Market labeling and competitor identification</li>
            <li>Agent-generated company profiles & sponsor overviews</li>
          </ul>
        </section>

        {/* Due Diligence */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-widest mb-2.5 md:mb-4">
            Due Diligence
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-xs md:text-[13px] text-zinc-600 space-y-1.5 md:space-y-2.5 leading-relaxed">
            <li>AI research from filings & alternative data</li>
            <li>Intelligent VDR synthesis across documents</li>
            <li>AI-powered expert transcript summarization</li>
            <li>Automated comparable analysis & benchmarking</li>
          </ul>
        </section>

        {/* Execution */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-widest mb-2.5 md:mb-4">
            Execution
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-xs md:text-[13px] text-zinc-600 space-y-1.5 md:space-y-2.5 leading-relaxed">
            <li>Agent-prepared meeting prep & briefing materials</li>
            <li>AI-assisted IC memo drafting</li>
            <li>Intelligent presentation review & versioning</li>
            <li>Automated email & meeting sync</li>
            <li>Automated portfolio monitoring</li>
          </ul>
        </section>

        {/* Capabilities */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-widest mb-2.5 md:mb-4">
            Capabilities
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-xs md:text-[13px] text-zinc-600 space-y-1.5 md:space-y-2.5 leading-relaxed">
            <li>Multi-format processing: Word, PDF, Excel, PPT</li>
            <li>Native output generation & compliance workflows</li>
            <li>Natural language data querying</li>
            <li>AI agents in Excel building models linked to live data sources</li>
            <li>Firm standards and processes integration</li>
          </ul>
        </section>

        {/* Hint */}
        <p className="col-span-1 md:col-span-2 font-[family-name:var(--font-inter)] text-[10px] md:text-[11px] text-zinc-400 text-center mt-6 md:mt-2">
          tap to return
        </p>
        </div>
      </div>
    </div>
  );
}
