function Node({ label, emphasis = false }: { label: string; emphasis?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-[3px] border px-4 py-3 text-center font-mono text-xs tracking-[0.14em] uppercase whitespace-nowrap ${
        emphasis
          ? "border-accent bg-surface text-text"
          : "border-border bg-surface text-muted"
      }`}
    >
      {label}
    </div>
  );
}

function Arrow({ label, locked = false }: { label?: string; locked?: boolean }) {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-1.5 py-3 text-muted md:min-w-24 md:px-3 md:py-0">
      {/* Vertical on mobile, horizontal from md up */}
      <div className="flex items-center font-mono text-[11px] tracking-[0.08em] md:absolute md:bottom-1/2 md:mb-2.5">
        {label && (
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            {locked && (
              <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 text-accent-ink" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="7" width="10" height="7" rx="1" />
                <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
              </svg>
            )}
            {label}
          </span>
        )}
      </div>
      <svg aria-hidden="true" viewBox="0 0 80 10" preserveAspectRatio="none" className="hidden h-2.5 w-full md:block" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M0 5h78M74 1.5 78 5l-4 3.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 10 24" className="h-6 w-2.5 md:hidden" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M5 0v22M1.5 18.5 5 22l3.5-3.5" />
      </svg>
    </div>
  );
}

export default function FlowDiagram() {
  return (
    <figure className="mt-14 rounded-md border border-border p-6 sm:p-8">
      <div
        role="img"
        aria-label="Your ERP connects through a read-only link to Mach Applied, which serves your team."
        className="flex flex-col items-stretch md:flex-row md:items-center"
      >
        <Node label="Your ERP" />
        <Arrow label="read-only" locked />
        <Node label="Mach Applied" emphasis />
        <Arrow />
        <Node label="Your team" />
      </div>
      <figcaption className="mt-6 font-mono text-[11px] text-muted">
        Data flows one way. Nothing is written back to your ERP.
      </figcaption>
    </figure>
  );
}
