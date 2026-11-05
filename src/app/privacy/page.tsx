import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Privacy Policy | Startup Expo 2026",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>

        <div className="mt-10 space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Information we collect</h2>
            <p className="mt-2">
              When you register for Startup Expo 2026 we collect information you provide such as
              name, email address, phone number, organisation and related registration details.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">How we use your information</h2>
            <p className="mt-2">
              We use your data to process registrations, issue tickets, send event communications,
              improve the experience and comply with legal obligations. We do not sell your personal data.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Sharing</h2>
            <p className="mt-2">
              Limited data may be shared with event partners, sponsors or service providers solely
              for running the event (for example ticketing and email delivery), under appropriate safeguards.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Your rights</h2>
            <p className="mt-2">
              You may request access, correction or deletion of your personal data by contacting
              contact@startupexpo.com.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <p className="mt-2">
              For privacy-related questions: contact@startupexpo.com
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
