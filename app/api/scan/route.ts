import { NextResponse } from "next/server";

export type DetectedTech = {
  name: string;
  type: string;
  confidence?: "high" | "medium";
};

function normalizeUrl(input: string): string {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function detectFromHeaders(headers: Headers): DetectedTech[] {
  const stack: DetectedTech[] = [];
  const server = headers.get("server") || "";
  const poweredBy = headers.get("x-powered-by") || "";
  const vercelId = headers.get("x-vercel-id");
  const netlify = headers.get("x-nf-request-id") || headers.get("server")?.includes("Netlify");
  const cfRay = headers.get("cf-ray");
  const xCache = headers.get("x-cache") || "";
  const xAzureRef = headers.get("x-azure-ref");
  const xSucuriId = headers.get("x-sucuri-id");
  const xVarnish = headers.get("x-varnish");
  const xAkamai = headers.get("x-akamai-transformed");
  const xGoogGen = headers.get("x-goog-generation");

  if (vercelId) stack.push({ name: "Vercel", type: "Hosting", confidence: "high" });
  if (netlify) stack.push({ name: "Netlify", type: "Hosting", confidence: "high" });
  if (cfRay) stack.push({ name: "Cloudflare", type: "CDN", confidence: "high" });
  if (xCache && /cloudfront/i.test(xCache)) stack.push({ name: "AWS CloudFront", type: "CDN", confidence: "high" });
  if (server && /do-iron|cowboy/i.test(server)) stack.push({ name: server.includes("cowboy") ? "Heroku" : "DigitalOcean", type: "Hosting", confidence: "high" });
  if (xGoogGen) stack.push({ name: "Google Cloud Storage", type: "Hosting", confidence: "high" });
  if (xAzureRef) stack.push({ name: "Azure Front Door", type: "CDN", confidence: "high" });
  if (xSucuriId) stack.push({ name: "Sucuri", type: "Security", confidence: "high" });
  if (xVarnish) stack.push({ name: "Varnish Cache", type: "Performance", confidence: "high" });
  if (xAkamai) stack.push({ name: "Akamai", type: "CDN", confidence: "high" });

  if (poweredBy) {
    const lower = poweredBy.toLowerCase();
    if (lower.includes("next.js")) stack.push({ name: "Next.js", type: "Framework", confidence: "high" });
    else if (lower.includes("express")) stack.push({ name: "Express", type: "Backend", confidence: "high" });
    else if (lower.includes("php")) stack.push({ name: "PHP", type: "Backend", confidence: "medium" });
    else if (lower.includes("asp.net") || lower.includes("aspnet")) stack.push({ name: "ASP.NET", type: "Backend", confidence: "high" });
    else stack.push({ name: poweredBy.split(/[,\s]/)[0] || poweredBy, type: "Server", confidence: "medium" });
  }

  if (server && !stack.some((s) => s.name === server)) {
    const lower = server.toLowerCase();
    if (lower.includes("cloudflare")) stack.push({ name: "Cloudflare", type: "CDN", confidence: "high" });
    else if (lower.includes("nginx")) stack.push({ name: "Nginx", type: "Server", confidence: "high" });
    else if (lower.includes("apache")) stack.push({ name: "Apache", type: "Server", confidence: "high" });
    else if (!stack.some((s) => s.type === "Server")) stack.push({ name: server.split("/")[0], type: "Server", confidence: "medium" });
  }

  return stack;
}

function detectFromHtml(html: string): DetectedTech[] {
  const stack: DetectedTech[] = [];
  const first = html.slice(0, 120_000);

  const add = (name: string, type: string, conf: "high" | "medium" = "high") => {
    if (!stack.some((s) => s.name === name)) stack.push({ name, type, confidence: conf });
  };

  // CMS & No-Code
  if (first.includes("wp-content") || first.includes("wp-includes") || /wordpress/i.test(first)) add("WordPress", "CMS");
  if (first.includes("shopify") || first.includes("cdn.shopify.com")) add("Shopify", "Ecommerce");
  if (/content=["']webflow["']/i.test(first) || first.includes("webflow.com")) add("Webflow", "No-Code");
  if (first.includes("drupal") || first.includes("sites/default")) add("Drupal", "CMS");
  if (first.includes("joomla") || first.includes("/media/jui/")) add("Joomla", "CMS");
  if (first.includes("squarespace") || first.includes("static.squarespace.com")) add("Squarespace", "No-Code");
  if (first.includes("wix.com") || first.includes("parastorage.com")) add("Wix", "No-Code");
  if (first.includes("ghost") && (first.includes("ghost.org") || first.includes("ghost-"))) add("Ghost", "CMS");
  if (/cdn\.sanity\.io/i.test(first)) add("Sanity CMS", "CMS");
  if (/strapi/i.test(first) || first.includes("strapi")) add("Strapi", "CMS");
  if (/static\.cdn\.prismic\.io/i.test(first)) add("Prismic", "CMS");

  // Frameworks & UI
  if (first.includes("_next/static") || first.includes("__next") || first.includes("next/static")) add("Next.js", "Framework");
  if (first.includes("react") && (first.includes("reactroot") || first.includes("data-reactroot") || first.includes("__react"))) add("React", "Framework");
  if (first.includes("vue") && (first.includes("data-v-") || first.includes("vue.js"))) add("Vue.js", "Framework");
  if (first.includes("angular") || first.includes("ng-version")) add("Angular", "Framework");
  if (/svelte-/i.test(first) || first.includes('class="svelte-')) add("Svelte", "Framework");
  if (first.includes("_solid") || first.includes("solid-")) add("SolidJS", "Framework");
  if (/tailwind|tailwindcss|tw-|\.tw\b/i.test(first) || first.includes("tailwind")) add("Tailwind CSS", "UI framework");
  if (/alpine\.js|alpinejs|x-data|x-show|x-on/i.test(first)) add("Alpine.js", "UI framework");
  if (first.includes("bootstrap") || first.includes("bootstrap.min")) add("Bootstrap", "UI framework");
  if (first.includes("turbopack") || first.includes("__turbopack")) add("Turbopack", "Development");
  if (/priority\s*hints|fetchpriority/i.test(first)) add("Priority Hints", "Performance");

  // Script sniff: third-party
  if (/googletagmanager\.com|gtag|ua-|gtm-/i.test(first)) add("Google Analytics", "Analytics");
  if (/intercom\.io|intercom/i.test(first)) add("Intercom", "Customer service");
  if (/hubspot\.com|hs-scripts/i.test(first)) add("HubSpot", "Marketing");
  if (/stripe\.com|js\.stripe/i.test(first)) add("Stripe", "Payments");
  if (/supabase\.co/i.test(first)) add("Supabase", "Backend");
  if (/firebaseapp\.com|firebase/i.test(first)) add("Firebase", "Backend");
  if (/gsap|greensock/i.test(first)) add("GSAP", "Animation");
  if (/three\.js|three\.min/i.test(first)) add("Three.js", "3D/Graphics");

  // Hosting / CDN from HTML
  if (first.includes("cloudflare") && !stack.some((s) => s.name === "Cloudflare")) add("Cloudflare", "CDN", "medium");
  if (first.includes("vercel") && !stack.some((s) => s.name === "Vercel")) add("Vercel", "Hosting", "medium");

  const generatorMatch = first.match(/<meta[^>]+name=["']generator["'][^>]+content=["']([^"']+)["']/i) || first.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']generator["']/i);
  if (generatorMatch) {
    const gen = generatorMatch[1].trim();
    if (!stack.some((s) => s.name === gen)) {
      if (/wordpress/i.test(gen)) add("WordPress", "CMS");
      else stack.push({ name: gen, type: "CMS", confidence: "high" });
    }
  }

  return stack;
}

function mergeStack(headers: DetectedTech[], html: DetectedTech[]): DetectedTech[] {
  const seen = new Map<string, DetectedTech>();
  for (const t of [...headers, ...html]) {
    const key = `${t.name}:${t.type}`;
    if (!seen.has(key) || t.confidence === "high") seen.set(key, t);
  }
  return Array.from(seen.values());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const urlInput = typeof body?.url === "string" ? body.url : "";
    const targetUrl = normalizeUrl(urlInput);

    if (!targetUrl) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    let parsed: URL;
    try {
      parsed = new URL(targetUrl);
    } catch {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12_000);

    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; StackScanner/1.0; +https://example.com/scan)",
      },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!response.ok) {
      return NextResponse.json(
        { error: `Site returned ${response.status}` },
        { status: 502 }
      );
    }

    const html = await response.text();
    const fromHeaders = detectFromHeaders(response.headers);
    const fromHtml = detectFromHtml(html);
    const stack = mergeStack(fromHeaders, fromHtml);

    const categoryOrder = ["Framework", "UI framework", "CMS", "Ecommerce", "No-Code", "Backend", "Server", "Hosting", "CDN", "Security", "Performance", "Development", "Analytics", "Marketing", "Customer service", "Payments", "Animation", "3D/Graphics"];
    const typesInStack = [...new Set(stack.map((s) => s.type))];
    const categories = [...categoryOrder.filter((t) => typesInStack.includes(t)), ...typesInStack.filter((t) => !categoryOrder.includes(t))];

    return NextResponse.json({
      stack,
      categories,
      status: "success",
      url: parsed.hostname,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Could not scan site";
    return NextResponse.json(
      { error: message.includes("abort") ? "Request timed out" : "Could not scan site" },
      { status: 500 }
    );
  }
}
