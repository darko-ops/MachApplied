import UtcClock from "./UtcClock";

export default function StatusStrip() {
  return (
    <aside aria-label="System status" className="border-b border-border bg-chrome">
      <div className="mx-auto flex h-[30px] max-w-6xl items-center justify-between gap-6 px-5 font-mono text-[10.5px] tracking-[0.14em] text-muted uppercase sm:px-8">
        <p className="hidden truncate sm:block">Mach Applied // Operations layer for legacy ERP</p>
        <div className="flex w-full items-center justify-between gap-6 sm:w-auto sm:justify-end">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-ok" />
            <span>
              <span className="hidden sm:inline">Link: </span>Read-only
            </span>
          </span>
          <span className="hidden md:inline">
            ERP writes: <span className="text-text">0</span>
          </span>
          <UtcClock />
          <span className="hidden lg:inline">36.07N 79.79W</span>
        </div>
      </div>
    </aside>
  );
}
