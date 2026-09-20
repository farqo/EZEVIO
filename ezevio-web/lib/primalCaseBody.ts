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

/** Full landing → ads → app appearances → app screens. */
export const PRIMAL_CASE_BODY: WorkCaseBodyItem[] = [
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
      still("group-63.png", "PRIMAL theme mockups — Group 63"),
      still("group-70.png", "PRIMAL theme mockups — Group 70"),
      still("group-71.png", "PRIMAL theme mockups — Group 71"),
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
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.32.20.png",
        "PRIMAL app launch screen — coral background, bull mark, Get Started",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.32.37.png",
        "PRIMAL onboarding — main goal selection",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.32.48.png",
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
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.32.52.png",
        "PRIMAL sign-in — Continue with Apple and Continue with Google",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.33.45.png",
        "Google OAuth consent screen for PRIMAL",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.34.06.png",
        "PRIMAL Pro paywall — feature tiles and Monthly vs Annual",
      ),
    ],
    caption: wCap(
      "Sign-in & paywall",
      "\"Almost there. Save your plan and start your streak.\" Two sign-in options, Apple and Google, with a line underneath clarifying \"Nothing is shared without your permission.\" Putting sign-in after the plan is built, not before, means someone has already invested a few minutes and seen a concrete result before being asked to create an account. The Google OAuth screen shows exactly what PRIMAL requests: name, profile picture, and email, with Privacy Policy and Terms of Service links on the consent screen itself.",
      "PRIMAL Pro is laid out as six feature tiles — full history access, plan tomorrow's habits, custom app appearance, higher habit limit, more friends, higher message limit — each with a one-line explanation, followed by Monthly and Annual pricing options. Every claim on this screen is a specific number (50 habits vs. 10, 500 messages vs. 50), not a vague \"unlock more.\"",
    ),
  },
  {
    type: "media-triple",
    rounded: true,
    items: [
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.34.13.png",
        "PRIMAL First Step achievement unlock overlay",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.34.18.png",
        "PRIMAL Today tab — circular daily score, stats, and 7-day trend",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.34.23.png",
        "PRIMAL Today's habits — Calories, Protein, Hydration, Steps with remaining amounts",
      ),
    ],
    caption: wCap(
      "First achievement, home & today's habits",
      "The very first thing a new user unlocks is the \"First Step\" award, for creating their first habit. It appears as a full-screen badge unlock overlaying the home screen. Giving a reward within the first minute, for the smallest possible action, is what turns \"creating a habit\" into something that feels like progress instead of setup. The Today tab then centers on a large circular score (0–100), with streak, total habits, done, and remaining shown as four stat tiles underneath, and a 7-day trend line below that.",
      "Each habit — Calories, Protein, Hydration, Steps — is shown with its target and exactly how much is left (\"0 / 2800 cal · 2800 cal left\"), with a quick-add button next to each one. Showing the remaining amount, not just the target, means logging progress doesn't require doing math first.",
    ),
  },
  {
    type: "media-triple",
    rounded: true,
    items: [
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.34.27.png",
        "PRIMAL Habits tab — Remaining, Tomorrow's Habits, and Not Today",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.34.31.png",
        "PRIMAL Messages tab — empty state and Notifications",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.34.34.png",
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
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.34.39.png",
        "PRIMAL Awards — Getting Started and Streak hexagonal badges",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.34.47.png",
        "PRIMAL Settings — Pro upgrade card and appearance color picker",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.34.52.png",
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
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.34.59.png",
        "PRIMAL profile — stats, friend privacy toggles, sign out, and delete account",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.35.10.png",
        "PRIMAL Today tab month calendar with streak stats",
      ),
      still(
        "Simulator_Screenshot_-_iPhone_17_-_2026-09-19_at_17.35.20.png",
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
