import SectionHeader, { Section } from "./SectionHeader";

const principles = [
  ["Read-only by design.", "Mach Applied cannot insert, update, or delete anything in your ERP."],
  ["Your ERP stays in charge.", "It remains the system of record. We never replace it."],
  ["Your data is yours.", "Dedicated environment per customer. Separate credentials and keys."],
  ["Access by role.", "Sales, production, quality, and purchasing see what they need. Sign in with your existing Microsoft accounts."],
  ["Everything is logged.", "Every view, export, and alert is auditable."],
  ["People decide.", "We surface information. Decisions stay with your team."],
];

export default function Principles() {
  return (
    <Section id="principles" labelledBy="principles-title">
      <SectionHeader
        id="principles-title"
        index="04"
        label="Principles"
        title="Built to earn trust before it asks for any."
      />
      <ul className="mt-12 grid border-t border-border md:grid-cols-2 md:gap-x-12">
        {principles.map(([lead, body]) => (
          <li key={lead} className="border-b border-border py-5 text-[15px] leading-relaxed sm:py-6">
            <strong className="font-medium text-text">{lead}</strong>{" "}
            <span className="text-muted">{body}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
