import SectionHeader, { Section } from "./SectionHeader";

const icon = "size-5 text-muted";
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const modules = [
  {
    name: "Search",
    body: "Type a customer, part, material, or job. Get the order history, last price, related work orders, and documents in one place.",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={icon} {...stroke}>
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="m15 15 5 5" />
      </svg>
    ),
  },
  {
    name: "Views",
    body: "Late orders. Due this week. Waiting on material. Filter in seconds, save the view, share it with your team.",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={icon} {...stroke}>
        <path d="M4 6h16M7 12h10M10 18h4" />
      </svg>
    ),
  },
  {
    name: "Watch",
    body: "Mach Applied flags what needs attention — orders at risk, jobs waiting on material, unusual load on a work center. It identifies. Your people decide.",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={icon} {...stroke}>
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="2.75" />
      </svg>
    ),
  },
  {
    name: "Ask",
    body: "Ask a plain-English question. Answers come from your actual data, with facts clearly separated from interpretation.",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={icon} {...stroke}>
        <path d="M4 5h16v11H9l-5 4z" />
        <path d="M8.5 9.5h7M8.5 12.5h4" />
      </svg>
    ),
  },
];

export default function Modules() {
  return (
    <Section labelledBy="modules-title">
      <SectionHeader
        id="modules-title"
        index="02"
        label="What it does"
        title="One place to see your operation."
      />
      <ul className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((m) => (
          <li key={m.name} className="flex flex-col bg-surface p-6 sm:p-7">
            {m.icon}
            <h3 className="mt-6 text-lg font-medium">{m.name}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{m.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
