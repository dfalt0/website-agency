"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Persists theme in localStorage. System (desktop) uses prefers-color-scheme to resolve light/dark. */
export function ThemeProvider({
  children,
  storageKey = "theme",
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider storageKey={storageKey} {...props}>
      {children}
    </NextThemesProvider>
  );
}
