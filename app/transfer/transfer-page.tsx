"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Step3Contact } from "@/components/transfer/Step3Contact";
import {
  INTENT_OPTIONS,
  SERVICE_OPTIONS,
  PATH_OPTIONS,
  type TransferIntent,
  type TransferServiceType,
  type TransferPath,
  type TransferState,
} from "@/lib/transfer";
import {
  Brain,
  Code2,
  Workflow,
  Plug,
  Server,
  Globe,
  Cloud,
  Store,
  Layout,
  Box,
  ArrowRight,
  Check,
  Sparkles,
  Map,
  Hammer,
} from "lucide-react";

const INTENT_ICONS: Record<TransferIntent, React.ComponentType<{ className?: string }>> = {
  ai_discovery: Brain,
  custom_ai_app: Code2,
  workflow_automation: Workflow,
  mcp_skills: Plug,
  managed_hosting: Server,
};

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

const PATH_ICONS: Record<TransferPath, React.ComponentType<{ className?: string }>> = {
  discover: Map,
  build: Hammer,
  stay: Server,
  migrate: Sparkles,
};

const initialState: TransferState = {
  step: 1,
  intents: [],
  serviceTypes: [],
  path: null,
  contact: { name: "", email: "", company: "", teamSize: "", industry: "", note: "" },
};

