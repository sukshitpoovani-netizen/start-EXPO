import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-white">Startup Expo 2026</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Ideas to Innovation. Innovation to Business. A three-day exhibition for founders, investors and builders.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/agenda" className="hover:text-white">Agenda</Link></li>
              <li><Link href="/exhibitors" className="hover:text-white">Exhibitors</Link></li>
              <li><Link href="/speakers" className="hover:text-white">Speakers</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Participate</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/register" className="hover:text-white">Register</Link></li>
              <li><Link href="/pitch" className="hover:text-white">Pitch Arena</Link></li>
              <li><Link href="/sponsors" className="hover:text-white">Sponsors</Link></li>
              <li><Link href="/venue" className="hover:text-white">Venue</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link href="/admin/login" className="hover:text-white">Admin</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © 2026 Startup Expo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
