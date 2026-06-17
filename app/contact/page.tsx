"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, User, Mail, Building2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/config";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const canSubmit = form.name.trim() && emailValid && form.message.trim();

  const field =
    "w-full rounded-xl border border-[#15803D]/35 bg-[#052E16]/30 px-4 py-3 text-[#E2E8E2] placeholder-[#E2E8E2]/30 outline-none transition-all focus:border-[#22C55E]/60 focus:ring-2 focus:ring-[#22C55E]/20 hover:border-[#15803D]/50";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/transfer-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          teamSize: "",
          industry: "",
          note: form.message.trim(),
          path: "discover",
          intents: ["ai_discovery"],
          serviceTypes: [],
        }),
      });
      if (!res.ok) {
        setError("Something went wrong. Please try again or email us directly.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-dark">
      <Navigation navVariant="dark" />
      <div className="mx-auto max-w-[640px] px-6 pb-20 pt-32 sm:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 font-mono text-xs text-[#E2E8E2]/60 transition-colors hover:text-[#E2E8E2]"
        >
          ← Back to home
        </Link>

        {submitted ? (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald">[Received]</p>
            <h1 className="font-heading mb-4 text-3xl font-semibold tracking-[-0.02em] text-[#E2E8E2]">
              We&apos;ll be in touch
            </h1>
            <p className="mb-8 text-[#E2E8E2]/75">
              Thanks for reaching out. We typically respond within one business day with next steps for a
              discovery conversation.
            </p>
            <Button variant="white-primary" size="lg" asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald">[Discovery]</p>
            <h1 className="font-heading mb-4 text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-[-0.02em] text-[#E2E8E2]">
              Book a discovery conversation
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-[#E2E8E2]/70">
              Tell us about your business and where you&apos;re stuck with AI. No sales deck — just a direct
              conversation about whether we can help you ship something useful.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
                  <User className="h-3 w-3" />
                  Your name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
                  <Mail className="h-3 w-3" />
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
                  <Building2 className="h-3 w-3" />
                  Company <span className="normal-case text-[#E2E8E2]/30">— optional</span>
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={field}
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
                  <MessageSquare className="h-3 w-3" />
                  What are you trying to solve?
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} resize-none`}
                  placeholder="Describe your operations, current tools, and what a useful AI outcome looks like for your team…"
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <Button
                type="submit"
                variant="white-primary"
                size="lg"
                disabled={!canSubmit || loading}
                className="w-full shadow-[0_0_10px_rgba(34,197,94,0.15)]"
              >
                {loading ? "Sending…" : "Request discovery call"}
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-[#E2E8E2]/50">
              Or email us at{" "}
              <a href={`mailto:${BRAND.contactEmail}`} className="text-emerald hover:underline">
                {BRAND.contactEmail}
              </a>
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
