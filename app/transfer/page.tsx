"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  SERVICE_OPTIONS,
  AI_FEATURE_OPTIONS,
  type TransferServiceType,
  type TransferPath,
  type TransferAIFeature,
  type TransferState,
} from "@/lib/transfer";
import { APP_URL } from "@/lib/config";
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
  MessageCircle,
  BarChart3,
  FileText,
  Search,
  Zap,
  User,
  TrendingUp,
  Shield,
  HelpCircle,
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

const AI_FEATURE_ICONS: Record<TransferAIFeature, React.ComponentType<{ className?: string }>> = {
  chatbot: MessageCircle,
  analytics: BarChart3,
  content: FileText,
  search: Search,
  automation: Zap,
  personalization: User,
  seo: TrendingUp,
  moderation: Shield,
  none: HelpCircle,
};

const initialState: TransferState = {
  step: 1,
  serviceTypes: [],
  path: null,
  aiFeatures: [],
};

export default function TransferPage() {
  const [state, setState] = useState<TransferState>(initialState);

  const setStep = (step: 1 | 2 | 3 | 4) => setState((s) => ({ ...s, step }));
  const toggleServiceType = (key: TransferServiceType) =>
    setState((s) => ({
      ...s,
      serviceTypes: s.serviceTypes.includes(key)
        ? s.serviceTypes.filter((t) => t !== key)
        : [...s.serviceTypes, key],
    }));
  const setPath = (path: TransferPath) => setState((s) => ({ ...s, path }));
  const toggleAIFeature = (key: TransferAIFeature) =>
    setState((s) => {
      const hasNone = key === "none";
      const current = s.aiFeatures;
      const hasKey = current.includes(key);
      if (hasKey) return { ...s, aiFeatures: current.filter((t) => t !== key) };
      if (hasNone) return { ...s, aiFeatures: ["none"] };
      return { ...s, aiFeatures: [...current.filter((t) => t !== "none"), key] };
    });

  return (
    <main className="min-h-screen bg-dark">
      <div className="mx-auto max-w-[800px] px-6 py-12 sm:px-8 sm:py-16">
        {/* Escape nav: quit transfer and go elsewhere */}
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

        {/* Progress */}
        <div className="mb-12 flex items-center gap-2">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-medium transition-colors ${
                  state.step >= n
                    ? "bg-emerald text-dark"
                    : "border border-dark-foreground/30 text-dark-foreground/50"
                }`}
              >
                {state.step > n ? <Check className="h-5 w-5" /> : n}
              </div>
              {n < 4 && (
                <div
                  className={`h-px w-6 sm:w-8 ${
                    state.step > n ? "bg-emerald/60" : "bg-dark-foreground/20"
                  }`}
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
            <Step3AI
              key="step3"
              selectedIds={state.aiFeatures}
              onToggle={toggleAIFeature}
              onBack={() => setStep(2)}
              onNext={() => setStep(4)}
            />
          )}
          {state.step === 4 && (
            <Step4Summary
              key="step4"
              state={state}
              onBack={() => setStep(3)}
            />
          )}
        </AnimatePresence>

        {/* Footer: quit / explore without completing transfer */}
        <footer className="mt-16 border-t border-[#E2E8E2]/15 pt-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/60">
            Not ready to transfer?
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/"
              className="text-sm text-[#E2E8E2]/90 transition-colors hover:text-[#E2E8E2]"
            >
              Back to home
            </Link>
            <Link
              href="/#services"
              className="text-sm text-[#E2E8E2]/90 transition-colors hover:text-[#E2E8E2]"
            >
              Our services
            </Link>
            <Link
              href="/#pricing"
              className="text-sm text-[#E2E8E2]/90 transition-colors hover:text-[#E2E8E2]"
            >
              Pricing
            </Link>
            <Link
              href="/scan"
              className="text-sm text-[#E2E8E2]/90 transition-colors hover:text-[#E2E8E2]"
            >
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
  const multipleSelected = selectedIds.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25 }}
    >
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald">
        [Step 1 of 3]
      </p>
      <h1 className="font-heading mb-2 text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-snug tracking-wide text-[#E2E8E2]">
        What is your tech stack?
      </h1>
      <p className="mb-6 text-[#E2E8E2]/70">
        Choose one or more. You can select multiple types—managing more than one is a paid feature.
      </p>

      {multipleSelected && (
        <div className="mb-6 rounded-lg border border-[#15803D]/50 bg-[#15803D]/15 px-4 py-3">
          <p className="text-sm font-medium text-[#22C55E]">
            Multiple items selected — this is a paid feature. We’ll include it in your quote.
          </p>
        </div>
      )}

      {/* Uniform unselected: one style. Selected: clear standout. */}
      <div className="space-y-3">
        {(Object.entries(SERVICE_OPTIONS) as [TransferServiceType, typeof SERVICE_OPTIONS.website][]).map(
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
        {selectedIds.length > 1 && (
          <p className="text-xs text-[#E2E8E2]/60">
            * Multiple items = paid feature.
          </p>
        )}
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
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald">
        [Step 2 of 3]
      </p>
      <h1 className="font-heading mb-2 text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em] text-[#E2E8E2]">
        How do you want to work with us?
      </h1>
      <p className="mb-8 text-[#E2E8E2]/70">
        You can keep your current platform and have us manage it, or migrate to our stack for a new, improved experience.
      </p>

      {/* Uniform unselected style; selected stands out like Step 1 */}
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
            Keep using your current host (Shopify, Wix, etc.). Add us as a collaborator or share access—we’ll manage everything as your main developer. No migration needed.
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
            Move from your current setup to our infrastructure. We build or rebuild on modern hosting (Vercel, AWS, etc.) for better performance and control. Available on paid tiers.
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

function Step3AI({
  selectedIds,
  onToggle,
  onBack,
  onNext,
}: {
  selectedIds: TransferAIFeature[];
  onToggle: (key: TransferAIFeature) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const aiOptions = (Object.entries(AI_FEATURE_OPTIONS) as [TransferAIFeature, (typeof AI_FEATURE_OPTIONS)[TransferAIFeature]][]).filter(
    ([key]) => key !== "none"
  );
  const noneOption = AI_FEATURE_OPTIONS.none;
  const hasSelection = selectedIds.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25 }}
    >
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald">
        [Step 3 of 4]
      </p>
      <h1 className="font-heading mb-2 text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-snug tracking-wide text-[#E2E8E2]">
        Add AI to your service?
      </h1>
      <p className="mb-6 text-[#E2E8E2]/80">
        Many platforms already include AI—we can help you turn it on and configure it. Or we can add AI features that fit your stack. Choose what interests you, or skip for now.
      </p>

      <div className="space-y-3">
        {aiOptions.map(([key, opt]) => {
          const Icon = AI_FEATURE_ICONS[key];
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
        })}
        <button
          type="button"
          onClick={() => onToggle("none")}
          className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all ${
            selectedIds.includes("none")
              ? "border-[#22C55E] bg-[#22C55E]/20 shadow-[0_0_0_2px_rgba(34,197,94,0.35)]"
              : "border-[#15803D]/35 bg-[#052E16]/20 hover:border-[#15803D]/50 hover:bg-[#052E16]/25"
          }`}
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
              selectedIds.includes("none") ? "bg-[#15803D]/50 text-[#22C55E]" : "bg-[#15803D]/25 text-[#15803D]"
            }`}
          >
            <HelpCircle className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="font-medium text-[#E2E8E2]">{noneOption.label}</span>
            <p className="mt-0.5 text-sm text-[#E2E8E2]/70">{noneOption.short}</p>
          </div>
          {selectedIds.includes("none") && (
            <div className="grid h-8 w-8 shrink-0 place-items-center self-center rounded-full bg-[#22C55E] text-[#052E16]">
              <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
            </div>
          )}
        </button>
      </div>

      <div className="mt-10 flex justify-between">
        <Button variant="secondary" size="lg" onClick={onBack} className="border-[#E2E8E2]/35 text-[#E2E8E2]">
          Back
        </Button>
        <Button
          variant={hasSelection ? "white-primary" : "secondary"}
          size="lg"
          onClick={onNext}
          className={`duration-300 ease-out transition-[background-color,border-color,color,box-shadow] ${
            hasSelection ? "shadow-[0_0_10px_rgba(34,197,94,0.15)]" : "border-[#E2E8E2]/35 text-[#E2E8E2]/60 shadow-none"
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
  const serviceLabels = state.serviceTypes
    .map((id) => SERVICE_OPTIONS[id].label)
    .join(", ") || "—";
  const pathLabel = state.path === "stay" ? "Stay on your platform" : "Migrate to our stack";
  const multipleServices = state.serviceTypes.length > 1;
  const aiLabels =
    state.aiFeatures.length === 0 || state.aiFeatures.every((f) => f === "none")
      ? "None"
      : state.aiFeatures
          .filter((f) => f !== "none")
          .map((id) => AI_FEATURE_OPTIONS[id].label)
          .join(", ") || "None";

  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25 }}
    >
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-emerald">
        [Step 4 of 4]
      </p>
      <h1 className="font-heading mb-2 text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em] text-[#E2E8E2]">
        You’re all set!
      </h1>
      <p className="mb-8 text-[#E2E8E2]/70">
        Here’s what you chose. Next, we’ll get you into the dashboard where you can see your services and status.
      </p>

      <div className="rounded-xl border border-[#15803D]/30 bg-[#052E16]/25 p-6">
        <div className="space-y-4">
          <div className="flex flex-col gap-1 border-b border-[#15803D]/20 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
              What you’re bringing
            </span>
            <span className="font-medium text-[#E2E8E2]">{serviceLabels}</span>
          </div>
          {multipleServices && (
            <div className="rounded-lg border border-[#15803D]/40 bg-[#15803D]/15 px-4 py-2">
              <p className="text-xs font-medium text-[#22C55E]">
                Multiple items — paid feature. We’ll include it in your quote.
              </p>
            </div>
          )}
          <div className="flex justify-between border-b border-[#15803D]/20 pb-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
              How we’ll work
            </span>
            <span className="font-medium text-[#E2E8E2]">{pathLabel}</span>
          </div>
          <div className="flex flex-col gap-1 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#E2E8E2]/50">
              AI features
            </span>
            <span className="font-medium text-[#E2E8E2]">{aiLabels}</span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-[#E2E8E2]/60">
        We’ll send you an email with next steps. In the app you’ll see your websites, domains, and services—and their status—once they’re connected.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
        <Button variant="secondary" size="lg" onClick={onBack} className="border-[#E2E8E2]/30 text-[#E2E8E2]">
          Back
        </Button>
        <Button variant="white-primary" size="lg" asChild className="shadow-[0_0_10px_rgba(34,197,94,0.15)]">
          <a href={APP_URL} target="_blank" rel="noopener noreferrer">
            Go to my dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
