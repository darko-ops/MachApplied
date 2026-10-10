type HeaderProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  id: string;
};

/** `§01 THE PROBLEM ───────── REF MA-01` */
export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="flex items-center gap-3.5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
      <span className="text-accent">§{index}</span>
      <span className="whitespace-nowrap">{label}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-border" />
      <span aria-hidden="true" className="hidden whitespace-nowrap text-dim sm:inline">
        Ref MA-{index}
      </span>
    </p>
  );
}

export function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="max-w-4xl text-3xl leading-[1.12] font-medium tracking-[-0.025em] text-balance sm:text-4xl"
    >
      {children}
    </h2>
  );
}

/** Section label row followed by the section title */
export default function SectionHeader({ index, label, title, id }: HeaderProps) {
  return (
    <header>
      <SectionLabel index={index} label={label} />
      <div className="mt-7 sm:mt-9">
        <SectionTitle id={id}>{title}</SectionTitle>
      </div>
    </header>
  );
}

export function Section({
  id,
  labelledBy,
  children,
  last = false,
}: {
  id?: string;
  labelledBy: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy}>
      <div
        className={`mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24 ${last ? "pb-16 sm:pb-24" : ""}`}
        data-reveal
      >
        {children}
      </div>
    </section>
  );
}

/** Bordered console panel */
export function Panel({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "figure" | "form";
}) {
  return <Tag className={`border border-border bg-panel ${className}`}>{children}</Tag>;
}

/** Mono header strip at the top of a panel: label left, meta right */
export function PanelHeader({
  left,
  right,
  className = "",
}: {
  left: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 border-b border-border px-4 py-2.5 font-mono text-[10.5px] tracking-[0.12em] text-muted uppercase ${className}`}
    >
      <span className="min-w-0 truncate">{left}</span>
      {right && <span className="shrink-0">{right}</span>}
    </div>
  );
}
