import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Sponsors | Startup Expo 2026",
};

const tiers = [
  {
    name: "Title Partner",
    desc: "Flagship visibility across stage, digital and on-ground branding.",
    perks: ["Main stage naming", "Premium booth", "Speaking slot", "Logo on all collateral"],
  },
  {
    name: "Gold Sponsors",
    desc: "High visibility with lounge presence and marketing reach.",
    perks: ["Featured logo placement", "Booth in prime zone", "Newsletter feature", "Social campaign"],
  },
  {
    name: "Silver Sponsors",
    desc: "Strong presence for brands supporting the ecosystem.",
    perks: ["Logo on website", "Exhibition listing", "Attendee pass pack", "Report mention"],
  },
  {
    name: "Community Partners",
    desc: "Incubators, colleges and communities amplifying the event.",
    perks: ["Co-branded outreach", "Student pass allocation", "Logo on partners page"],
  },
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <section className="relative h-56 overflow-hidden sm:h-72">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
          alt="Partnership"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Partners</p>
            <h1 className="mt-2 text-4xl font-bold text-white">Sponsors</h1>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="max-w-2xl text-lg text-slate-600">
          Partner with Startup Expo 2026 to reach founders, investors and decision-makers.
          Packages can be tailored for corporates, funds and community organisations.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-xl font-bold text-slate-900">{t.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
              <ul className="mt-5 space-y-2">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-slate-700">
                    <span className="text-amber-500">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-900 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold">Become a sponsor</h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-300">
            Email sponsors@startupexpo.com with your brand goals and we will share a custom proposal.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400">
            Contact sponsorship team
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
