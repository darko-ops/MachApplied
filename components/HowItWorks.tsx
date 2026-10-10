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
        label="Deployment"
        title="Connected in weeks, not a migration project."
      />
      <ol className="relative mt-11 grid gap-10 md:grid-cols-3 md:gap-8">
        {/* Track line across all phases (desktop) */}
        <span aria-hidden="true" className="absolute top-[5px] right-0 left-0 hidden h-px bg-border md:block" />
        {steps.map((s, i) => (
          <li key={s.name} className="relative max-md:border-l max-md:border-border max-md:pl-6">
            <span
              aria-hidden="true"
              className="relative block size-[11px] border border-accent bg-bg max-md:absolute max-md:top-0 max-md:-left-[6px]"
            />
            <p className="mt-5 font-mono text-[11px] tracking-[0.14em] text-accent uppercase max-md:mt-0">
              Phase 0{i + 1}
            </p>
            <h3 className="mt-2 text-[19px] font-medium">{s.name}</h3>
            <p className="mt-2 text-[14.5px] leading-[1.6] text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
      <FlowDiagram />
    </Section>
  );
}
