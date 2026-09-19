import { PRIMAL_CASE_BODY } from "@/lib/primalCaseBody";

/**
 * Inner work pages: mega title, Services, intro, media, Strategy / Design / Results.
 */
export type WorkCaseMediaSlot = "full" | "half" | null;

export type WorkCaseStill = { src: string; alt: string };

/** Left-column title + one or two body paragraphs (Services-style layout). */
export type WorkCaseMediaCaption = {
  title: string;
  paragraphs: readonly [string, string] | readonly [string];
};

export type WorkCaseBodyItem =
  | ({ type: "media-full" } & WorkCaseStill & { caption?: WorkCaseMediaCaption })
  | {
      type: "media-half";
      left: WorkCaseStill;
      right: WorkCaseStill;
      /** Narrative under the pair—what we designed, built, or configured. */
      caption?: WorkCaseMediaCaption;
      /** Tighter phone stills (natural height, not full-column portraits). */
      compact?: boolean;
    }
  | {
      type: "media-triple";
      items: readonly [WorkCaseStill, WorkCaseStill, WorkCaseStill];
      caption?: WorkCaseMediaCaption;
    }
  | {
      type: "split";
      heading: string;
      body: string;
      /** Defaults to 2 when omitted (same rhythm as Strategy / Design / Results). */
      serviceRevealStep?: 1 | 2;
    };

export type WorkCaseStudyData = {
  megaLine1: string;
  megaLine2: string;
  servicesLine: string;
  intro: string;
  strategy: string;
  design: string;
  results: string;
  mediaAfter: [
    WorkCaseMediaSlot,
    WorkCaseMediaSlot,
    WorkCaseMediaSlot,
    WorkCaseMediaSlot,
  ];
  /**
   * Optional hero still shown after Services + intro (never above the mega title).
   * Prefer folding into `caseBody` when you need a caption beside the still.
   */
  heroImage?: string;
  /**
   * Ordered narrative strip (full-width stills, two-up pairs, or split headings).
   * When present, renders after the intro and replaces the four interleaved `mediaAfter` rows
   * (Strategy / Design / Results stay as the closing essay blocks).
   */
  caseBody?: WorkCaseBodyItem[];
};

const GA = "/work/getaced";
const TH = "/work/tathor";
const NL = "/work/nuerlo";

function wCap(
  title: string,
  p1: string,
  p2?: string,
): WorkCaseMediaCaption {
  return {
    title,
    paragraphs: p2 ? [p1, p2] : [p1],
  };
}

