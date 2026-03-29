import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Next app root (this folder). Fixes Turbopack picking a parent `package-lock.json` and failing to resolve `@tailwindcss/postcss`. */
const turbopackRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
};

export default nextConfig;
