type Tone = "ok" | "warn" | "alert";

const kpis: {
  label: string;
  value: string;
  delta: string;
  tone?: Exclude<Tone, "ok">;
  bars: number[];
}[] = [
  { label: "Due this week", value: "48", delta: "+6 wk/wk", bars: [40, 55, 48, 62, 50, 70, 85] },
  { label: "Potentially late", value: "7", delta: "+2", tone: "warn", bars: [20, 30, 25, 40, 35, 50, 60] },
  { label: "Waiting on matl", value: "12", delta: "−3", bars: [80, 75, 70, 72, 60, 58, 52] },
  { label: "Past due", value: "4", delta: "+1", tone: "alert", bars: [10, 20, 15, 25, 30, 28, 40] },
];

const orders: { order: string; customer: string; due: string; status: string; tone: Tone }[] = [
  { order: "48192", customer: "Acme Seals", due: "Oct 14", status: "At risk", tone: "alert" },
  { order: "48201", customer: "Northline Mfg", due: "Oct 15", status: "Waiting on matl", tone: "warn" },
  { order: "48177", customer: "Piedmont Fab", due: "Oct 13", status: "Past due", tone: "alert" },
  { order: "48210", customer: "Harlow Tool", due: "Oct 15", status: "Waiting on matl", tone: "warn" },
  { order: "48233", customer: "Carver Ind.", due: "Oct 16", status: "On track", tone: "ok" },
];

const load: { name: string; pct: number; tone?: Exclude<Tone, "ok"> }[] = [
  { name: "CNC-01 Haas VF-4", pct: 94, tone: "alert" },
  { name: "CNC-02 Okuma", pct: 81, tone: "warn" },
  { name: "PRS-01 Press 200T", pct: 66 },
  { name: "MLD-03 Molding", pct: 58 },
  { name: "ASM-01 Assembly", pct: 42 },
];

const tabs = ["Overview", "Late orders", "Material", "Work centers"];

const ink: Record<Tone, string> = { ok: "text-text", warn: "text-warn", alert: "text-alert-ink" };
const fill: Record<Tone, string> = { ok: "bg-ok", warn: "bg-warn", alert: "bg-alert" };

function Corner({ className }: { className: string }) {
  return <span aria-hidden="true" className={`absolute size-3 border-accent ${className}`} />;
}

function Rule({ label, meta }: { label: string; meta?: string }) {
  return (
    <div className="flex items-center gap-3 text-[10px] tracking-[0.12em] text-muted uppercase">
      <span className="whitespace-nowrap">{label}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-rule-soft" />
      {meta && <span className="whitespace-nowrap">{meta}</span>}
    </div>
  );
}