const TATHOR_CASE_BODY: WorkCaseBodyItem[] = [
  {
    type: "media-full",
    src: `${TH}/hero.png`,
    alt: "Tathor homepage hero — chrome wordmark and competitor search field",
    caption: wCap(
      "Hero",
      "The homepage opens with the Tathor wordmark rendered in a brushed metal, chrome-style finish against a black background — it's the one place on the site where the logotype gets this treatment, so it reads as an entrance rather than just a header. Below it sits a single search field: enter a website, business name, or service, and Tathor returns competitors, features, and opportunities. No secondary hero copy competing for attention — just the mark and the one thing the product does.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${TH}/product-suite.png`,
      alt: "Tathor Product Suite — three cards for core tool, Complete Profiles, and API",
    },
    right: {
      src: `${TH}/product-suite-continued.png`,
      alt: "Tathor agents processing and export checklist",
    },
    caption: wCap(
      "Product Suite",
      "Three cards lay out what Tathor actually is: the core tool, Complete Profiles (exported reports), and the API. Each card uses a faint wireframe-style illustration instead of a photo or icon set, which keeps the page feeling technical and restrained rather than like a typical SaaS landing page. Every card links straight to what it's describing — pricing, an example report, or the API docs.",
      "After a search, Tathor Agents process in parallel with live status and time estimates — a real look at the product working, not a staged result. When processing finishes, exports list business data, social links, and email contacts, each marked as exported.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${TH}/build-with-api.png`,
      alt: "Tathor Build with API — live JavaScript, Python, and cURL code samples",
    },
    right: {
      src: `${TH}/latest-news.png`,
      alt: "Tathor Latest News — press-style entries with halftone imagery",
    },
    caption: wCap(
      "Build with API & Latest News",
      "The API section shows a live code sample — JavaScript, Python, or cURL — hitting the analyze endpoint directly, with the request and response shape visible. Showing the real request instead of describing the API in prose is aimed at developers who want to see the shape of the data before reading anything else.",
      "News entries use a grainy, halftone photo treatment instead of standard stock photography, which keeps the tone closer to a magazine or press piece than a typical blog roll. Each entry has a date, category, headline, and a one-line summary — kept short enough to scan the whole list quickly.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${TH}/pricing-plans.png`,
      alt: "Tathor Pricing Plans — Basic, Business, and Agency tiers",
    },
    right: {
      src: `${TH}/compare-plans.png`,
      alt: "Tathor Compare Plans — feature-by-feature plan comparison table",
    },
    caption: wCap(
      "Pricing & Compare Plans",
      "Three tiers — Basic, Business, and Agency — laid out as cards with the Business tier marked \"Recommended.\" Each plan lists what's included underneath it, and a yearly billing toggle sits below the cards for anyone comparing monthly versus annual cost.",
      "For anyone who wants more than the card summary, the Compare Plans table breaks every feature out row by row — database access, number of competitor analyses per month, AI scraping tier, data collection depth, PDF exports — so the difference between Basic, Business, and Agency is stated exactly, not implied.",
    ),
  },
  {
    type: "media-full",
    src: `${TH}/dashboard.png`,
    alt: "Tathor dashboard overview — recent research and competitive metrics",
    caption: wCap(
      "Dashboard",
      "Logging in lands on an overview screen — \"Welcome back, [name]\" — with tabs for Overview, Intelligence, Projects, and Blind Spots. The main panel shows the most recent research entry and a Competitive Overview table: businesses tracked, active analyses, and plan usage. Layout and spacing were built to feel closer to an internal analytics tool than a typical consumer dashboard — dense, quiet, and built around the numbers rather than around illustration or color.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${TH}/integrations-api.png`,
      alt: "Tathor Integrations — API key, base URL, auth header, and plan limits",
    },
    right: {
      src: `${TH}/billing.png`,
      alt: "Tathor Profile Billing — plan upgrades and usage analytics",
    },
    caption: wCap(
      "Integrations & Billing",
      "The Integrations page handles API access directly inside the dashboard — generating and viewing an API key, the base URL, and the exact authorization header format, plus a plans-and-limits table showing rate limits by tier. Nothing here is abstracted behind a separate developer portal; a user on a paid plan can get their key and see their limits without leaving the app.",
      "Billing sits under Profile, with the three plans shown again as upgrade cards and the current plan marked as active. Below that, a small analytics section shows research projects created and total days tracked, with a usage chart underneath. Stripe handles the billing itself — plan changes, invoicing, and payment method updates all run through it, so the dashboard only needs to reflect the current state, not manage the transaction.",
    ),
  },
  {
    type: "media-full",
    src: `${TH}/stripe-payment-wall.png`,
    alt: "Tathor Stripe checkout — Business plan summary and payment form",
    caption: wCap(
      "Payment Wall",
      "Checkout is a split screen: plan and price on the left in black — Subscribe to TATHOR BUSINESS at $14.99/month — and Stripe's own payment form on the right, with Apple Pay, Link, and card entry. This is Stripe's hosted checkout, not a custom-built form, so less code to maintain and a payment flow people may already recognize from other products.",
    ),
  },
  {
    type: "split",
    heading: "Backend & AI",
    body: "The free tier doesn't call out to a third-party model. We built our own AI engine for it, hosted on Railway, so Basic-plan analysis runs on infrastructure we control end to end. Paid plans — Business and Agency — route through OpenAI, giving those tiers the more advanced scraping and reasoning the pricing table promises. Firebase handles both the database and authentication, including Google sign-in, so a user's account, saved research, and analysis history all live in one place. The site is split across two domains: tathor.com is the marketing site, and app.tathor.com is the authenticated product — dashboard, integrations, billing, all of it. Keeping them separate means the marketing pages stay fast and public, while the actual product sits behind its own domain and its own auth.",
    serviceRevealStep: 2,
  },
];

