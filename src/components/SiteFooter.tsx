import Link from "next/link";

export function SiteFooter({
  name = "Startup Expo 2026",
  tagline = "Ideas to Innovation. Innovation to Business.",
}: {
  name?: string;
  tagline?: string;
}) {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="mt-1 text-sm text-slate-500">{tagline}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-500">
          <Link href="/privacy" className="hover:text-slate-800">Privacy</Link>
          <Link href="/terms" className="hover:text-slate-800">Terms</Link>
          <Link href="/contact" className="hover:text-slate-800">Contact</Link>
          <Link href="/admin/login" className="hover:text-slate-800">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
