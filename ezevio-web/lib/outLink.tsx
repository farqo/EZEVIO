import type { ReactNode } from "react";

/** External product / platform link — same pattern as services copy. */
export function Out({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

/**
 * Longer / more specific labels first.
 * Project brands are included for body copy only (callers should not run this on titles).
 */
const TECH_LINKS: readonly { match: string; href: string }[] = [
  { match: "theprimalapp.com", href: "https://www.theprimalapp.com" },
  { match: "nuerlo.com", href: "https://nuerlo.com" },
  { match: "tathor.com", href: "https://tathor.com" },
  { match: "getaced.io", href: "https://getaced.io" },
  { match: "Next.js", href: "https://nextjs.org" },
  { match: "OpenAI", href: "https://platform.openai.com" },
  { match: "Anthropic", href: "https://www.anthropic.com" },
  { match: "Cloudflare", href: "https://www.cloudflare.com" },
  { match: "Supabase", href: "https://supabase.com" },
  { match: "Firebase", href: "https://firebase.google.com" },
  { match: "MongoDB", href: "https://www.mongodb.com" },
  { match: "Railway", href: "https://railway.app" },
  { match: "Instagram", href: "https://www.instagram.com" },
  { match: "TikTok", href: "https://www.tiktok.com" },
  { match: "Twitter", href: "https://twitter.com" },
  { match: "Figma", href: "https://www.figma.com" },
  { match: "Stripe", href: "https://stripe.com" },
  { match: "Creem", href: "https://www.creem.io" },
  { match: "React", href: "https://react.dev" },
  { match: "xAI", href: "https://x.ai" },
  { match: "GETACED", href: "https://getaced.io" },
  { match: "Getaced", href: "https://getaced.io" },
  { match: "PRIMAL", href: "https://www.theprimalapp.com" },
  { match: "Primal", href: "https://www.theprimalapp.com" },
  { match: "NUERLO", href: "https://nuerlo.com" },
  { match: "Nuerlo", href: "https://nuerlo.com" },
  { match: "TATHOR", href: "https://tathor.com" },
  { match: "Tathor", href: "https://tathor.com" },
];

const TECH_SPLIT = new RegExp(
  `(${TECH_LINKS.map(({ match }) =>
    match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  ).join("|")})`,
  "g",
);

const HREF_BY_LABEL = new Map(TECH_LINKS.map((t) => [t.match, t.href]));

/**
 * Turn known product / project names in plain body copy into outbound links.
 * Do not use on headings or caption titles.
 */
export function linkifyTech(text: string): ReactNode {
  const parts = text.split(TECH_SPLIT);
  if (parts.length === 1) return text;

  return parts.map((part, i) => {
    const href = HREF_BY_LABEL.get(part);
    if (!href) return part;
    return (
      <Out key={`${part}-${i}`} href={href}>
        {part}
      </Out>
    );
  });
}
