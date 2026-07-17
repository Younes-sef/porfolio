import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-4xl px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display font-semibold text-[15px] tracking-tight"
        >
          Alex Rivera
        </Link>
        <nav className="flex items-center gap-6 font-mono text-[13px] text-muted">
          <Link href="/#work" className="hover:text-ink transition-colors">
            work
          </Link>
          <Link href="/#about" className="hover:text-ink transition-colors">
            about
          </Link>
          <Link
            href="/#contact"
            className="hover:text-ink transition-colors"
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
