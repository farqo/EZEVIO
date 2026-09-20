import type { ReactNode } from "react";
import { Out } from "@/lib/outLink";

/** Structural / editorial reference: studiodumbar.com. Swap contact details for your own. */

export type ServiceSection = {
  heading: string;
  body: ReactNode;
  cta?: { href: string; label: string };
};

export const SERVICE_SECTIONS: ServiceSection[] = [
  {
    heading: "Our services",
    body: (
      <>
        We build SaaS products end to end. Landing pages, signup and product flows,
        dashboards, and the integrations a product needs.
        <br />
        <br />
        We&apos;ve built marketing sites with waitlists. We&apos;ve also built complete
        products from accounts, billing, and authenticated app UI. We agree on scope,
        timeline, and price before development starts.
      </>
    ),
  },
  {
    heading: "Frontend",
    body: (
      <>
        We pay close attention to the frontend. Every screen, every state, every small
        interaction is something we look at closely, not just the main flow. This applies
        across the whole product, from the landing page to the dashboard someone sees after
        logging in, so the experience feels like one product instead of a few different ones
        stitched together.
        <br />
        <br />
        This includes how the product looks on a phone. We design and build for mobile as a
        real part of the product, not an afterthought handled by making things smaller.
        <br />
        <br />
        Brand color, type, and spacing stay consistent everywhere, so the marketing site and
        the product itself feel like they were made by the same team.
      </>
    ),
  },
  {
    heading: "Backend",
    body: (
      <>
        We usually start data and auth on <Out href="https://supabase.com">Supabase</Out> or{" "}
        <Out href="https://firebase.google.com">Firebase</Out>. Both let us get a working
        backend running quickly, and the project stays under your own account from the
        start. If the product later needs more than these can handle — more traffic, or
        specific compliance requirements — we move the parts that need it to something like{" "}
        <Out href="https://www.mongodb.com">MongoDB</Out> or{" "}
        <Out href="https://www.cloudflare.com">Cloudflare</Out>, depending on what the
        situation actually calls for.
      </>
    ),
  },
  {
    heading: "Payment setup",
    body: (
      <>
        We set up checkout, subscriptions, and payouts.{" "}
        <Out href="https://stripe.com">Stripe</Out> and{" "}
        <Out href="https://www.creem.io">Creem</Out> are what we use most, and we bring in
        other providers when the business model needs it.
        <br />
        <br />
        This includes test keys, live keys, webhooks, and receipts, so the whole flow works
        correctly before it&apos;s live.
      </>
    ),
  },
  {
    heading: "Logo design",
    body: (
      <>
        If logo design is part of the project, you get a mark, a wordmark, and vector
        files, along with a few basic lockups (different arrangements for different uses).
        You also get a short explanation of the thinking behind the design choices.
      </>
    ),
  },
  {
    heading: "Branding",
    body: (
      <>
        We think carefully about how the product feels visually — how dense the layout is,
        how much motion is used, and how the hierarchy of information is set up.
        <br />
        <br />
        A dashboard shows these decisions clearly, because it&apos;s used repeatedly and
        for longer periods than a marketing page, so we pay close attention to getting this
        right.
        <br />
        <br />
        If you&apos;re renaming the product or changing its visual identity, we also check
        things like domain availability, social handles, and how the name performs in
        search, before finalizing anything.
      </>
    ),
  },
  {
    heading: "Social Media",
    body: (
      <>
        We create and manage social media accounts for the product. This includes starting
        an account from scratch if one doesn&apos;t exist yet. Posts and visuals follow the
        same brand voice used across the app and marketing site, so the product feels
        consistent no matter where someone finds it.
      </>
    ),
  },
  {
    heading: "API setup",
    body: (
      <>
        We build REST APIs with webhooks, rotatable authentication, versioning, and clear
        error messages. This makes the API stable and documented, so partners and
        background jobs aren&apos;t depending on something only one person understands.
        <br />
        <br />
        For AI, we use whichever model fits —{" "}
        <Out href="https://platform.openai.com">OpenAI</Out>,{" "}
        <Out href="https://www.anthropic.com">Anthropic</Out>,{" "}
        <Out href="https://x.ai">xAI</Out>, or others — based on speed, cost, and
        reasoning needs. This covers summarization, classification, routing, assistants,
        and batch jobs.
      </>
    ),
  },
  {
    heading: "UI/UX Design",
    body: (
      <>
        Before we build anything, we map out the structure — flows, wireframes, how the
        screens connect. That&apos;s the blueprint. Engineering starts once that&apos;s
        settled, so we&apos;re not rebuilding things mid-project because the structure
        wasn&apos;t worked out first.
        <br />
        <br />
        For dashboards, that means thinking through empty states, permission edge cases,
        and situations that only show up with real use — most of the actual complexity is
        in forms and tables, not decoration.
        <br />
        <br />
        Pixel-level design comes once something needs sign-off. Until then, the wireframes
        carry the structure.
        <br />
        <br />
        We test flows closely so the experience holds up, visually and functionally,
        across the whole product.
      </>
    ),
    cta: { href: "/work", label: "See our work" },
  },
];

