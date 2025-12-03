"use client";

interface WorkflowPanelProps {
  onBack?: () => void;
}

export function WorkflowPanel({ onBack }: WorkflowPanelProps) {
  return (
    <div
      onClick={onBack}
      className="w-[1000px] h-[560px] cursor-pointer px-16 flex items-center justify-center"
    >
      <div className="grid grid-cols-2 gap-x-24 gap-y-10">
        {/* Deal Sourcing */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-[11px] text-zinc-400 uppercase tracking-widest mb-4">
            Deal Sourcing
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-[13px] text-zinc-600 space-y-2.5 leading-relaxed">
            <li>Target classification by sector & fit</li>
            <li>Founder & executive vetting</li>
            <li>Company profiles & sponsor overviews</li>
            <li>Market mapping & competitor ID</li>
          </ul>
        </section>

        {/* Due Diligence */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-[11px] text-zinc-400 uppercase tracking-widest mb-4">
            Due Diligence
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-[13px] text-zinc-600 space-y-2.5 leading-relaxed">
            <li>Research from filings & alt data</li>
            <li>Comparable analysis & benchmarking</li>
            <li>VDR synthesis across documents</li>
            <li>Expert transcript summarization</li>
          </ul>
        </section>

        {/* Execution */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-[11px] text-zinc-400 uppercase tracking-widest mb-4">
            Execution
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-[13px] text-zinc-600 space-y-2.5 leading-relaxed">
            <li>IC memo drafting</li>
            <li>Portfolio monitoring & sentiment</li>
            <li>Presentation review & versioning</li>
            <li>Meeting prep & briefing materials</li>
          </ul>
        </section>

        {/* Capabilities */}
        <section>
          <h3 className="font-[family-name:var(--font-inter)] text-[11px] text-zinc-400 uppercase tracking-widest mb-4">
            Capabilities
          </h3>
          <ul className="font-[family-name:var(--font-inter)] text-[13px] text-zinc-600 space-y-2.5 leading-relaxed">
            <li>Multi-format: Word, PDF, Excel, PPT</li>
            <li>Native output & compliance workflows</li>
            <li>Natural language data querying</li>
          </ul>
        </section>

        {/* Hint */}
        <p className="col-span-2 font-[family-name:var(--font-inter)] text-[11px] text-zinc-400 text-center mt-2">
          click to return
        </p>
      </div>
    </div>
  );
}
