type Props = {
  index: string;
  label: string;
  title: string;
  id: string;
};

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted">
      {children}
    </p>
  );
}

export default function SectionHeader({ index, label, title, id }: Props) {
  return (
    <header className="max-w-2xl">
      <Eyebrow>
        <span className="text-accent-ink">{index}</span> — {label}
      </Eyebrow>
      <h2
        id={id}
        className="mt-4 text-3xl font-medium tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
    </header>
  );
}

export function Section({
  id,
  labelledBy,
  children,
  className = "",
}: {
  id?: string;
  labelledBy: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`border-t border-border ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28" data-reveal>
        {children}
      </div>
    </section>
  );
}
