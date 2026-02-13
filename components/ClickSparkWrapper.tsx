"use client";

import ClickSpark from "@/components/ui/ClickSpark";

/**
 * Wraps the app with ClickSpark so clicks anywhere on the site show a brief spark.
 * Uses Obsidian Forest emerald for the spark color.
 */
export default function ClickSparkWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClickSpark
      sparkColor="#22C55E"
      sparkSize={14}
      sparkRadius={24}
      sparkCount={10}
      duration={500}
      easing="ease-out"
    >
      {children}
    </ClickSpark>
  );
}
