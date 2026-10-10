import SectionHeader, { Section } from "./SectionHeader";

const principles = [
  ["Read-only by design.", "Mach Applied cannot insert, update, or delete anything in your ERP."],
  ["Your ERP stays in charge.", "It remains the system of record. We never replace it."],
  ["Your data is yours.", "Dedicated environment per customer. Separate credentials and keys."],
  ["Access by role.", "Sales, production, quality, and purchasing see what they need. Sign in with your existing Microsoft accounts."],
  ["Everything is logged.", "Every view, export, and alert is auditable."],
  ["People decide.", "We surface information. Decisions stay with your team."],
];

const row = "grid items-baseline gap-x-0 sm:grid-cols-[70px_1fr] md:grid-cols-[90px_280px_1fr]";

export default function Principles() {
  return (
    <Section id="principles" labelledBy="principles-title">
      <SectionHeader
        id="principles-title"
        index="04"
        label="Principles"
        title="Built to earn trust before it asks for any."
      />
      <div role="table" aria-label="Principles" className="mt-10 border border-border">
        <div role="rowgroup" className="hidden md:block">
          <div
            role="row"
            className={`${row} border-b border-border bg-panel px-5 py-2.5 font-mono text-[10px] tracking-[0.14em] text-muted uppercase`}
          >
            <span role="columnheader">ID</span>
            <span role="columnheader">Principle</span>
            <span role="columnheader">Control</span>
          </div>
        </div>
        <div role="rowgroup">
          {principles.map(([lead, body], i) => (
            <div
              key={lead}
              role="row"
              className={`${row} border-b border-rule-soft px-5 py-4 text-[15px] leading-[1.55] last:border-b-0`}
            >
              <span role="cell" className="hidden font-mono text-xs text-accent sm:block">
                P-0{i + 1}
              </span>
              <span role="cell" className="font-medium text-text">{lead}</span>
              <span role="cell" className="mt-1 text-muted sm:col-start-2 md:col-start-auto md:mt-0">
                {body}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
