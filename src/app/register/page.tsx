"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

interface TicketType {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string | null;
}

export default function RegisterPage() {
  const [ticketTypes, setTicketTypes] = useState<TicketType[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<{ ticketUrl: string; ticketNumber: string } | null>(null);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    ticketTypeId: "",
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    city: "",
  });

  useEffect(() => {
    fetch("/api/ticket-types")
      .then((r) => r.json())
      .then((data) => {
        if (data.ticketTypes) {
          setTicketTypes(data.ticketTypes);
          if (data.ticketTypes.length > 0) {
            setForm((f) => ({ ...f, ticketTypeId: data.ticketTypes[0].id }));
          }
        }
      })
      .catch(() => setError("Failed to load ticket types"))
      .finally(() => setLoading(false));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Registration failed");
        return;
      }
      setSuccess({ ticketUrl: data.ticketUrl, ticketNumber: data.ticketNumber });
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-slate-50">
        <SiteHeader />
        <div className="mx-auto max-w-lg px-4 py-20 text-center">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">✓</div>
            <h1 className="text-2xl font-bold text-slate-900">Registration confirmed</h1>
            <p className="mt-3 text-slate-600">
              Ticket <strong>{success.ticketNumber}</strong> is ready. A confirmation email has been sent.
            </p>
            <Link href={success.ticketUrl} className="mt-8 inline-block rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400">
              View your ticket
            </Link>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900">Register</h1>
        <p className="mt-2 text-slate-600">
          Choose your category — visitor, exhibitor, investor, speaker or volunteer — and complete the form.
        </p>

        {loading ? (
          <p className="mt-10 text-slate-500">Loading ticket options...</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            {error && <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

            <div>
              <label className="block text-sm font-medium text-slate-700">Ticket category *</label>
              <select
                required
                value={form.ticketTypeId}
                onChange={(e) => setForm({ ...form, ticketTypeId: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              >
                {ticketTypes.length === 0 && <option value="">No tickets available yet — run /api/setup</option>}
                {ticketTypes.map((tt) => (
                  <option key={tt.id} value={tt.id}>
                    {tt.name} {tt.price > 0 ? `(₹${tt.price})` : "(Free)"}
                  </option>
                ))}
              </select>
            </div>

            {[
              { key: "fullName", label: "Full name *", type: "text", required: true },
              { key: "email", label: "Email *", type: "email", required: true },
              { key: "phone", label: "Mobile number", type: "tel", required: false },
              { key: "organization", label: "Organization / startup", type: "text", required: false },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-slate-700">{field.label}</label>
                <input
                  required={field.required}
                  type={field.type}
                  value={(form as any)[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
            ))}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Designation</label>
                <input
                  type="text"
                  value={form.designation}
                  onChange={(e) => setForm({ ...form, designation: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">City</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || ticketTypes.length === 0}
              className="w-full rounded-lg bg-amber-500 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400 disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Complete registration"}
            </button>
          </form>
        )}
      </div>
      <SiteFooter />
    </div>
  );
}