export const ABOUT_MEGA_TITLE_LINE1 = "Care";
export const ABOUT_MEGA_TITLE_LINE2 = "in the craft";

export const ABOUT_SECTIONS: { heading: string; body: ReactNode }[] = [
  {
    heading: "Small but ambitious",
    body: (
      <>
        EZEVIO is a small studio. The same people handle scope, design, and engineering on
        every project, so work doesn&apos;t move between separate teams.
        <br />
        <br />
        This includes the parts that are easy to overlook — authentication edge cases,
        billing bugs, the issues that tend to surface right before launch. These get the
        same attention as the visible parts of the product, like the homepage.
      </>
    ),
  },
  {
    heading: "What we fix",
    body: (
      <>
        We fix spacing, copy, dead states, and slow-loading pages. We also look for edge
        cases — the kind of problems that only become visible once the more obvious ones
        are already fixed.
        <br />
        <br />
        We don&apos;t ship broken UI just because a deadline is close. We clear console
        warnings and errors before handing a project over. If something isn&apos;t working
        correctly, we keep fixing it rather than leaving it as is.
      </>
    ),
  },
  {
    heading: "Who we work with",
    body: (
      <>
        There&apos;s no single type of client we work with. Startups and small teams are
        often a good fit — they tend to push back on decisions in useful ways, and they
        need something they can actually ship.
        <br />
        <br />
        Projects go worse when there&apos;s no clear definition of what &quot;finished&quot;
        means. Without that, time gets spent without the project actually moving forward.
      </>
    ),
  },
  {
    heading: "Outside the desk",
    body: (
      <>
        EZEVIO is founded and run by{" "}
        <a
          href="https://www.instagram.com/moe.alhabib/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mahmoud Alhabib
        </a>
        .
        <br />
        <br />
        Three years in brand design — logo, website, dashboard, mobile app UI and UX —
        shape how we approach the overall identity on a project.
      </>
    ),
  },
];

/** Work index: titles + routes for `/work` and `/work/[slug]`. */
export const WORK_TILES: {
  href: string;
  title: string;
  /** Line under the work-index card. Defaults to `title` when omitted. */
  caption?: string;
  /** Art for `/work` index tile (same frame as former gray placeholder). */
  cardImage: string;
  /** Optional mark centered on the card (e.g. logo on gradient). */
  cardOverlay?: string;
  cardOverlayLarge?: boolean;
}[] = [
  {
    href: "/work/primal",
    title: "PRIMAL",
    caption:
      "PRIMAL — (Web, Mobile app, Logo design, Brand design, Social Media, Software)",
    cardImage: "/project-work-card-1.svg",
    cardOverlay: "/work/primal/logo.png",
    cardOverlayLarge: true,
  },
  {
    href: "/work/getaced",
    title: "GETACED",
    caption: "GETACED — (Web, Web app, Logo design, Brand design, API, Software)",
    cardImage: "/project-work-card-2.svg",
    cardOverlay: "/work/getaced/logo.svg",
  },
  {
    href: "/work/tathor",
    title: "TATHOR",
    caption: "TATHOR — (Web, Web app, Logo design, Brand design, API, Software)",
    cardImage: "/project-work-card-3.svg",
    cardOverlay: "/work/tathor/logo.svg",
  },
  {
    href: "/work/nuerlo",
    title: "NUERLO",
    caption: "NUERLO — (Web, Web app, Logo design, Brand design)",
    cardImage: "/project-work-card-4.svg",
    cardOverlay: "/work/nuerlo/logo.svg",
  },
];

/** Resolve a work tile for `/work/[slug]` metadata and case pages. */
export function getWorkTileBySlug(slug: string) {
  return WORK_TILES.find((t) => t.href === `/work/${slug}`);
}

/** Other work tiles for a case page, excluding the project currently open. */
export function getMoreWorkTiles(currentHref: string, count = 3) {
  return WORK_TILES.filter((t) => t.href !== currentHref).slice(0, count);
}
