import ProductMock from "./ProductMock";
import { Eyebrow } from "./SectionHeader";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="blueprint pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12">
        <div>
          <Eyebrow>Modern systems for industry</Eyebrow>
          <h1
            id="hero-title"
            className="mt-5 text-4xl leading-[1.08] font-medium tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]"
          >
            Keep your ERP. Stop fighting it.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Mach Applied connects to the systems your shop already runs and gives
            your team a fast, modern way to find, filter, and watch operational
            data. No migration. Read-only. Nothing in your{" "}
            <abbr title="Enterprise Resource Planning">ERP</abbr> changes.
          </p>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <a
              href="#contact"
              className="rounded-[3px] bg-accent px-5 py-3 text-base font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              Request a discovery visit
            </a>
            <a
              href="#how-it-works"
              className="font-mono text-sm text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
            >
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <ProductMock />
      </div>
    </section>
  );
}