export default function TransferPage() {
  const [state, setState] = useState<TransferState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setStep = (step: 1 | 2 | 3 | 4) => setState((s) => ({ ...s, step }));
  const toggleIntent = (key: TransferIntent) =>
    setState((s) => ({
      ...s,
      intents: s.intents.includes(key) ? s.intents.filter((t) => t !== key) : [...s.intents, key],
    }));
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
          company: state.contact.company.trim(),
          teamSize: state.contact.teamSize.trim(),
          industry: state.contact.industry.trim(),
          note: state.contact.note.trim(),
          path: state.path,
          intents: state.intents,
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
            href="/#ai-engineering"
            className="font-mono text-xs uppercase tracking-wider text-[#E2E8E2]/80 transition-colors hover:text-[#E2E8E2]"
          >
            AI Engineering
          </Link>
          <Link
            href="/contact"
            className="font-mono text-xs uppercase tracking-wider text-[#E2E8E2]/80 transition-colors hover:text-[#E2E8E2]"
          >
            Discovery call
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
            <Step1Intents
              key="step1"
              selectedIds={state.intents}
              onToggle={toggleIntent}
              onNext={() => setStep(2)}
            />
          )}
          {state.step === 2 && (
            <Step2Path
              key="step2"
              intents={state.intents}
              selectedPath={state.path}
              selectedServices={state.serviceTypes}
              onSelectPath={setPath}
              onToggleService={toggleServiceType}
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
            Prefer to talk first?
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/contact" className="text-sm text-emerald transition-colors hover:text-emerald/80">
              Book a discovery call
            </Link>
            <Link href="/scan" className="text-sm text-[#E2E8E2]/90 transition-colors hover:text-[#E2E8E2]">
              Stack & AI opportunity scan
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Step1Intents({
  selectedIds,
  onToggle,
  onNext,
}: {
  selectedIds: TransferIntent[];
  onToggle: (key: TransferIntent) => void;
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
        What brings you here?
      </h1>
      <p className="mb-6 text-[#E2E8E2]/70">
        Select everything that applies — we&apos;ll tailor the next steps to your goals.
      </p>

      <div className="space-y-3">
        {(Object.entries(INTENT_OPTIONS) as [TransferIntent, (typeof INTENT_OPTIONS)["ai_discovery"]][]).map(
          ([key, opt]) => {
            const Icon = INTENT_ICONS[key];
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

function Step2Path({
  intents,
  selectedPath,
  selectedServices,
  onSelectPath,
  onToggleService,
  onBack,
  onNext,
}: {
  intents: TransferIntent[];
  selectedPath: TransferPath | null;
  selectedServices: TransferServiceType[];
  onSelectPath: (v: TransferPath) => void;
  onToggleService: (key: TransferServiceType) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const hostingIntent = intents.includes("managed_hosting");

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
        Pick the engagement model that fits — discovery, a scoped build, ongoing management, or migration.
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        {(Object.entries(PATH_OPTIONS) as [TransferPath, (typeof PATH_OPTIONS)["discover"]][]).map(
          ([key, opt]) => {
            const Icon = PATH_ICONS[key];
            const isSelected = selectedPath === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => onSelectPath(key)}
                className={`relative flex flex-col rounded-xl border p-5 text-left transition-all ${
                  isSelected
                    ? "border-[#22C55E] bg-[#22C55E]/20 shadow-[0_0_0_2px_rgba(34,197,94,0.35)]"
                    : "border-[#15803D]/35 bg-[#052E16]/20 hover:border-[#15803D]/50 hover:bg-[#052E16]/25"
                }`}
              >
                {isSelected && (
                  <div className="absolute right-4 top-4 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#22C55E] text-[#052E16]">
                    <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                  </div>
                )}
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
                    isSelected ? "bg-[#15803D]/50 text-[#22C55E]" : "bg-[#15803D]/25 text-[#15803D]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug tracking-wide text-[#E2E8E2]">
                  {opt.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#E2E8E2]/80">{opt.short}</p>
                {opt.badge && (
                  <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-wider text-[#22C55E]">
                    {opt.badge}
                  </span>
                )}
              </button>
            );
          }
        )}
      </div>

      <div className="mb-8">
        <h2 className="font-heading mb-2 text-lg font-semibold text-[#E2E8E2]">
          {hostingIntent ? "Your current stack" : "Current stack (optional)"}
        </h2>
        <p className="mb-4 text-sm text-[#E2E8E2]/65">
          Helps us understand integrations and migration scope. Skip if you&apos;re starting fresh.
        </p>
        <div className="space-y-2">
          {(Object.entries(SERVICE_OPTIONS) as [TransferServiceType, (typeof SERVICE_OPTIONS)["website"]][]).map(
            ([key, opt]) => {
              const Icon = SERVICE_ICONS[key];
              const isSelected = selectedServices.includes(key);
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onToggleService(key)}
                  className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all ${
                    isSelected
                      ? "border-[#22C55E]/60 bg-[#22C55E]/10"
                      : "border-[#15803D]/25 bg-[#052E16]/15 hover:border-[#15803D]/40"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-emerald" : "text-[#15803D]"}`} />
                  <span className="text-sm text-[#E2E8E2]">{opt.label}</span>
                  {isSelected && <Check className="ml-auto h-4 w-4 text-emerald" />}
                </button>
              );
            }
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="secondary" size="lg" onClick={onBack} className="border-dark-foreground/30 text-[#E2E8E2]">
          Back
        </Button>
        <Button
          variant={selectedPath ? "white-primary" : "secondary"}
          size="lg"
          onClick={onNext}
          disabled={!selectedPath}
          className={`duration-300 ease-out transition-[background-color,border-color,color,box-shadow] ${
            selectedPath ? "shadow-[0_0_10px_rgba(34,197,94,0.15)]" : "border-[#E2E8E2]/35 text-[#E2E8E2]/60 shadow-none"
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
  const intentLabels = state.intents.map((id) => INTENT_OPTIONS[id].label).join(", ") || "—";
  const serviceLabels =
    state.serviceTypes.map((id) => SERVICE_OPTIONS[id].label).join(", ") || "Not specified";
  const pathLabel = state.path ? PATH_OPTIONS[state.path].label : "—";
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
        We&apos;ll follow up at <span className="font-medium text-[#E2E8E2]">{email}</span>.
      </p>
      <p className="mb-8 text-[#E2E8E2]/70">Here&apos;s what happens next:</p>

      <ol className="mb-8 list-decimal space-y-2 pl-5 text-sm text-[#E2E8E2]/80">
        <li>Confirmation in your inbox (check spam if you don&apos;t see it).</li>
        <li>We review your goals, stack, and engagement model.</li>
        <li>You get a tailored response — discovery invite or scoped plan — usually within 24 hours.</li>
      </ol>

      <div className="rounded-xl border border-[#15803D]/30 bg-[#052E16]/25 p-6">
        <div className="space-y-4">
          <div className="flex flex-col gap-1 border-b border-[#15803D]/20 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">Goals</span>
            <span className="font-medium text-[#E2E8E2]">{intentLabels}</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-[#15803D]/20 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">Engagement</span>
            <span className="font-medium text-[#E2E8E2]">{pathLabel}</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-[#15803D]/20 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">Stack</span>
            <span className="font-medium text-[#E2E8E2]">{serviceLabels}</span>
          </div>
          {state.contact.company.trim() && (
            <div className="flex flex-col gap-1 border-b border-[#15803D]/20 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">Company</span>
              <span className="font-medium text-[#E2E8E2]">{state.contact.company.trim()}</span>
            </div>
          )}
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
