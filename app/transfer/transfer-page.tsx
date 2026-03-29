"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Step3Contact } from "@/components/transfer/Step3Contact";
import { SERVICE_OPTIONS, type TransferServiceType, type TransferPath, type TransferState } from "@/lib/transfer";
import {
  Globe,
  Cloud,
  Store,
  Layout,
  Box,
  Server,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

const SERVICE_ICONS: Record<TransferServiceType, React.ComponentType<{ className?: string }>> = {
  website: Globe,
  domain: Globe,
  vercel: Cloud,
  wix: Layout,
  squarespace: Layout,
  shopify: Store,
  wordpress: Box,
  other: Server,
};

const initialState: TransferState = {
  step: 1,
  serviceTypes: [],
  path: null,
  contact: { name: "", email: "", note: "" },
};

export default function TransferPage() {
  const [state, setState] = useState<TransferState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setStep = (step: 1 | 2 | 3 | 4) => setState((s) => ({ ...s, step }));
  const toggleServiceType = (key: TransferServiceType) =>
    setState((s) => ({
      ...s,
      serviceTypes: s.serviceTypes.includes(key)
        ? s.serviceTypes.filter((t) => t !== key)
        : [...s.serviceTypes, key],
    }));
  const setPath = (path: TransferPath) => setState((s) => ({ ...s, path }));
  const setContact = (contact: TransferState["contact"]) => setState((s) => ({ ...s, contact }));

  const handleSendPlan = async () => {
    if (!state.path) return;
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/transfer-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: state.contact.name.trim(),
          email: state.contact.email.trim(),
          note: state.contact.note.trim(),
          path: state.path,
          serviceTypes: state.serviceTypes,
        }),
      });
      let data: { error?: string } = {};
      try {
        data = await res.json();
      } catch {
        /* empty */
      }
      if (!res.ok) {
        setSubmitError(typeof data.error === "string" ? data.error : "Something went wrong. Please try again.");
        return;
      }
      setStep(4);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-dark">
      <div className="mx-auto max-w-[800px] px-6 py-12 sm:px-8 sm:py-16">
        <nav className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[#E2E8E2]/15 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-[#E2E8E2] transition-colors hover:text-white"
          >
            ← Back to home
          </Link>
          <span className="text-[#E2E8E2]/30">|</span>
          <Link
            href="/#services"
            className="font-mono text-xs uppercase tracking-wider text-[#E2E8E2]/80 transition-colors hover:text-[#E2E8E2]"
          >
            Services
          </Link>
          <Link
            href="/#pricing"
            className="font-mono text-xs uppercase tracking-wider text-[#E2E8E2]/80 transition-colors hover:text-[#E2E8E2]"
          >
            Pricing
          </Link>
          <Link
            href="/#resources"
            className="font-mono text-xs uppercase tracking-wider text-[#E2E8E2]/80 transition-colors hover:text-[#E2E8E2]"
          >
            Resources
          </Link>
        </nav>

        <div className="mb-12 flex items-center gap-2">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-medium transition-colors ${
                  state.step >= n ? "bg-emerald text-dark" : "border border-dark-foreground/30 text-dark-foreground/50"
                }`}
              >
                {state.step > n ? <Check className="h-5 w-5" /> : n}
              </div>
              {n < 4 && (
                <div
                  className={`h-px w-6 sm:w-8 ${state.step > n ? "bg-emerald/60" : "bg-dark-foreground/20"}`}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {state.step === 1 && (
            <Step1
              key="step1"
              selectedIds={state.serviceTypes}
              onToggle={toggleServiceType}
              onNext={() => setStep(2)}
            />
          )}
          {state.step === 2 && (
            <Step2
              key="step2"
              selected={state.path}
              onSelect={setPath}
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
            />
          )}
          {state.step === 3 && (
            <Step3Contact
              key="step3"
              contact={state.contact}
              onChange={setContact}
              onBack={() => setStep(2)}
              onNext={handleSendPlan}
              isSubmitting={isSubmitting}
              submitError={submitError}
            />
          )}
          {state.step === 4 && (
            <Step4Summary key="step4" state={state} onBack={() => setStep(3)} />
          )}
        </AnimatePresence>

        <footer className="mt-16 border-t border-[#E2E8E2]/15 pt-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/60">
            Not ready to transfer?
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/" className="text-sm text-[#E2E8E2]/90 transition-colors hover:text-[#E2E8E2]">
              Back to home
            </Link>
            <Link href="/#services" className="text-sm text-[#E2E8E2]/90 transition-colors hover:text-[#E2E8E2]">
              Our services
            </Link>
            <Link href="/#pricing" className="text-sm text-[#E2E8E2]/90 transition-colors hover:text-[#E2E8E2]">
              Pricing
            </Link>
            <Link href="/scan" className="text-sm text-[#E2E8E2]/90 transition-colors hover:text-[#E2E8E2]">
              Tech stack scanner
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Step1({
  selectedIds,
  onToggle,
  onNext,
}: {
  selectedIds: TransferServiceType[];
  onToggle: (key: TransferServiceType) => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25 }}
    >
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald">[Step 1 of 4]</p>
      <h1 className="font-heading mb-2 text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-snug tracking-wide text-[#E2E8E2]">
        What is your tech stack?
      </h1>
      <p className="mb-6 text-[#E2E8E2]/70">
        Choose everything that applies—we&apos;ll recommend a plan that fits.
      </p>

      <div className="space-y-3">
        {(Object.entries(SERVICE_OPTIONS) as [TransferServiceType, (typeof SERVICE_OPTIONS)["website"]][]).map(
          ([key, opt]) => {
            const Icon = SERVICE_ICONS[key];
            const isSelected = selectedIds.includes(key);
            return (
              <button
                key={key}
                type="button"
                onClick={() => onToggle(key)}
                className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all ${
                  isSelected
                    ? "border-[#22C55E] bg-[#22C55E]/20 shadow-[0_0_0_2px_rgba(34,197,94,0.35)]"
                    : "border-[#15803D]/35 bg-[#052E16]/20 hover:border-[#15803D]/50 hover:bg-[#052E16]/25"
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    isSelected ? "bg-[#15803D]/50 text-[#22C55E]" : "bg-[#15803D]/25 text-[#15803D]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-medium text-[#E2E8E2]">{opt.label}</span>
                  <p className="mt-0.5 text-sm text-[#E2E8E2]/70">{opt.short}</p>
                </div>
                {isSelected && (
                  <div className="grid h-8 w-8 shrink-0 place-items-center self-center rounded-full bg-[#22C55E] text-[#052E16]">
                    <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                  </div>
                )}
              </button>
            );
          }
        )}
      </div>

      <div className="mt-10 flex flex-col items-end gap-2">
        <Button
          variant={selectedIds.length > 0 ? "white-primary" : "secondary"}
          size="lg"
          onClick={onNext}
          disabled={selectedIds.length === 0}
          className={`duration-300 ease-out transition-[background-color,border-color,color,box-shadow] ${
            selectedIds.length > 0 ? "shadow-[0_0_10px_rgba(34,197,94,0.15)]" : "border-[#E2E8E2]/35 text-[#E2E8E2]/60 shadow-none"
          }`}
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step2({
  selected,
  onSelect,
  onBack,
  onNext,
}: {
  selected: TransferPath | null;
  onSelect: (v: TransferPath) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25 }}
    >
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald">[Step 2 of 4]</p>
      <h1 className="font-heading mb-2 text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em] text-[#E2E8E2]">
        How do you want to work with us?
      </h1>
      <p className="mb-8 text-[#E2E8E2]/70">
        You can keep your current platform and have us manage it, or migrate to our stack for a new, improved experience.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => onSelect("stay")}
          className={`relative flex flex-col rounded-xl border p-6 text-left transition-all ${
            selected === "stay"
              ? "border-[#22C55E] bg-[#22C55E]/20 shadow-[0_0_0_2px_rgba(34,197,94,0.35)]"
              : "border-[#15803D]/35 bg-[#052E16]/20 hover:border-[#15803D]/50 hover:bg-[#052E16]/25"
          }`}
        >
          {selected === "stay" && (
            <div className="absolute right-4 top-4 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#22C55E] text-[#052E16]">
              <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
            </div>
          )}
          <div
            className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
              selected === "stay" ? "bg-[#15803D]/50 text-[#22C55E]" : "bg-[#15803D]/25 text-[#15803D]"
            }`}
          >
            <Server className="h-5 w-5" />
          </div>
          <h3 className="font-heading text-xl font-semibold leading-snug tracking-wide text-[#E2E8E2]">
            Stay on your platform
          </h3>
          <p className="mt-2 text-base leading-relaxed text-[#E2E8E2]/80">
            Keep using your current host (Shopify, Wix, etc.). Add us as a collaborator or share access—we’ll manage
            everything as your main developer. No migration needed.
          </p>
        </button>

        <button
          type="button"
          onClick={() => onSelect("migrate")}
          className={`relative flex flex-col rounded-xl border p-6 text-left transition-all ${
            selected === "migrate"
              ? "border-[#22C55E] bg-[#22C55E]/20 shadow-[0_0_0_2px_rgba(34,197,94,0.35)]"
              : "border-[#15803D]/35 bg-[#052E16]/20 hover:border-[#15803D]/50 hover:bg-[#052E16]/25"
          }`}
        >
          {selected === "migrate" && (
            <div className="absolute right-4 top-4 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#22C55E] text-[#052E16]">
              <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
            </div>
          )}
          <div
            className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
              selected === "migrate" ? "bg-[#15803D]/50 text-[#22C55E]" : "bg-[#15803D]/25 text-[#15803D]"
            }`}
          >
            <Sparkles className="h-5 w-5" />
          </div>
          <h3 className="font-heading text-xl font-semibold leading-snug tracking-wide text-[#E2E8E2]">
            Migrate to our stack
          </h3>
          <p className="mt-2 text-base leading-relaxed text-[#E2E8E2]/80">
            Move from your current setup to our infrastructure. We build or rebuild on modern hosting (Vercel, AWS,
            etc.) for better performance and control. Available on paid tiers.
          </p>
          <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-wider text-[#22C55E]">
            Paid tiers only
          </span>
        </button>
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="secondary" size="lg" onClick={onBack} className="border-dark-foreground/30 text-[#E2E8E2]">
          Back
        </Button>
        <Button
          variant={selected ? "white-primary" : "secondary"}
          size="lg"
          onClick={onNext}
          disabled={!selected}
          className={`duration-300 ease-out transition-[background-color,border-color,color,box-shadow] ${
            selected ? "shadow-[0_0_10px_rgba(34,197,94,0.15)]" : "border-[#E2E8E2]/35 text-[#E2E8E2]/60 shadow-none"
          }`}
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

function Step4Summary({ state, onBack }: { state: TransferState; onBack: () => void }) {
  const serviceLabels =
    state.serviceTypes.map((id) => SERVICE_OPTIONS[id].label).join(", ") || "—";
  const pathLabel = state.path === "stay" ? "Stay on your platform" : "Migrate to our stack";
  const multipleServices = state.serviceTypes.length > 1;
  const email = state.contact.email.trim();

  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25 }}
    >
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald">[Step 4 of 4]</p>
      <h1 className="font-heading mb-2 text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em] text-[#E2E8E2]">
        You&apos;re all set
      </h1>
      <p className="mb-2 text-[#E2E8E2]/80">
        We&apos;ll send your plan to <span className="font-medium text-[#E2E8E2]">{email}</span>.
      </p>
      <p className="mb-8 text-[#E2E8E2]/70">Here&apos;s what happens next:</p>

      <ol className="mb-8 list-decimal space-y-2 pl-5 text-sm text-[#E2E8E2]/80">
        <li>Confirmation in your inbox (check spam if you don&apos;t see it).</li>
        <li>We review your setup and audit what you shared.</li>
        <li>You get a personalized plan—usually within 24 hours.</li>
      </ol>

      <div className="rounded-xl border border-[#15803D]/30 bg-[#052E16]/25 p-6">
        <div className="space-y-4">
          <div className="flex flex-col gap-1 border-b border-[#15803D]/20 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
              What you&apos;re bringing
            </span>
            <span className="font-medium text-[#E2E8E2]">{serviceLabels}</span>
          </div>
          {multipleServices && (
            <div className="rounded-lg border border-[#15803D]/40 bg-[#15803D]/15 px-4 py-2">
              <p className="text-xs font-medium text-[#22C55E]">
                Multiple properties often map to a higher tier—we&apos;ll spell that out in your plan.
              </p>
            </div>
          )}
          <div className="flex justify-between border-b border-[#15803D]/20 pb-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">How we&apos;ll work</span>
            <span className="font-medium text-[#E2E8E2]">{pathLabel}</span>
          </div>
          {state.contact.note.trim() ? (
            <div className="flex flex-col gap-1 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">You noted</span>
              <p className="text-sm leading-relaxed text-[#E2E8E2]/85">{state.contact.note.trim()}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <Button variant="secondary" size="lg" onClick={onBack} className="border-[#E2E8E2]/30 text-[#E2E8E2]">
          Back
        </Button>
        <Button variant="white-primary" size="lg" asChild className="shadow-[0_0_10px_rgba(34,197,94,0.15)]">
          <Link href="/">
            Back to home
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
