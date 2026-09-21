import type { WorkCaseBodyItem, WorkCaseMediaCaption } from "@/lib/workCaseStudies";

const PM = "/work/primal";

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

function still(file: string, alt: string) {
  return { src: `${PM}/${file}`, alt };
}

/** Full landing → forms → legal → mobile site → ads → app appearances → app screens. */
export const PRIMAL_CASE_BODY: WorkCaseBodyItem[] = [
  {
    type: "media-full",
    src: `${PM}/landing-full.png`,
    alt: "PRIMAL marketing site — full landing page",
    caption: wCap(
      "Landing page",
      "We spent time on this — multiple layout and copy passes — until the marketing site felt like one page instead of a stack of sections. Type, color, and the bull mark stay consistent from the hero through pricing and the waitlist, so the brand message and voice don't drop off halfway down.",
      "Section transitions and lazy-loaded stills ease each block in as you scroll, which keeps the page moving without fighting the design. What you see here is the full page; on the site itself, those transitions are part of how it reads.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${PM}/landing-waitlist.png`,
      alt: "PRIMAL waitlist page",
    },
    right: {
      src: `${PM}/landing-have-questions.png`,
      alt: "PRIMAL Have Questions — bug report and support form",
    },
    caption: wCap(
      "Waitlist & have questions",
      "Both pages are Google Form embeds — join the waitlist before launch, or send a bug report or question — so those two intake flows didn't need a custom form stack. Same pattern, two jobs: collect emails, collect support.",
    ),
  },
  {
    type: "media-full",
    src: `${PM}/landing-download.png`,
    alt: "PRIMAL download page — App Store and Google Play",
    caption: wCap(
      "Download",
      "A dedicated download surface keeps the store path clear — jump to the App Store or scan the QR — without crowding that CTA into the waitlist or the main marketing scroll.",
    ),
  },
  {
    type: "media-half",
    left: {
      src: `${PM}/landing-privacy.png`,
      alt: "PRIMAL privacy policy page",
    },
    right: {
      src: `${PM}/landing-terms.png`,
      alt: "PRIMAL terms of service page",
    },
    caption: wCap(
      "Privacy & terms",
      "We went through several versions of Privacy and Terms while building the app — updating the language as features landed so the legal pages stay current and actually pair with what PRIMAL does, instead of drifting into generic boilerplate.",
    ),
  },
  {
    type: "media-triple",
    items: [
      still("mobile-hero.png", "PRIMAL mobile site — hero and App Store CTA"),
      still(
        "mobile-one-list-one-score.png",
        "PRIMAL mobile site — One list. One score. section",
      ),
      still("mobile-today.png", "PRIMAL mobile site — Today section"),
    ],
  },
  {
    type: "media-triple",
    items: [
      still("mobile-features.png", "PRIMAL mobile site — Features section"),
      still(
        "mobile-choose-your-style.png",
        "PRIMAL mobile site — Choose your style",
      ),
      still("mobile-pro-pricing.png", "PRIMAL mobile site — Pro pricing card"),
    ],
  },
  {
    type: "media-triple",
    items: [
      still("mobile-cta.png", "PRIMAL mobile site — Ready to be PRIMAL CTA"),
      still("mobile-nav-menu.png", "PRIMAL mobile site — navigation menu"),
      still(
        "mobile-download.png",
        "PRIMAL mobile site — Download PRIMAL with QR",
      ),
    ],
  },
  {
    type: "media-triple",
    items: [
      still("mobile-privacy.png", "PRIMAL mobile privacy policy"),
      still("mobile-terms.png", "PRIMAL mobile terms of service"),
      still("mobile-cookies.png", "PRIMAL mobile website and cookies page"),
    ],
  },
  {
    type: "media-triple",
    items: [
      still("mobile-waitlist.png", "PRIMAL mobile waitlist form"),
      still(
        "mobile-have-questions.png",
        "PRIMAL mobile Have Questions form",
      ),
    ],
  },
  {
    type: "split",
    heading: "Mobile Optimization",
    body: "We treat the phone site as the same product as the desktop one — not a stripped-down leftover. Type, color, and the bull mark hold at this width: sections stack, the nav becomes a menu, and every page from the hero through waitlist, legal, and Have Questions is designed for a thumb rather than squeezed in after. Someone landing from Instagram or a text gets the same brand and the same path as someone on a laptop.",
    serviceRevealStep: 2,
  },
  {
    type: "media-full",
    src: `${PM}/build-the-man-you-want-to-be-art.png`,
    alt: "Build the Man You Want to Be — PRIMAL ad creative",
    caption: wCap(
      "Ad creative",
      "This is a banner built around a strong, bold line — \"Build the Man You Want to Be\" — designed for brand recognition across Instagram, Twitter, and the rest of the social stack. Coral type on a dark, faceted ground keeps it loud enough to stop a scroll while still matching the PRIMAL brand, so the same voice shows up wherever the campaign runs.",
    ),
  },
  {
    type: "media-triple",
    items: [
      still("ad-choose-your-style.png", "PRIMAL ad — Choose Your Style theme mockups"),
      still("ad-create-better-routines.png", "PRIMAL ad — Create Better Routines habit screens"),
      still("ad-daily-score.png", "PRIMAL ad — daily score hero"),
    ],
    caption: wCap(
      "Ad creative",
      "We constructed and redesigned multiple ad directions before landing on the final results shown here — artwork that carries the same brand voice and design language as the landing page, while also putting the app itself on screen. That overlap is intentional: the ads, the site, and the product all read as one system, so the campaign and the experience stay in harmony instead of feeling like separate pieces.",
    ),
  },
  {
    type: "media-triple",
    items: [
      still("coral-launch-background.png", "PRIMAL coral launch background"),
      still("blue-launch-background.png", "PRIMAL blue launch background"),
      still("purple-launch-background.png", "PRIMAL purple launch background"),
    ],
  },
  {
    type: "media-triple",
    items: [
      still("teal-launch-background.png", "PRIMAL teal launch background"),
      still("pink-launch-background.png", "PRIMAL pink launch background"),
      still("red-launch-background.png", "PRIMAL red launch background"),
    ],
  },
  {
    type: "media-triple",
    items: [
      still("yellow-launch-background.png", "PRIMAL yellow launch background"),
      still("green-launch-background.png", "PRIMAL green launch background"),
    ],
    caption: wCap(
      "App Appearance",
      "These are the app appearances available to Pro users — each accent color fully dressed as a launch screen so the product feels custom, not one-note. We laid them out together so the range is easy to see at a glance, and so the same set can be pulled into social ads when we want to show how personal the app can look.",
    ),
  },
  {
    type: "media-triple",
    rounded: true,
    items: [
      still(
        "app-launch-screen.png",
        "PRIMAL app launch screen — coral background, bull mark, Get Started",
      ),
      still(
        "onboarding-goal-selection.png",
        "PRIMAL onboarding — main goal selection",
      ),
      still(
        "onboarding-calculated-plan.png",
        "PRIMAL onboarding — calculated calorie, protein, training, and hydration plan",
      ),
    ],
    caption: wCap(
      "Launch & onboarding",
      "The app opens on the same coral, low-poly background as the website, with the bull mark, the PRIMAL wordmark, and two options: Get Started, or sign in if you already have an account. The visual language carries over directly from the marketing site, so there's no jarring shift between \"the ad\" and \"the actual app.\"",
      "A nine-step onboarding quiz starts by asking the main goal — lose fat, build muscle, both, study and deep work, general health, better sleep, or reduce stress. At the end of the quiz, the app shows the actual numbers it calculated — calorie target, protein target, training minutes, hydration — each with a one-line explanation of why that number was chosen.",
    ),
  },
  {
    type: "media-triple",
    rounded: true,
    items: [
      still(
        "sign-in-apple-google.png",
        "PRIMAL sign-in — Continue with Apple and Continue with Google",
      ),
      still(
        "google-oauth-consent.png",
        "Google OAuth consent screen for PRIMAL",
      ),
      still(
        "pro-paywall.png",
        "PRIMAL Pro paywall — feature tiles and Monthly vs Annual",
      ),
    ],
    caption: wCap(
      "Sign-in & paywall",
      "We stepped away from a create-your-own-account flow inside the app and leaned on Google and Apple as the sign-in and sign-up providers. That keeps users from forgetting another password, cuts the risk of a password breach on our side, and takes the stress out of getting in — so the path from plan to account stays smooth.",
      "The paywall is a polished piece that still uses the same cohesive design language as the rest of the app, with App Store requirements built into the flow rather than bolted on after the fact.",
    ),
  },
  {
    type: "media-triple",
    rounded: true,
    items: [
      still(
        "first-step-achievement.png",
        "PRIMAL First Step achievement unlock overlay",
      ),
      still(
        "today-tab-daily-score.png",
        "PRIMAL Today tab — circular daily score, stats, and 7-day trend",
      ),
      still(
        "today-habits-remaining.png",
        "PRIMAL Today's habits — Calories, Protein, Hydration, Steps with remaining amounts",
      ),
    ],
    caption: wCap(
      "First achievement, home & today's habits",
      "Award unlocks went through multiple iterations before we landed on the clean overlay shown in the first image — a full-screen badge that celebrates the \"First Step\" without cluttering the home screen underneath.",
      "Home revolves around checking off the habits you've set and pushing the daily score as high as you can. The Today tab centers that score, with streak, habits, done, and remaining underneath so progress is obvious the moment you open the app.",
    ),
  },
  {
    type: "media-triple",
    rounded: true,
    items: [
      still(
        "habits-tab.png",
        "PRIMAL Habits tab — Remaining, Tomorrow's Habits, and Not Today",
      ),
      still(
        "messages-tab.png",
        "PRIMAL Messages tab — empty state and Notifications",
      ),
      still(
        "insights-tab.png",
        "PRIMAL Insights — Smart Insights, score summary, and review",
      ),
    ],
    caption: wCap(
      "Habits, messages & insights",
      "Habits are split into Remaining, Tomorrow's Habits, and Not Today, so a long list doesn't turn into a wall of identical rows. Tomorrow's Habits is editable directly from here — this is the Plan Tomorrow feature from the paywall. The Messages tab starts empty for a new user, with a Notifications entry showing system messages and a prompt to start a conversation from Suggested or the compose button.",
      "Insights opens with \"See my Smart Insights — tap to scan today's habits,\" followed by a Score Summary, a Review section, and Habit Health percentages. Smart Insights runs on-device from actual habit data — it's explicitly not a chatbot or generative AI, just a computed summary of real logs.",
    ),
  },
  {
    type: "media-triple",
    rounded: true,
    items: [
      still(
        "awards-badges.png",
        "PRIMAL Awards — Getting Started and Streak hexagonal badges",
      ),
      still(
        "settings-appearance.png",
        "PRIMAL Settings — Pro upgrade card and appearance color picker",
      ),
      still(
        "settings-permissions.png",
        "PRIMAL Settings — permissions, Apple Health, privacy, and legal",
      ),
    ],
    caption: wCap(
      "Awards & settings",
      "Achievements are grouped into sets — Getting Started Awards, Streak Awards — shown as hexagonal badges, earned ones in full color and unearned ones dimmed with a \"Not earned\" label. Settings opens with a Pro upgrade card showing the same seven-phone theme preview from the marketing site, followed by account info and the appearance picker — System/Dark/Light mode plus all eight accent colors.",
      "Further down: App Permissions (Notifications, Apple Health), General (Body Measurements, Sync Data), Privacy & Safety, and Legal & Support. Apple Health syncing means PRIMAL can pull in real step and activity data instead of relying only on manual logging.",
    ),
  },
  {
    type: "media-triple",
    rounded: true,
    items: [
      still(
        "profile-privacy.png",
        "PRIMAL profile — stats, friend privacy toggles, sign out, and delete account",
      ),
      still(
        "today-month-calendar.png",
        "PRIMAL Today tab month calendar with streak stats",
      ),
      still(
        "new-habit-editor.png",
        "PRIMAL New habit — category, icon, color, target slider, and repeat days",
      ),
    ],
    caption: wCap(
      "Profile, calendar & new habit",
      "The profile sheet shows Active Habits, Today's Score, and Lifetime Score, plus two privacy toggles: Friends Leaderboard, and Show Habits to Friends. Sign Out and Delete Account sit clearly separated at the bottom, with Delete Account marked as a distinct danger zone. Switching to Month view on the Today tab shows a full calendar grid instead of just the current day, so someone can jump back and check any specific past day.",
      "Creating a habit means naming it, tagging it to a category (Training, Morning Sunlight, Nutrition, and more), picking an icon and color from a full grid, setting a numeric or time-based target with a slider, and choosing which days it repeats on. Every part of a habit is fully editable, which is what makes the tracker flexible enough for something as specific as \"Cold Shower, 3 min, 9:30 AM every day\" instead of just a generic checklist.",
    ),
  },
];
