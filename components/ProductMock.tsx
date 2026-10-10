type Tone = "ok" | "warn" | "alert";

const stats: { label: string; value: string; tone?: Tone }[] = [
  { label: "Due this week", value: "48" },
  { label: "Potentially late", value: "7", tone: "warn" },
  { label: "Waiting on material", value: "12" },
  { label: "Past due", value: "4", tone: "alert" },
];

const rows: {
  order: string;
  customer: string;
  part: string;
  due: string;
  status: string;
  tone: Tone;
  mobile: boolean;
}[] = [
  { order: "48192", customer: "Acme Seals", part: "48217", due: "Oct 14", status: "At risk", tone: "alert", mobile: true },
  { order: "48201", customer: "Northline Mfg", part: "31109", due: "Oct 15", status: "Waiting on material", tone: "warn", mobile: true },
  { order: "48233", customer: "Carver Ind.", part: "22740", due: "Oct 16", status: "On track", tone: "ok", mobile: false },
];

const valueTone: Record<Tone, string> = {
  ok: "text-ok",
  warn: "text-warn",
  alert: "text-mock-alert-ink",
};

const dotTone: Record<Tone, string> = {
  ok: "bg-ok",
  warn: "bg-warn",
  alert: "bg-alert",
};

export default function ProductMock() {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-md border border-mock-border bg-mock-bg font-mono text-mock-text shadow-[0_24px_60px_-30px_rgb(0_0_0/0.6)]">
        {/* Title bar */}
        <div className="flex items-center justify-between gap-3 border-b border-mock-border px-4 py-3 text-[11px] tracking-[0.08em] sm:px-5">
          <span className="truncate uppercase">
            Mach Applied<span className="hidden text-mock-muted sm:inline"> · Operations</span>
          </span>
          <span className="flex shrink-0 items-center gap-2 text-mock-muted">
            <span aria-hidden="true" className="sync-dot size-1.5 rounded-full bg-ok" />
            <span className="tabular">
              Synced 47s ago<span className="hidden sm:inline"> · Read-only</span>
            </span>
          </span>
        </div>

        {/* Stats */}
        <dl className="grid grid-cols-2 border-b border-mock-border sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 py-4 sm:px-5 ${i % 2 === 0 ? "border-r" : ""} ${
                i < 2 ? "border-b sm:border-b-0" : ""
              } border-mock-border sm:border-r sm:last:border-r-0`}
            >
              <dt className="text-[10.5px] tracking-[0.06em] text-mock-muted uppercase">
                {s.label}
              </dt>
              <dd
                className={`tabular mt-1.5 text-2xl font-medium ${
                  s.tone ? valueTone[s.tone] : ""
                }`}
              >
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex items-baseline justify-between border-b border-mock-border px-4 py-3 text-xs sm:px-5">
          <span className="tracking-[0.06em] text-mock-muted uppercase">Scheduled value</span>
          <span className="tabular text-sm">$184,000</span>
        </div>

        {/* Search */}
        <div className="px-4 py-4 sm:px-5">
          <div className="flex items-center gap-2.5 rounded-[3px] border border-mock-border bg-mock-surface px-3 py-2.5 text-xs text-mock-muted">
            <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="7" cy="7" r="4.5" />
              <path d="M10.5 10.5 14 14" />
            </svg>
            <span className="truncate">Search parts, orders, customers…</span>
          </div>
        </div>

        {/* Late orders */}
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <div className="flex items-center gap-3 text-[10.5px] tracking-[0.12em] text-mock-muted uppercase">
            <span>Late orders</span>
            <span aria-hidden="true" className="h-px flex-1 bg-mock-border" />
          </div>
          <table className="tabular mt-2 w-full text-left text-xs">
            <caption className="sr-only">Late orders (sample data)</caption>
            <thead className="text-[10.5px] tracking-[0.06em] text-mock-muted uppercase">
              <tr>
                <th scope="col" className="py-2 pr-3 font-normal">Order</th>
                <th scope="col" className="py-2 pr-3 font-normal">Customer</th>
                <th scope="col" className="hidden py-2 pr-3 font-normal sm:table-cell">Part</th>
                <th scope="col" className="hidden py-2 pr-3 font-normal sm:table-cell">Due</th>
                <th scope="col" className="py-2 font-normal">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.order}
                  className={`border-t border-mock-border ${r.mobile ? "" : "hidden sm:table-row"}`}
                >
                  <td className="py-2.5 pr-3">{r.order}</td>
                  <td className="py-2.5 pr-3 whitespace-nowrap">{r.customer}</td>
                  <td className="hidden py-2.5 pr-3 sm:table-cell">{r.part}</td>
                  <td className="hidden py-2.5 pr-3 whitespace-nowrap sm:table-cell">{r.due}</td>
                  <td className="py-2.5">
                    <span className="flex items-center gap-2">
                      <span aria-hidden="true" className={`size-1.5 shrink-0 rounded-full ${dotTone[r.tone]}`} />
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <figcaption className="mt-3 font-mono text-[11px] text-muted">
        Illustrative interface. Sample data.
      </figcaption>
    </figure>
  );
}