export default function ProductMock() {
  return (
    <figure className="min-w-0">
      <div className="relative">
        <Corner className="-top-1.5 -left-1.5 border-t border-l" />
        <Corner className="-top-1.5 -right-1.5 border-t border-r" />
        <Corner className="-bottom-1.5 -left-1.5 border-b border-l" />
        <Corner className="-right-1.5 -bottom-1.5 border-r border-b" />

        <div className="@container border border-border bg-panel font-mono text-text shadow-[0_40px_80px_-40px_rgb(0_0_0/0.8)]">
          {/* Header bar */}
          <div className="flex items-center justify-between gap-3 border-b border-border bg-panel-head px-4 py-2.5 text-[10.5px] tracking-[0.1em] text-muted uppercase">
            <span className="truncate">
              <span className="text-text">OPS-01</span>
              <span className="hidden @sm:inline"> · Overview · Plant 1</span>
            </span>
            <span className="flex shrink-0 items-center gap-2">
              <span aria-hidden="true" className="sync-dot size-1.5 rounded-full bg-ok" />
              <span className="tabular">
                Synced 47s ago<span className="hidden @sm:inline"> · Read-only</span>
              </span>
            </span>
          </div>

          {/* Tabs (illustrative, not interactive) */}
          <div aria-hidden="true" className="flex overflow-hidden border-b border-border text-[11px] tracking-[0.06em] uppercase">
            {tabs.map((t, i) => (
              <span
                key={t}
                className={`px-4 py-2.5 whitespace-nowrap ${
                  i === 0 ? "-mb-px border-b-2 border-accent text-text" : "text-muted"
                } ${i >= 2 ? "hidden @md:inline" : ""
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* KPIs */}
          <dl className="grid grid-cols-2 border-b border-border @lg:grid-cols-4">
            {kpis.map((k, i) => (
              <div
                key={k.label}
                className={`border-border px-4 py-3.5 ${i % 2 === 0 ? "border-r" : ""} ${
                  i < 2 ? "max-@lg:border-b" : ""
                } @lg:not-last:border-r`}
              >
                <dt className="truncate text-[10px] tracking-[0.08em] text-muted uppercase">{k.label}</dt>
                <dd className="mt-1.5 flex items-baseline justify-between gap-2">
                  <span className={`tabular text-[26px] leading-none font-medium ${k.tone ? ink[k.tone] : ""}`}>
                    {k.value}
                  </span>
                  <span className="tabular text-[10.5px] whitespace-nowrap text-muted">{k.delta}</span>
                </dd>
                <dd aria-hidden="true" className="mt-3 flex h-[18px] items-end gap-0.5">
                  {k.bars.map((h, j) => (
                    <span
                      key={j}
                      style={{ height: `${h}%` }}
                      className={`flex-1 ${
                        j === k.bars.length - 1 ? (k.tone ? fill[k.tone] : "bg-muted") : "bg-bar-idle"
                      }`}
                    />
                  ))}
                </dd>
              </div>
            ))}
          </dl>

          {/* Body */}
          <div className="grid @xl:grid-cols-[minmax(0,1fr)_220px]">
            <div className="min-w-0 px-4 pt-3.5 pb-4">
              <Rule label="Late orders" meta="5 of 11" />
              <table className="tabular mt-2 w-full text-left text-[11.5px]">
                <caption className="sr-only">Late orders (sample data)</caption>
                <thead className="text-[9.5px] tracking-[0.08em] text-muted uppercase">
                  <tr>
                    <th scope="col" className="py-2 pr-3 font-normal">Order</th>
                    <th scope="col" className="py-2 pr-3 font-normal">Customer</th>
                    <th scope="col" className="hidden py-2 pr-3 font-normal @sm:table-cell">Due</th>
                    <th scope="col" className="py-2 font-normal">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o, i) => (
                    <tr key={o.order} className={`border-t border-row-rule ${i >= 3 ? "hidden @sm:table-row" : ""}`}>
                      <td className="py-2 pr-3">{o.order}</td>
                      <td className="py-2 pr-3 whitespace-nowrap">{o.customer}</td>
                      <td className="hidden py-2 pr-3 whitespace-nowrap @sm:table-cell">{o.due}</td>
                      <td className={`py-2 ${ink[o.tone]}`}>
                        <span className="flex items-center gap-2 whitespace-nowrap">
                          <span aria-hidden="true" className={`size-1.5 shrink-0 ${fill[o.tone]}`} />
                          {o.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-border px-4 pt-3.5 pb-4 @xl:border-t-0 @xl:border-l">
              <Rule label="Work center load" />
              <ul className="mt-3 space-y-3">
                {load.map((w) => (
                  <li key={w.name} className="text-[10.5px]">
                    <div className="flex justify-between gap-2">
                      <span className="truncate text-text">{w.name}</span>
                      <span className={`tabular ${w.tone ? ink[w.tone] : "text-muted"}`}>{w.pct}%</span>
                    </div>
                    <div aria-hidden="true" className="mt-1.5 h-1 bg-track">
                      <div style={{ width: `${w.pct}%` }} className={`h-full ${w.tone ? fill[w.tone] : "bg-dim"}`} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex justify-between gap-3 border-t border-border bg-panel-head px-4 py-2.5 text-[10px] tracking-[0.1em] text-dim-ink uppercase">
            <span>Source: ERP (read replica)</span>
            <span className="tabular">Query 0.18s</span>
          </div>
        </div>
      </div>
      <figcaption className="mt-2.5 font-mono text-[11px] text-muted">
        Illustrative interface. Sample data.
      </figcaption>
    </figure>
  );
}
