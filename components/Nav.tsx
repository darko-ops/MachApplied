export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/75">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-[0.22em] whitespace-nowrap"
        >
          MACH APPLIED
        </a>
        <div className="flex items-center gap-5 sm:gap-7">
          <a
            href="#how-it-works"
            className="hidden text-sm text-muted transition-colors hover:text-text sm:inline"
          >
            How it works
          </a>
          <a
            href="#principles"
            className="hidden text-sm text-muted transition-colors hover:text-text sm:inline"
          >
            Principles
          </a>
          <a
            href="#contact"
            className="rounded-[3px] bg-accent px-3.5 py-2 text-sm font-medium whitespace-nowrap text-on-accent transition-opacity hover:opacity-90"
          >
            Request a visit
          </a>
        </div>
      </nav>
    </header>
  );
}
