"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "system";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const current = (theme ?? "system") as Theme;

  return (
    <div
      className={cn("inline-flex rounded-lg border border-white/20 bg-white/5 p-0.5 dark:border-white/10 dark:bg-white/10", className)}
      role="group"
      aria-label="Theme"
    >
      <Button
        type="button"
        variant="text"
        size="icon"
        className={cn(
          "h-8 w-8 rounded-md text-white/70 transition-colors hover:bg-white/15 hover:text-white dark:text-white/80 dark:hover:bg-white/20 dark:hover:text-white",
          current === "light" && "bg-white/20 text-white dark:bg-white/15 dark:text-white"
        )}
        onClick={() => setTheme("light")}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="text"
        size="icon"
        className={cn(
          "h-8 w-8 rounded-md text-white/70 transition-colors hover:bg-white/15 hover:text-white dark:text-white/80 dark:hover:bg-white/20 dark:hover:text-white",
          current === "dark" && "bg-white/20 text-white dark:bg-white/15 dark:text-white"
        )}
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="text"
        size="icon"
        className={cn(
          "h-8 w-8 rounded-md text-white/70 transition-colors hover:bg-white/15 hover:text-white dark:text-white/80 dark:hover:bg-white/20 dark:hover:text-white",
          current === "system" && "bg-white/20 text-white dark:bg-white/15 dark:text-white"
        )}
        onClick={() => setTheme("system")}
        aria-label="System theme"
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </div>
  );
}
