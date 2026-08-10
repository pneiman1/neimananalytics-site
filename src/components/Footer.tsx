export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span className="text-wordmark font-display font-extrabold tracking-[0.18em]">
          NEIMANANALYTICS
        </span>
        <span className="font-mono text-xs">
          © {new Date().getFullYear()} Phillip Neiman
        </span>
      </div>
    </footer>
  );
}
