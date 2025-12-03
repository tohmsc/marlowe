"use client";

interface WorkflowPanelProps {
  onBack?: () => void;
}

export function WorkflowPanel({ onBack }: WorkflowPanelProps) {
  return (
    <div className="w-full md:w-[1000px] h-full md:h-[560px] flex items-center justify-center overflow-y-auto">
      <div
        onClick={onBack}
        className="cursor-pointer px-6 md:px-16 py-8 md:py-0 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-24 gap-y-6 md:gap-y-10 max-w-full">
        {/* Deal Flow */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-xs md:text-[11px] text-zinc-400 uppercase tracking-widest mb-3 md:mb-4">
            Deal Flow
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-sm md:text-[13px] text-zinc-600 space-y-2 md:space-y-2.5 leading-relaxed">
            <li>AI-powered target classification by sector & fit</li>
            <li>Automated founder & executive vetting</li>
            <li>Agent-generated company profiles & sponsor overviews</li>
            <li>Market mapping & competitor identification</li>
          </ul>
        </section>

        {/* Due Diligence */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-xs md:text-[11px] text-zinc-400 uppercase tracking-widest mb-3 md:mb-4">
            Due Diligence
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-sm md:text-[13px] text-zinc-600 space-y-2 md:space-y-2.5 leading-relaxed">
            <li>AI research from filings & alternative data</li>
            <li>Automated comparable analysis & benchmarking</li>
            <li>Intelligent VDR synthesis across documents</li>
            <li>AI-powered expert transcript summarization</li>
          </ul>
        </section>

        {/* Execution */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-xs md:text-[11px] text-zinc-400 uppercase tracking-widest mb-3 md:mb-4">
            Execution
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-sm md:text-[13px] text-zinc-600 space-y-2 md:space-y-2.5 leading-relaxed">
            <li>AI-assisted IC memo drafting</li>
            <li>Automated portfolio monitoring & sentiment analysis</li>
            <li>Intelligent presentation review & versioning</li>
            <li>Agent-prepared meeting prep & briefing materials</li>
          </ul>
        </section>

        {/* Capabilities */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-xs md:text-[11px] text-zinc-400 uppercase tracking-widest mb-3 md:mb-4">
            Capabilities
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-sm md:text-[13px] text-zinc-600 space-y-2 md:space-y-2.5 leading-relaxed">
            <li>Multi-format processing: Word, PDF, Excel, PPT</li>
            <li>Native output generation & compliance workflows</li>
            <li>Natural language data querying</li>
          </ul>
        </section>

        {/* Hint */}
        <p className="col-span-1 md:col-span-2 font-[family-name:var(--font-inter)] text-xs md:text-[11px] text-zinc-400 text-center mt-4 md:mt-2">
          click to return
        </p>
        </div>
      </div>
    </div>
  );
}
