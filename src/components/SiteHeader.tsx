import Link from "next/link";

export function SiteHeader({
  primary = "#0F172A",
  secondary = "#F59E0B",
  name = "Startup Expo 2026",
}: {
  primary?: string;
  secondary?: string;
  name?: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight" style={{ color: primary }}>
          {name}
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/about" className="hover:text-slate-900">About</Link>
          <Link href="/agenda" className="hover:text-slate-900">Agenda</Link>
          <Link href="/exhibitors" className="hover:text-slate-900">Exhibitors</Link>
          <Link href="/speakers" className="hover:text-slate-900">Speakers</Link>
          <Link href="/venue" className="hover:text-slate-900">Venue</Link>
        </nav>
        <Link
          href="/register"
          className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-900 transition hover:opacity-90"
          style={{ backgroundColor: secondary }}
        >
          Register
        </Link>
      </div>
    </header>
  );
}
