import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 font-mono text-xs text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-medium tracking-[0.22em] text-text">MACH APPLIED</span>
          <span aria-hidden="true">·</span>
          <span>Modern systems for industry.</span>
          <span aria-hidden="true">·</span>
          <span>North Carolina</span>
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span>© 2026 DAED LLC</span>
          <a href={`mailto:${site.email}`} className="hover:text-text">
            {site.email}
          </a>
          {/* Placeholders until these pages exist */}
          <a href="#" className="hover:text-text">Privacy</a>
          <a href="#" className="hover:text-text">Security</a>
        </div>
      </div>
    </footer>
  );
}
