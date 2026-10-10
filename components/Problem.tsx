import SectionHeader, { Section } from "./SectionHeader";

const overheard = [
  "Export it to Excel.",
  "Ask Susan — she knows where that is.",
  "There’s a report for it somewhere.",
  "The ERP technically does that. Nobody uses it.",
];

export default function Problem() {
  return (
    <Section labelledBy="problem-title">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            id="problem-title"
            index="01"
            label="The problem"
            title="The data exists. Getting to it is the problem."
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Your ERP holds every order, part, job, and price your company has ever
            touched. But finding one answer can mean five screens, a report nobody
            remembers how to run, an Excel export, or walking over to the one
            person who knows.
          </p>
        </div>
        <figure className="self-end">
          <figcaption className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            Overheard on the floor
          </figcaption>
          <ul className="mt-4 border-t border-border">
            {overheard.map((line) => (
              <li
                key={line}
                className="border-b border-border py-4 font-mono text-sm sm:text-[15px]"
              >
                <span aria-hidden="true" className="mr-3 text-muted">›</span>
                “{line}”
              </li>
            ))}
          </ul>
        </figure>
      </div>
    </Section>
  );
}
