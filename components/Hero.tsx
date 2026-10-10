import ProductMock from "./ProductMock";

const spec = [
  ["Mode", "Read-only. No migration."],
  ["System of record", <>Your <abbr title="Enterprise Resource Planning">ERP</abbr> — unchanged</>],
  ["Deployment", "Weeks, not a project"],
] as const;

const ribbon = [
  ["ERP writes", "0 — by design"],
  ["Environment", "Dedicated per customer"],
  ["Sign-in", "Your Microsoft accounts"],
  ["Audit", "Every view, export, alert"],
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title">
      <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-[72px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:items-start">
          <div className="lg:pt-5">
            <p className="flex items-center gap-2.5 font-mono text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
              <span aria-hidden="true" className="size-2 bg-accent" />
              Modern systems for industry
            </p>
            <h1
              id="hero-title"
              className="mt-[22px] text-[2.5rem] leading-[1.05] font-medium tracking-[-0.03em] text-balance sm:text-[54px]"
            >
              Keep your ERP. Stop fighting it.
            </h1>
            <p className="mt-6 text-[17px] leading-[1.6] text-muted">
              Mach Applied connects to the systems your shop already runs and gives
              your team a fast, modern way to find, filter, and watch operational
              data.
            </p>
            <dl className="mt-8 border-t border-border">
              {spec.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[130px_1fr] items-baseline border-b border-border py-[11px] font-mono sm:grid-cols-[150px_1fr]"
                >
                  <dt className="text-[10.5px] tracking-[0.1em] text-muted uppercase">{k}</dt>
                  <dd className="text-xs text-text">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#contact"
                className="rounded-[2px] bg-accent px-5 py-[13px] text-[15px] font-medium text-on-accent transition-opacity hover:opacity-90"
              >
                Request a discovery visit
              </a>
              <a
                href="#how-it-works"
                className="font-mono text-[13px] text-muted transition-colors hover:text-text"
              >
                See how it works <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <ProductMock />
        </div>

        <dl className="mt-16 grid border border-border bg-panel sm:grid-cols-2 lg:grid-cols-4">
          {ribbon.map(([k, v], i) => (
            <div
              key={k}
              className={`border-border px-5 py-4 max-sm:not-last:border-b sm:max-lg:nth-[-n+2]:border-b ${
                i % 2 === 0 ? "sm:border-r" : ""
              } lg:not-last:border-r`}
            >
              <dt className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">{k}</dt>
              <dd className="mt-1.5 font-mono text-[13px] text-text">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
