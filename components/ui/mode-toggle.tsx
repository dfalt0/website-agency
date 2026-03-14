"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

const THEMES: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light mode", Icon: Sun },
  { value: "dark", label: "Dark mode", Icon: Moon },
  { value: "system", label: "System theme (follows OS)", Icon: Monitor },
];

export function ModeToggle({ className, variant = "dark" }: { className?: string; variant?: "light" | "dark" }) {
  const { theme, setTheme } = useTheme();
  const current = (theme ?? "system") as Theme;
  const activeIndex = THEMES.findIndex((t) => t.value === current);
  const onLight = variant === "light";

  return (
    <div
      className={cn(
        "relative inline-flex rounded-lg border p-0.5",
        onLight ? "border-black/15 bg-black/5" : "border-white/20 bg-white/5 dark:border-white/10 dark:bg-white/10",
        className
      )}
      role="group"
      aria-label="Theme"
    >
      {/* Selection indicator: fits exactly one icon */}
      <div
        className={cn(
          "absolute top-0.5 left-0.5 h-8 w-8 rounded-md transition-[left] duration-200 ease-out",
          onLight ? "bg-black/15" : "bg-white/20 dark:bg-white/15"
        )}
        style={{ left: `calc(0.125rem + ${activeIndex >= 0 ? activeIndex : 0} * (2rem + 0px))` }}
        aria-hidden
      />
      {THEMES.map(({ value, label, Icon }) => (
        <Button
          key={value}
          type="button"
          variant="text"
          size="icon"
          className={cn(
            "relative z-10 h-8 w-8 rounded-md transition-colors hover:bg-transparent",
            onLight ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white dark:text-white/80 dark:hover:text-white"
          )}
          onClick={() => setTheme(value)}
          aria-label={label}
          aria-pressed={current === value}
        >
          <Icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
}
