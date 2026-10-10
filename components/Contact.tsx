import ContactForm from "./ContactForm";
import { Section, SectionLabel, SectionTitle } from "./SectionHeader";

export default function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title" last>
      <SectionLabel index="06" label="Start here" />
      <div className="mt-7 grid grid-cols-1 gap-10 sm:mt-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionTitle id="contact-title">Start with a visit, not a sales pitch.</SectionTitle>
          <p className="mt-[22px] max-w-md text-[17px] leading-[1.6] text-muted">
            We’ll spend time with your team, see how your systems are used today,
            and tell you honestly whether there’s one workflow where Mach Applied
            would save meaningful time. If there isn’t, we’ll say so.
          </p>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
