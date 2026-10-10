import { Section, SectionLabel, SectionTitle } from "./SectionHeader";

const industries = [
  "Machining",
  "Fabrication",
  "Stamping",
  "Mold & die",
  "Rubber & sealing",
  "Plastics",
  "Furniture",
  "Industrial components",
  "Contract mfg",
];

export default function WhoFor() {
  return (
    <Section labelledBy="who-title">
      <SectionLabel index="05" label="Who it’s for" />
      <div className="mt-7 grid grid-cols-1 gap-10 sm:mt-9 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionTitle id="who-title">Built for established manufacturers.</SectionTitle>
          <p className="mt-[22px] max-w-xl text-[17px] leading-[1.6] text-muted">
            Shops with 20 to 250 people, running an ERP that works but fights them.
          </p>
          <p className="mt-6 flex items-center gap-2.5 font-mono text-xs text-muted">
            <span aria-hidden="true" className="size-1.5 shrink-0 bg-accent" />
            Based in North Carolina. Working across the Piedmont Triad.
          </p>
        </div>
        <ul
          aria-label="Industries"
          className="grid grid-cols-2 gap-px self-start border border-border bg-border sm:grid-cols-3"
        >
          {industries.map((name, i) => (
            <li
              key={name}
              className="flex gap-2.5 bg-panel p-3.5 font-mono text-xs text-text last:col-span-2 sm:last:col-span-1"
            >
              <span aria-hidden="true" className="tabular text-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
