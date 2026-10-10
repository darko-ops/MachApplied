import { Panel, PanelHeader } from "./SectionHeader";

function Node({ title, sub, emphasis = false }: { title: string; sub: string; emphasis?: boolean }) {
  return (
    <div
      className={`border px-4 py-3.5 font-mono lg:shrink-0 ${
        emphasis ? "border-accent bg-panel lg:w-[240px]" : "border-border bg-bg lg:w-[220px]"
      }`}
    >
      <p className="text-xs tracking-[0.14em] text-text uppercase">{title}</p>
      <p className="mt-1 text-[11px] leading-snug text-muted">{sub}</p>
    </div>
  );
}

function Connector({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-1.5 py-3 text-muted lg:min-w-20 lg:px-4 lg:py-0">
      <span className="flex items-center gap-1.5 font-mono text-[10.5px] tracking-[0.12em] whitespace-nowrap uppercase">
        {children}
      </span>
      <svg aria-hidden="true" viewBox="0 0 80 10" preserveAspectRatio="none" className="hidden h-2.5 w-full lg:block" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M0 5h78M74 1.5 78 5l-4 3.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 10 24" className="h-6 w-2.5 lg:hidden" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M5 0v22M1.5 18.5 5 22l3.5-3.5" />
      </svg>
    </div>
  );
}

export default function FlowDiagram() {
  return (
    <Panel as="figure" className="mt-12">
      <PanelHeader left="Schematic — data path" right="Direction: one-way" />
      <div
        role="img"
        aria-label="Your ERP connects through a read-only link to Mach Applied, which serves your team by role."
        className="flex flex-col px-5 py-7 lg:flex-row lg:items-center lg:px-8 lg:py-9"
      >
        <Node title="Your ERP" sub="System of record. Unchanged." />
        <Connector>
          <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="7" width="10" height="7" rx="1" />
            <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
          </svg>
          Read-only link
        </Connector>
        <Node title="Mach Applied" sub="Dedicated, secured environment." emphasis />
        <Connector>By role</Connector>
        <Node title="Your team" sub="Sales · Production · Quality · Purchasing" />
      </div>
      <figcaption className="border-t border-border px-4 py-3 font-mono text-[11px] text-muted">
        Data flows one way. Nothing is written back to your ERP.
      </figcaption>
    </Panel>
  );
}
