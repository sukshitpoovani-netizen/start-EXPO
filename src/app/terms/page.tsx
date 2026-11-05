import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Terms of Service | Startup Expo 2026",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>
        <div className="mt-10 space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Registration</h2>
            <p className="mt-2">
              You confirm that registration details are accurate. Tickets are personal unless the organisers agree otherwise.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Conduct</h2>
            <p className="mt-2">
              Attendees must behave professionally. The organisers may refuse entry or remove disruptive guests.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Changes</h2>
            <p className="mt-2">
              Programme and venue details may change. Registered participants will be notified of material updates where possible.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by law, organisers are not liable for indirect loss from attendance or cancellation.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
