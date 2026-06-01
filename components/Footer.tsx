export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted md:flex-row md:items-center md:px-10">
        <span className="font-display font-bold text-fg">
          Denver Dalman<span className="text-accent">.</span>
        </span>
        <span className="label">
          © {new Date().getFullYear()} — Designed & built by Denver Dalman
        </span>
      </div>
    </footer>
  );
}
