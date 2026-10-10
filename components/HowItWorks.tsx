import FlowDiagram from "./FlowDiagram";
import SectionHeader, { Section } from "./SectionHeader";

const steps = [
  {
    name: "Observe.",
    body: "We spend time with your team to learn which lookups, reports, and exports eat the most time.",
  },
  {
    name: "Connect.",
    body: "A read-only connection to your ERP. Your data syncs to a dedicated, secured environment built for speed. Your ERP stays the system of record.",
  },
  {
    name: "Use.",
    body: "Your team searches, filters, and gets alerts — and we measure the time saved against how things worked before.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-title">
      <SectionHeader
        id="how-title"
        index="03"
        label="How it works"
        title="Connected in weeks, not a migration project."
      />
      <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((s, i) => (
          <li key={s.name} className="border-t border-border pt-6">
            <span className="tabular font-mono text-sm text-accent-ink">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-medium">{s.name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
      <FlowDiagram />
    </Section>
  );
}
