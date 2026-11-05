import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/agenda", label: "Agenda" },
  { href: "/exhibitors", label: "Exhibitors" },
  { href: "/speakers", label: "Speakers" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/pitch", label: "Pitch" },
  { href: "/venue", label: "Venue" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link href="/" className="shrink-0 text-lg font-bold tracking-tight text-slate-900">
          Startup Expo <span className="text-amber-500">2026</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-slate-900 transition">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:inline">
            Contact
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400"
          >
            Register
          </Link>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-slate-100 px-4 py-2 text-xs font-medium text-slate-600 lg:hidden">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="whitespace-nowrap hover:text-slate-900">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
