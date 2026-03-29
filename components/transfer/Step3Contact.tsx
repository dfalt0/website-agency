"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, User, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ContactInfo } from "@/lib/transfer";

export function Step3Contact({
  contact,
  onChange,
  onBack,
  onNext,
  isSubmitting,
  submitError,
}: {
  contact: ContactInfo;
  onChange: (info: ContactInfo) => void;
  onBack: () => void;
  onNext: () => void;
  isSubmitting?: boolean;
  submitError?: string | null;
}) {
  const [touched, setTouched] = useState({ name: false, email: false });

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email);
  const nameValid = contact.name.trim().length > 0;
  const canContinue = nameValid && emailValid;

  const field =
    "w-full rounded-xl border bg-[#052E16]/30 px-4 py-3 text-[#E2E8E2] placeholder-[#E2E8E2]/30 outline-none transition-all focus:ring-2";

  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25 }}
    >
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald">[Step 3 of 4]</p>
      <h1 className="font-heading mb-2 text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-snug tracking-wide text-[#E2E8E2]">
        Where should we send your plan?
      </h1>
      <p className="mb-8 text-[#E2E8E2]/70">
        We&apos;ll review your setup and send a personalized plan within 24 hours. No commitment needed.
      </p>

      <div className="space-y-4">
        <div>
          <label className="mb-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
            <User className="h-3 w-3" />
            Your name
          </label>
          <input
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={contact.name}
            onChange={(e) => onChange({ ...contact, name: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            className={`${field} ${
              touched.name && !nameValid
                ? "border-red-500/60 focus:ring-red-500/30"
                : "border-[#15803D]/35 focus:border-[#22C55E]/60 focus:ring-[#22C55E]/20 hover:border-[#15803D]/50"
            }`}
          />
          {touched.name && !nameValid && <p className="mt-1 text-xs text-red-400">Please enter your name.</p>}
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
            <Mail className="h-3 w-3" />
            Email address
          </label>
          <input
            type="email"
            autoComplete="email"
            placeholder="jane@example.com"
            value={contact.email}
            onChange={(e) => onChange({ ...contact, email: e.target.value })}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            className={`${field} ${
              touched.email && !emailValid
                ? "border-red-500/60 focus:ring-red-500/30"
                : "border-[#15803D]/35 focus:border-[#22C55E]/60 focus:ring-[#22C55E]/20 hover:border-[#15803D]/50"
            }`}
          />
          {touched.email && !emailValid && (
            <p className="mt-1 text-xs text-red-400">Please enter a valid email address.</p>
          )}
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
            <MessageSquare className="h-3 w-3" />
            Anything we should know?{" "}
            <span className="normal-case tracking-normal text-[#E2E8E2]/30">— optional</span>
          </label>
          <textarea
            rows={3}
            placeholder="e.g. My site goes down every Monday, I use Cloudflare, I have no idea what my hosting is…"
            value={contact.note}
            onChange={(e) => onChange({ ...contact, note: e.target.value })}
            className={`${field} resize-none border-[#15803D]/35 focus:border-[#22C55E]/60 focus:ring-[#22C55E]/20 hover:border-[#15803D]/50`}
          />
        </div>
      </div>

      {submitError ? <p className="mt-4 text-sm text-red-400">{submitError}</p> : null}

      <p className="mt-5 text-xs text-[#E2E8E2]/40">
        No spam. No sales calls unless you ask for one. Unsubscribe any time.
      </p>

      <div className="mt-8 flex justify-between">
        <Button
          variant="secondary"
          size="lg"
          onClick={onBack}
          disabled={isSubmitting}
          className="border-[#E2E8E2]/35 text-[#E2E8E2]"
        >
          Back
        </Button>
        <Button
          variant={canContinue ? "white-primary" : "secondary"}
          size="lg"
          onClick={onNext}
          disabled={!canContinue || isSubmitting}
          className={`transition-[background-color,border-color,color,box-shadow] duration-300 ease-out ${
            canContinue
              ? "shadow-[0_0_10px_rgba(34,197,94,0.15)]"
              : "border-[#E2E8E2]/35 text-[#E2E8E2]/60 shadow-none"
          }`}
        >
          {isSubmitting ? "Sending…" : "Send my plan"}
          {!isSubmitting ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
        </Button>
      </div>
    </motion.div>
  );
}
