import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Modules from "@/components/Modules";
import Nav from "@/components/Nav";
import Principles from "@/components/Principles";
import Problem from "@/components/Problem";
import Reveal from "@/components/Reveal";
import StatusStrip from "@/components/StatusStrip";
import WhoFor from "@/components/WhoFor";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-[3px] focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <StatusStrip />
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Modules />
        <HowItWorks />
        <Principles />
        <WhoFor />
        <Contact />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
