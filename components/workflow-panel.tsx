"use client";

interface WorkflowPanelProps {
  onBack?: () => void;
}

export function WorkflowPanel({ onBack }: WorkflowPanelProps) {
  const handleTouchEnd = (e: React.TouchEvent) => {
    // Super simple: any tap on workflows goes back to globe
    e.preventDefault();
    e.stopPropagation();
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="w-full md:w-[1000px] max-w-full">
      <div
        onClick={onBack}
        onTouchEnd={handleTouchEnd}
        className="cursor-pointer md:px-16 w-full"
      >
        {/* Segments Title */}
        <h2 className="font-[family-name:var(--font-inter)] text-sm md:text-base text-zinc-900 font-medium mb-6 md:mb-8 emboss-medium">
          Segments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-24 gap-y-6 md:gap-y-10 max-w-full">
        {/* Deal Flow */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-widest mb-2.5 md:mb-4">
            Deal Flow
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-xs md:text-[13px] text-zinc-600 space-y-1.5 md:space-y-2.5 leading-relaxed">
            <li>Automated founder & executive vetting</li>
            <li>Auto classification by industry sector, stage and fit</li>
            <li>Agent-generated company profiles & sponsor overviews</li>
            <li>Market labeling and competitor identification</li>
          </ul>
        </section>

        {/* Due Diligence */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-widest mb-2.5 md:mb-4">
            Due Diligence
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-xs md:text-[13px] text-zinc-600 space-y-1.5 md:space-y-2.5 leading-relaxed">
            <li>AI research from filings & alternative data</li>
            <li>Automated comparable analysis & benchmarking</li>
            <li>Intelligent VDR synthesis across documents</li>
            <li>AI-powered expert transcript summarization</li>
          </ul>
        </section>

        {/* Execution */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-[10px] md:text-[11px] text-zinc-400 uppercase tracking-widest mb-2.5 md:mb-4">
            Execution
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-xs md:text-[13px] text-zinc-600 space-y-1.5 md:space-y-2.5 leading-relaxed">
            <li>AI-assisted IC memo drafting</li>
            <li>Automated portfolio monitoring</li>
            <li>Agent-prepared meeting prep & briefing materials</li>
            <li>Intelligent presentation review & versioning</li>
            <li>Automated email & meeting sync</li>
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
