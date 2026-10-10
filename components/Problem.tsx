import { Panel, PanelHeader, Section, SectionLabel, SectionTitle } from "./SectionHeader";

const log = [
  ["07:42", "Sales", "Export it to Excel."],
  ["09:15", "Purchasing", "Ask Susan — she knows where that is."],
  ["11:03", "Production", "There’s a report for it somewhere."],
  ["14:28", "Front office", "The ERP technically does that. Nobody uses it."],
];

export default function Problem() {
  return (
    <Section id="problem" labelledBy="problem-title">
      <SectionLabel index="01" label="The problem" />
      <div className="mt-7 grid grid-cols-1 gap-10 sm:mt-9 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionTitle id="problem-title">The data exists. Getting to it is the problem.</SectionTitle>
          <p className="mt-[22px] max-w-xl text-[17px] leading-[1.6] text-muted">
            Your ERP holds every order, part, job, and price your company has ever
            touched. But finding one answer can mean five screens, a report nobody
            remembers how to run, an Excel export, or walking over to the one
            person who knows.
          </p>
        </div>
        <Panel as="figure" className="self-start">
          <figcaption>
            <PanelHeader left="Field log — overheard on the floor" right="4 entries" />
          </figcaption>
          <ol>
            {log.map(([time, where, quote]) => (
              <li
                key={time}
                className="grid grid-cols-[48px_1fr] gap-x-2 gap-y-1 border-b border-rule-soft px-4 py-3.5 font-mono last:border-b-0 sm:grid-cols-[56px_120px_1fr] sm:gap-y-0"
              >
                <span className="tabular text-[11.5px] text-dim-ink">{time}</span>
                <span className="text-[10.5px] tracking-[0.1em] text-muted uppercase sm:pt-px">{where}</span>
                <q className="col-start-2 text-[13.5px] text-text before:content-['“'] after:content-['”'] sm:col-start-auto">
                  {quote}
                </q>
              </li>
            ))}
          </ol>
        </Panel>
      </div>
    </Section>
  );
}
