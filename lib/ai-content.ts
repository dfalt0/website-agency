/**
 * Static content for AI consulting, stacks, and MCP/skills positioning.
 */

export const CONSULTING_PILLARS = [
  {
    id: "CNS-01",
    title: "Discovery & roadmap",
    description:
      "You’re already running a business — we map your operations, data flows, and bottlenecks to find where AI actually earns its keep. No generic “AI strategy” deck.",
    tags: ["Ops audit", "Use-case prioritization", "Build vs. buy"],
  },
  {
    id: "AI-02",
    title: "Custom AI applications",
    description:
      "Internal tools, customer-facing products, and workflow software built on modern stacks. Reactive UIs, realtime backends, and production-grade deploys — shipped with engineers in the loop.",
    tags: ["Next.js", "Convex", "Python", "React Native"],
  },
  {
    id: "MCP-03",
    title: "Custom MCPs & agent skills",
    description:
      "Model Context Protocol servers and tailored agent skills wired to your CRM, ERP, databases, and internal APIs — so your team’s AI tools do real work, not hallucinated busywork.",
    tags: ["MCP servers", "Tool design", "Auth & sandboxing"],
  },
  {
    id: "ENG-04",
    title: "Build, ship, iterate",
    description:
      "From scoped prototype to production. We own the integration surface, observability, and handoff — then stay on for iteration as your business and the AI landscape shift.",
    tags: ["CI/CD", "Monitoring", "Ongoing engineering"],
  },
] as const;

export const MODERN_STACKS = [
  {
    name: "React",
    role: "Reactive UIs",
    detail:
      "Component-driven interfaces that stay in sync with live data. When your backend state changes, the UI updates — no manual refresh, no stale dashboards.",
  },
  {
    name: "React Native",
    role: "Mobile & field teams",
    detail:
      "One engineering surface for iOS and Android when your operators, drivers, or field staff need AI-assisted tools on the go.",
  },
  {
    name: "Next.js",
    role: "Full-stack web",
    detail:
      "Server components, API routes, and edge deploys for customer portals, admin panels, and AI-assisted workflows at scale.",
  },
  {
    name: "TanStack Start",
    role: "Type-safe full-stack",
    detail:
      "End-to-end type safety and modern routing when you want a cohesive full-stack TypeScript app without framework sprawl.",
  },
  {
    name: "Remix",
    role: "Web standards & forms",
    detail:
      "Progressive enhancement and predictable data loading for internal tools where reliability beats novelty.",
  },
  {
    name: "Vue",
    role: "Progressive adoption",
    detail:
      "Incremental integration into existing frontends when you’re not rewriting everything on day one.",
  },
  {
    name: "Svelte",
    role: "Lean interfaces",
    detail:
      "Minimal runtime overhead for focused operator UIs and embedded widgets that need to feel instant.",
  },
  {
    name: "Python",
    role: "Agents & pipelines",
    detail:
      "Data processing, model orchestration, and backend scripts. Native Convex subscriptions for Python when you need reactive backends without a separate cache layer.",
  },
  {
    name: "Rust",
    role: "Performance-critical paths",
    detail:
      "High-throughput services, native tooling bridges, and systems where latency and safety matter — including Convex’s Rust subscription clients for backend automation.",
  },
  {
    name: "Convex",
    role: "Realtime backend",
    detail:
      "A realtime database with queries and mutations that keep every part of your app up to date. Ubiquitous reactivity means fewer cache layers, fewer retry loops, and faster iteration when your AI product’s state is always live.",
  },
] as const;

export const SKILLS_VS_MCPS = {
  skills: {
    label: "Agent skills",
    summary: "Packaged instructions and workflows for a specific agent runtime.",
    points: [
      "Best for repeatable tasks inside one agent context — SOPs, report formats, approval flows.",
      "Lightweight to ship; ideal when the scope is narrow and the data surface is small.",
      "We author skills around your terminology, policies, and edge cases — not generic templates.",
    ],
  },
  mcps: {
    label: "MCP servers",
    summary: "Standardized tool servers any compatible client can call — Cursor, Claude, custom apps.",
    points: [
      "Best when agents need live access to your systems: tickets, inventory, contracts, codebases.",
      "One MCP, many clients — your team isn’t locked into a single chat UI.",
      "We design the tool surface, auth boundaries, and audit trail for production use.",
    ],
  },
  recommendation:
    "Most operating businesses need both: skills for how work should be done, MCPs for what agents can actually touch. We scope which layer solves which problem — so you’re not bolting a chatbot onto a spreadsheet and calling it transformation.",
} as const;

export const MCP_BUILD_LAYERS = [
  {
    id: "LAYER-01",
    title: "Tool surface design",
    description:
      "We define every tool your agents can invoke — list records, create orders, query inventory, run approvals — with strict input schemas and guardrails. No open-ended “do whatever” endpoints.",
  },
  {
    id: "LAYER-02",
    title: "Bridge to your systems",
    description:
      "MCP server plus adapters to your CRM, ERP, warehouse APIs, or internal databases. We handle rate limits, pagination, and error surfaces so agents get useful feedback, not stack traces.",
  },
  {
    id: "LAYER-03",
    title: "Auth, tenancy & sandboxing",
    description:
      "Per-user and per-role credentials, scoped permissions, and audit logs. Agents only see what that operator is allowed to see — critical when AI touches customer or financial data.",
  },
  {
    id: "LAYER-04",
    title: "Deploy & operate",
    description:
      "Self-hosted or cloud deploy, health checks, versioning, and rollback. MCPs are production services, not weekend scripts.",
  },
  {
    id: "LAYER-05",
    title: "Client configuration",
    description:
      "We document and configure your MCP for Cursor, Claude Desktop, Cline, or your own internal agent app — including transport (stdio, SSE), host, and port conventions your IT team can maintain.",
  },
  {
    id: "LAYER-06",
    title: "Test & observe",
    description:
      "Tool-level integration tests, tracing for agent sessions, and dashboards for failure rates. You know when an MCP tool misbehaves before your sales team does.",
  },
] as const;

export const MCP_EXAMPLE_TOOLS = [
  { name: "search_customers", description: "Full-text search over CRM with role-scoped results" },
  { name: "create_service_ticket", description: "Open a ticket with category, priority, and linked account" },
  { name: "get_inventory_levels", description: "Realtime stock by SKU and warehouse" },
  { name: "draft_quote", description: "Generate a quote from catalog rules and approval thresholds" },
  { name: "summarize_account_history", description: "Aggregate recent interactions for handoff briefs" },
] as const;

export const AI_COMPARISON_ROWS = [
  { feature: "Fits your workflow", prompting: "Rarely", saas: "Partially", engineered: "Yes — built around it" },
  { feature: "Uses your live data", prompting: "Copy-paste ad hoc", saas: "Locked in their product", engineered: "Your systems & APIs" },
  { feature: "Ships as your product", prompting: "No", saas: "Their roadmap", engineered: "Yours — we hand off" },
  { feature: "Engineers in the loop", prompting: "You alone", saas: "Their support queue", engineered: "Dedicated team" },
  { feature: "Custom MCPs & skills", prompting: "Not possible", saas: "Generic integrations", engineered: "Tailored to your stack" },
  { feature: "Ongoing iteration", prompting: "Restart prompts", saas: "Wait for vendor", engineered: "Scoped retainers" },
] as const;
