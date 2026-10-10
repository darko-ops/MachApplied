import ContactForm from "./ContactForm";
import SectionHeader, { Section } from "./SectionHeader";

export default function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeader
            id="contact-title"
            index="06"
            label="Start here"
            title="Start with a visit, not a sales pitch."
          />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
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
