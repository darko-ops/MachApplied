import SectionHeader, { Section } from "./SectionHeader";

type Line = { l: string; r?: string; tone?: "text" | "warn" | "alert" };

const modules: { name: string; body: string; readout: Line[] }[] = [
  {
    name: "Search",
    body: "Type a customer, part, material, or job. Get the order history, last price, related work orders, and documents in one place.",
    readout: [
      { l: "› acme seals", tone: "text" },
      { l: "Customer · 214 orders", r: "0.09s" },
      { l: "Last price 48217", r: "$3.42 ea" },
    ],
  },
  {
    name: "Views",
    body: "Late orders. Due this week. Waiting on material. Filter in seconds, save the view, share it with your team.",
    readout: [
      { l: "Late orders", r: "11", tone: "text" },
      { l: "Due this week", r: "48" },
      { l: "Waiting on material", r: "12" },
    ],
  },
  {
    name: "Watch",
    body: "Mach Applied flags what needs attention — orders at risk, jobs waiting on material, unusual load on a work center. It identifies. Your people decide.",
    readout: [
      { l: "▲ 48192 at risk", r: "2m", tone: "alert" },
      { l: "■ CNC-01 load 94%", r: "14m", tone: "warn" },
      { l: "■ 48201 matl late", r: "1h", tone: "warn" },
    ],
  },
  {
    name: "Ask",
    body: "Ask a plain-English question. Answers come from your actual data, with facts clearly separated from interpretation.",
    readout: [
      { l: "› who buys 48217?", tone: "text" },
      { l: "FACT  3 customers", r: "12 mo" },
      { l: "NOTE  Acme = 71%" },
    ],
  },
];

const toneClass = { text: "text-text", warn: "text-warn", alert: "text-alert-ink" };

export default function Modules() {
  return (
    <Section id="capabilities" labelledBy="modules-title">
      <SectionHeader
        id="modules-title"
        index="02"
        label="Capabilities"
        title="One place to see your operation."
      />
      <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((m, i) => (
          <li key={m.name} className="flex flex-col bg-panel">
            <div className="flex items-center justify-between border-b border-rule-soft px-4 py-2.5 font-mono text-[10.5px] tracking-[0.12em] uppercase">
              <span className="text-muted">FN-0{i + 1}</span>
              <span className="flex items-center gap-1.5 text-ok">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-ok" />
                Live
              </span>
            </div>
            <div className="flex-1 px-[18px] pt-5 pb-[18px]">
              <h3 className="text-[19px] font-medium">{m.name}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-muted">{m.body}</p>
            </div>
            <div
              aria-hidden="true"
              className="mx-[18px] mb-[18px] space-y-1.5 border border-rule-soft bg-panel-head px-3 py-2.5 font-mono text-[11px] text-muted"
            >
              {m.readout.map((line) => (
                <div
                  key={line.l}
                  className={`flex justify-between gap-3 ${line.tone ? toneClass[line.tone] : ""}`}
                >
                  <span className="truncate">{line.l}</span>
                  {line.r && <span className="tabular shrink-0">{line.r}</span>}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
