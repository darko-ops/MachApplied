import SectionHeader, { Section } from "./SectionHeader";

export default function WhoFor() {
  return (
    <Section labelledBy="who-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          id="who-title"
          index="05"
          label="Who it’s for"
          title="Built for established manufacturers."
        />
        <div className="lg:pt-10">
          <p className="text-lg leading-relaxed text-muted">
            Shops with 20 to 250 people, running an ERP that works but fights
            them. Machining, fabrication, stamping, mold and die, rubber and
            sealing, plastics, furniture, industrial components, and contract
            manufacturing.
          </p>
          <p className="mt-6 flex items-center gap-2.5 font-mono text-xs tracking-[0.04em] text-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            Based in North Carolina. Working with manufacturers across the Piedmont Triad.
          </p>
        </div>
      </div>
    </Section>
  );
}