const NUERLO_CASE_BODY: WorkCaseBodyItem[] = [
  {
    type: "media-full",
    src: `${NL}/hero.png`,
    alt: "Nuerlo homepage hero — AI course marketplace headline and Start Now CTA",
    caption: wCap(
      "Hero",
      "The hero sits on a dark purple gradient background with a badge above the headline — \"#1 AI Course Marketplace\" — followed by a large two-line statement: \"The AI Revolution Won't Wait. Neither Should You.\" One button, one line of supporting copy underneath it (\"Start Now. Earn High.\"), and a small App Store badge with a live student count. The gradient is the only real color on the page at this point — everything else is white text on near-black.",
    ),
  },
  {
    type: "media-full",
    src: `${NL}/master-the-ai-era.png`,
    alt: "Nuerlo Master the AI Era — Gold Rush comparison and AI feature cards",
    caption: wCap(
      "Master the AI Era",
      "This section opens with a side-by-side comparison: 1849, the California Gold Rush, next to 2025, the AI Gold Rush — same structure, same card style, different era. It's a direct analogy, not a metaphor buried in copy: the cards literally sit next to each other so the comparison reads at a glance. Below that, three feature cards — AI Chatbots, AI Receptionists, AI Websites — each with a simple line icon and a couple of sentences on what it does.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${NL}/turn-skills-into-income.png`,
      alt: "Nuerlo Turn Skills Into Income — Learn at Your Pace feature block",
    },
    right: {
      src: `${NL}/built-in-community.png`,
      alt: "Nuerlo Built-in Community feature block",
    },
    caption: wCap(
      "Turn Skills Into Income",
      "A large centered headline, \"Turn Skills Into Income,\" followed by a photo of people working together and a \"Learn at Your Pace\" text block next to it. The photo isn't stock-generic corporate — it's people at a table with laptops and notebooks, closer to a study group than an office. The copy underneath explains that the platform has no fixed schedule: start, stop, and pick back up whenever.",
      "The same layout pattern continues with \"Built-in Community\" — another photo of people working together, paired with a short paragraph about the platform's community being available for questions and support at any stage, from beginner to experienced.",
    ),
  },
  {
    type: "media-full",
    src: `${NL}/faq.png`,
    alt: "Nuerlo FAQ accordion — common questions before signup",
    caption: wCap(
      "FAQ",
      "A plain accordion list, six questions, expand-on-click. Questions cover getting started, prior experience needed, support, refunds, access duration, and how often courses get updated — the kind of things someone would actually want answered before paying.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${NL}/blog.png`,
      alt: "Nuerlo blog — AI Insights & Updates hero and featured cards",
    },
    right: {
      src: `${NL}/blog-continued.jpg`,
      alt: "Nuerlo blog post grid with pagination",
    },
    caption: wCap(
      "Blog",
      "The blog page opens with \"AI Insights & Updates\" and a search bar, followed by two large featured cards — one showing usage analytics on a dashboard, one showing people working around a table. This top section functions as a visual introduction to the blog before the actual post grid starts.",
      "Below that, the actual post grid: two posts per row, each with a large image, headline, publish date, and a \"Read more\" link. Numbered pagination sits at the bottom for browsing older posts.",
    ),
  },
  {
    type: "media-full",
    src: `${NL}/create-account.png`,
    alt: "Nuerlo create account — split purple auth wall with Google sign-in",
    caption: wCap(
      "Sign Up / Sign In",
      "The account creation screen splits the page: a wavy purple background on the left with the logo, and a white card on the right holding the actual form — email, name, password, plus a \"Continue with Google\" option. A small lock icon and one line of text under the form reminds people not to share their login. It's a standard split-panel layout, but the wave shape in the background keeps it from looking like a generic auth template.",
    ),
  },
  {
    type: "media-full",
    src: `${NL}/dashboard-overview.jpg`,
    alt: "Nuerlo dashboard overview — Continue Learning and Recommended courses",
    caption: wCap(
      "Dashboard Home",
      "Logging in lands on \"Welcome, [name]\" with a Continue Learning card showing the current course and progress percentage, followed by a Recommended for You grid of other courses with ratings and enrollment counts. The layout is dark, dense, and course-thumbnail-driven — closer to a media platform than a typical SaaS dashboard.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${NL}/my-programs.png`,
      alt: "Nuerlo My Programs — enrolled courses with progress filters",
    },
    right: {
      src: `${NL}/payment-plans.png`,
      alt: "Nuerlo Payment Plans — Free, Pro, and Enterprise tiers",
    },
    caption: wCap(
      "My Programs & Billing",
      "The My Programs page lists every course a user is enrolled in as a card with a thumbnail, lesson count, and progress bar, with filter tabs at the top (All, Not Started, In Progress, Completed) so the list can be narrowed down without hunting through everything.",
      "Payment settings show three plans stacked vertically — Free, Pro at $29.99/mo, and Enterprise at $99.99/mo — each with its own feature checklist and the current plan marked clearly. Enterprise includes things like custom AI models and white-label solutions, so the tiers scale from \"just learning\" up to \"running this for a team.\"",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${NL}/help.png`,
      alt: "Nuerlo Help — searchable common questions",
    },
    right: {
      src: `${NL}/profile.png`,
      alt: "Nuerlo Profile — personal account details and tabs",
    },
    caption: wCap(
      "Help & Profile",
      "The Help page is a searchable list of common questions, each with a one-line description underneath — how to navigate the dashboard, enroll in a course, track progress, manage account settings, update payment, or cancel a subscription. It's set up so someone can self-serve most account questions without needing to contact support directly.",
      "The Profile page holds personal details — name, email, password, contact number, job title, location, and a website field — split into tabs (Personal, Account, Preferences, Advanced) so the page doesn't turn into one long form.",
    ),
  },
  {
    type: "media-full",
    src: `${NL}/stripe-checkout.png`,
    alt: "Nuerlo Stripe checkout — purple plan summary and Stripe Link payment",
    caption: wCap(
      "Stripe Payment Wall",
      "Checkout is a split screen: plan and price on the left in Nuerlo's purple, and Stripe's own payment form on the right, using Stripe's Link for saved payment details. This is Stripe's checkout experience, not a custom-built one — which means less code to maintain and a payment flow users may already recognize from other products.",
    ),
  },
];

const GETACED_CASE_BODY: WorkCaseBodyItem[] = [
  {
    type: "media-full",
    src: `${GA}/hero-landing-page.png`,
    alt: "GETACED marketing hero — headline, mark, and primary call to action",
    caption: wCap(
      "Marketing hero",
      "The hero uses a new logo and mascot with large, bold type that's easy to read at a glance. The layout keeps one clear message and one button, and the purple is used carefully so the page feels calm instead of overwhelming.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${GA}/section-landing-page.png`,
      alt: "GETACED landing page — primary story section",
    },
    right: {
      src: `${GA}/section-2-landing-page.png`,
      alt: "GETACED landing page — supporting section and value props",
    },
    caption: wCap(
      "Story & proof bands",
      "The light and dark sections sit side by side so the sign-in explanation and the technical explanation don't compete for attention. Both use the same type and spacing as the rest of the site, and the layout still stacks correctly on mobile.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/login-register-landing-page.png`,
    alt: "GETACED login and registration — account entry with calm, trustworthy UI",
    caption: wCap(
      "Auth & trust",
      "The sign-in page uses the same headline and mascot as the homepage, so the login screen doesn't feel disconnected from the rest of the site. Form labels and error messages match what the backend actually checks, so users don't hit confusing dead ends.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${GA}/pricing-landing-page.png`,
      alt: "GETACED pricing section — plan comparison",
    },
    right: {
      src: `${GA}/pricing-2-landing-page.png`,
      alt: "GETACED pricing — continued tiers and detail",
    },
    caption: wCap(
      "Plans & commercial story",
      "Pricing shows two plans side by side so they're easy to compare without scrolling. Each plan lists what's included and how billing works.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/reviews-landing-page.png`,
    alt: "GETACED social proof and reviews on the marketing site",
    caption: wCap(
      "Social proof",
      "Reviews are shown as cards with a colored accent bar and a short quote. The colors are the only bright element on the page, so the quotes themselves stand out.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/faq-landing-page.png`,
    alt: "GETACED FAQ — objections and support paths before signup",
    caption: wCap(
      "FAQ & objections",
      "FAQ answers are kept short and specific, so questions get resolved before signup instead of after.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/final-cta-landing-page.png`,
    alt: "GETACED closing call-to-action on the landing page",
    caption: wCap(
      "Closing conversion",
      "The closing section repeats the main promise once more, with one button, so there's no ambiguity about what to do next.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/footer-landing-page.png`,
    alt: "GETACED site footer — navigation, trust, and legal entry points",
    caption: wCap(
      "Footer & infrastructure",
      "The footer includes navigation, social links, and legal pages. Domain, DNS, and Cloudflare are set up so the marketing site and the app run on the same secure, cached infrastructure.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${GA}/privacy-landing-page.png`,
      alt: "GETACED privacy policy — transparent data practices",
    },
    right: {
      src: `${GA}/terms-landing-page.png`,
      alt: "GETACED terms of service",
    },
    caption: wCap(
      "Legal & expectations",
      "Privacy and Terms are written in plain language and formatted like the rest of the site, so they're actually readable before someone connects an account or enters a card.",
    ),
  },
  {
    type: "split",
    heading: "Product dashboard",
    body: "Inside the app we carried the same brand flow into dense student workflows: home, customization, onboarding, billing, and history. UI and UX stay quiet so deadlines and status read first—states, empty screens, and paywalls are designed, not improvised.",
    serviceRevealStep: 2,
  },
  {
    type: "media-full",
    src: `${GA}/home-dashboard-page.png`,
    alt: "GETACED dashboard home — assignments and priorities at a glance",
    caption: wCap(
      "Home & overview",
      "The dashboard uses the same type and spacing as the marketing site, so it doesn't feel like a different product once someone logs in.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/customization-dashboard-page.png`,
    alt: "GETACED customization — tailoring the experience to how each student works",
    caption: wCap(
      "Preferences & control",
      "Common settings are at the top, and more specific options are available further down, so the page stays simple for most people but still flexible.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/onboarding-popup-dashboard-page.png`,
    alt: "GETACED onboarding modal — guided setup without blocking the product",
    caption: wCap(
      "First-run onboarding",
      "Setup progress is saved, so the prompt doesn't show again once someone has already completed it.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/payment-page-dashboard-page.png`,
    alt: "GETACED in-app payment surface aligned with Creem checkout",
    caption: wCap(
      "Paywall & checkout handoff",
      "The paywall clearly states what unlocks, then hands off to Creem's checkout. Loading, success, and failure states are all designed, so it's always clear whether a payment went through.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/history-dashboard-page.png`,
    alt: "GETACED history — past activity and receipts for peace of mind",
    caption: wCap(
      "Activity & receipts",
      "Each row shows the file name, result, date, and status, so it's easy to check what happened with a specific file or payment.",
    ),
  },
  {
    type: "split",
    heading: "Creem.io & monetization",
    body: "We configured Creem end to end: products and pricing, branded checkout banner and logo, success and cancel redirects, webhooks, and API keys scoped for production and test. That ties the Next.js frontend and backend to real entitlements—subscriptions renew, cancellations reconcile, and the app never trusts the client for paid access.",
    serviceRevealStep: 2,
  },
  {
    type: "media-full",
    src: `${GA}/creem-payment-setup.png`,
    alt: "GETACED Creem.io dashboard — product, branding, and payment configuration",
    caption: wCap(
      "Products & checkout brand",
      "Checkout uses the same banner, logo, and colors as the rest of the site, so the payment step still feels like part of GETACED.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/creem-2-payment-setup.png`,
    alt: "GETACED Creem.io — redirects, domains, and webhook endpoints",
    caption: wCap(
      "Redirects & webhooks",
      "After checkout, users land on a specific page depending on success or cancellation. Webhooks are verified and processed securely, and subscription status is always synced from Creem to the database, not the other way around.",
    ),
  },
  {
    type: "media-full",
    src: `${GA}/creem-3-payment-setup.png`,
    alt: "GETACED Creem.io — API keys, environments, and integration hardening",
    caption: wCap(
      "Keys, environments, security",
      "Test and live API keys are kept separate, so testing never affects real payments.",
    ),
  },
];

export const WORK_CASE_STUDIES: Record<string, WorkCaseStudyData> = {
  tathor: {
    megaLine1: "TATHOR",
    megaLine2: "From signals to decisions",
    servicesLine: "Web, Web app, Logo design, Brand design, API, Software",
    intro:
      "Tathor is a business intelligence and competitor analysis tool. We built the brand and product from the ground up in Figma — the logo, the marketing site, the in-app dashboard, and the API — then wired billing through Stripe. Below is the build in order: the landing experience first, then the product suite pages, the dashboard, and the API and billing setup underneath it.",
    strategy:
      "The brand and every page were designed first in Figma, then built out — wordmark, type, spacing, and the wireframe-style illustration system used across the product suite cards. Stripe was set up end to end for billing, so plan changes and payment state are handled by Stripe directly rather than tracked separately in the app. On the backend, we built a custom AI engine for the free tier, hosted on Railway, and connected OpenAI for the paid tiers — so the product isn't just a wrapper around one model, it's tiered by what each plan actually needs.",
    design:
      "The whole product — marketing site, dashboard, docs — stays in the same black-and-white, high-contrast palette, with almost no color used anywhere except where it's functional (status indicators, plan highlights). That restraint is deliberate: for a tool that tracks other companies' data, the dashboard needed to read as precise and professional rather than playful.",
    results:
      "Tathor runs as a full product: a marketing site on its own domain, an authenticated app on a separate subdomain, a documented REST API, Firebase for data and Google auth, a custom AI engine on Railway for the free tier, OpenAI for paid tiers, and Stripe-based billing — all sharing one visual system from the homepage down to the API docs.",
    mediaAfter: [null, null, null, null],
    caseBody: TATHOR_CASE_BODY,
  },
  nuerlo: {
    megaLine1: "NUERLO",
    megaLine2: "AI courses, one marketplace",
    servicesLine: "Web, Web app, Logo design, Brand design",
    intro:
      "Nuerlo is an AI course marketplace, built around one idea: AI skills are the new advantage, and most people don't have a fast way into them. We built the brand, the marketing site, the in-app learning dashboard, and Stripe billing, all from scratch.",
    strategy:
      "The brand, marketing site, dashboard, and course structure were all designed and built for Nuerlo from the ground up. Stripe was set up for subscriptions, using Stripe's own hosted checkout rather than building a custom payment form.",
    design:
      "The site leans into a dark, purple-accented palette throughout — marketing pages, dashboard, and course cards all share the same tone, so the transition from browsing courses to actually learning inside the dashboard doesn't feel like switching products.",
    results:
      "Nuerlo runs as a full course marketplace: a marketing site, a blog, an authenticated learning dashboard with progress tracking, a help center, and Stripe-based subscriptions across three pricing tiers.",
    mediaAfter: [null, null, null, null],
    caseBody: NUERLO_CASE_BODY,
  },
  primal: {
    megaLine1: "PRIMAL",
    megaLine2: "Track daily habits",
    servicesLine: "Web, Mobile app, Logo design, Brand design, Social Media, Software",
    intro:
      "PRIMAL is a daily habit tracker: one daily score, habit tracking across categories like sleep, training, and nutrition, friend leaderboards, in-app messaging, on-device Smart Insights, achievements, and a Free/Pro tier. Brand and product design led by EZEVIO; social growth (Instagram, TikTok) run in parallel. Below is the work in the order a person actually experiences these surfaces: the landing page first, then the Figma design work behind it, then Instagram, then TikTok, then the app itself from onboarding through settings.",
    strategy:
      "The brand, app, and marketing site were all designed together in Figma first — the icon system, the theme colors, the ad templates — so the same visual language carries from a TikTok video, to the landing page, to the paywall, to the app itself without a break anywhere in between.",
    design:
      "Every part of the product uses the same coral-and-dark palette and the same bull mark, but the app itself goes further: the accent color a user picks in Settings changes the icon, the paywall, and key screens together, using the full theme system built out in Figma rather than swapping one color value.",
    results:
      "PRIMAL launched with a real marketing site, a nine-step onboarding flow that produces a personalized plan, a habit tracker with friends, leaderboards, in-app messaging, on-device Smart Insights, and 51 achievements, a Free/Pro paywall with specific limits at each tier, and a growing social presence — 3,935 Instagram followers and 676 on TikTok — built on a recurring character-driven content format rather than app screenshots alone.",
    mediaAfter: [null, null, null, null],
    caseBody: PRIMAL_CASE_BODY,
  },
  getaced: {
    megaLine1: "GETACED",
    megaLine2: "Assignments without the scramble",
    servicesLine: "Web, Web app, Logo design, Brand design, API, Software",
    intro:
      "GETACED is a full end-to-end SaaS for assignment and test prep—from logo and brand system through the marketing site, authenticated product, and Creem-powered billing. Below we walk it in ship order: the landing experience first, then the in-app dashboard, then how we wired Creem (products, branding, redirects, webhooks, and APIs) with tight security and infrastructure you can operate in production.",
    strategy:
      "We set up the logo, brand direction, and consistent design across every page — hero, pricing, reviews, FAQ, and legal. Domain and DNS were configured cleanly, with Cloudflare handling caching and security so the site stays fast even under traffic spikes.",
    design:
      "The interface balances a friendly tone with speed — large type where it matters, and dashboard layouts that stay readable on a phone. Onboarding, customization, and the paywall all use the same spacing and type, so they feel like one product.",
    results:
      "The final product runs on Next.js and React, with authenticated APIs and a real database on the backend. Creem handles subscriptions and one-time payments, with all entitlements verified server-side. Keys are kept separate by environment, redirects are explicit, and Cloudflare and standard security headers protect both checkout and account data.",
    mediaAfter: [null, null, null, null],
    caseBody: GETACED_CASE_BODY,
  },
};

export function getWorkCaseStudy(slug: string): WorkCaseStudyData | undefined {
  return WORK_CASE_STUDIES[slug];
}
