const links = [
  ["01", "Problem", "#problem"],
  ["02", "Capabilities", "#capabilities"],
  ["03", "Deployment", "#how-it-works"],
  ["04", "Principles", "#principles"],
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/75">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[60px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.svg" alt="" width={24} height={24} className="size-6" />
          <span className="font-mono text-sm font-medium tracking-[0.22em] whitespace-nowrap">
            MACH APPLIED
          </span>
        </a>
        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map(([n, label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="flex items-baseline gap-2 text-sm text-muted transition-colors hover:text-text"
                >
                  <span aria-hidden="true" className="font-mono text-[11px] text-dim">
                    {n}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-[2px] bg-accent px-4 py-[9px] text-sm font-medium whitespace-nowrap text-on-accent transition-opacity hover:opacity-90"
          >
            Request a visit
          </a>
        </div>
      </nav>
    </header>
  );
}
