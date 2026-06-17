import { NextResponse } from "next/server";
import type { TransferPath, TransferServiceType, TransferIntent } from "@/lib/transfer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_TYPES: TransferServiceType[] = [
  "website",
  "domain",
  "vercel",
  "wix",
  "squarespace",
  "shopify",
  "wordpress",
  "other",
];

const INTENTS: TransferIntent[] = [
  "ai_discovery",
  "custom_ai_app",
  "workflow_automation",
  "mcp_skills",
  "managed_hosting",
];

function isServiceType(x: unknown): x is TransferServiceType {
  return typeof x === "string" && SERVICE_TYPES.includes(x as TransferServiceType);
}

function isIntent(x: unknown): x is TransferIntent {
  return typeof x === "string" && INTENTS.includes(x as TransferIntent);
}

function isPath(x: unknown): x is TransferPath {
  return x === "discover" || x === "build" || x === "stay" || x === "migrate";
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const o = body as Record<string, unknown>;
  const name = typeof o.name === "string" ? o.name.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const company = typeof o.company === "string" ? o.company.trim() : "";
  const teamSize = typeof o.teamSize === "string" ? o.teamSize.trim() : "";
  const industry = typeof o.industry === "string" ? o.industry.trim() : "";
  const note = typeof o.note === "string" ? o.note.trim() : "";
  const path = o.path;
  const serviceTypes = o.serviceTypes;
  const intents = o.intents;

  if (!name || !EMAIL_RE.test(email) || !isPath(path)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  if (!Array.isArray(intents) || intents.length === 0 || !intents.every(isIntent)) {
    return NextResponse.json({ error: "Invalid intent selection" }, { status: 400 });
  }

  if (
    !Array.isArray(serviceTypes) ||
    !serviceTypes.every(isServiceType)
  ) {
    return NextResponse.json({ error: "Invalid service selection" }, { status: 400 });
  }

  const payload = {
    contact: { name, email, company, teamSize, industry, note },
    path,
    intents,
    serviceTypes,
    receivedAt: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === "development") {
    console.info("[transfer-lead]", JSON.stringify(payload, null, 2));
  }

  const webhook = process.env.TRANSFER_LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const wh = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!wh.ok) {
        console.error("[transfer-lead] webhook failed", wh.status, await wh.text());
        return NextResponse.json({ error: "Could not record request" }, { status: 502 });
      }
    } catch (e) {
      console.error("[transfer-lead] webhook error", e);
      return NextResponse.json({ error: "Could not record request" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
