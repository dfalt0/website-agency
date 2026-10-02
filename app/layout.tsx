import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClickSparkWrapper from "@/components/ClickSparkWrapper";
import { BRAND } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} — Websites, Infrastructure & Growth`,
  description:
    "Digital operations agency for businesses that want one team: websites and products, managed infrastructure, and growth creatives — handled end to end.",
  keywords: [
    "web agency",
    "managed hosting",
    "website development",
    "digital operations",
    "growth creatives",
    "infrastructure management",
    "Nodus",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${caveat.variable}`}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClickSparkWrapper>{children}</ClickSparkWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
