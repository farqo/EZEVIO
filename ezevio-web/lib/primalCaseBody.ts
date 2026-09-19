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

/** Landing → Figma → Instagram → TikTok → app onboarding-to-settings. */
export const PRIMAL_CASE_BODY: WorkCaseBodyItem[] = [
  {
    type: "media-full",
    src: `${PM}/Screenshot_2026-09-19_at_5.20.57_PM.png`,
    alt: "PRIMAL landing hero — coral low-poly background, bull mark, and App Store button",
    caption: wCap(
      "Hero",
      "The hero uses a coral, low-poly background with the PRIMAL bull mark and a two-line headline: \"The version of you you've been putting off.\" One line of supporting copy underneath explains the app in a sentence, followed by a single App Store button. The color is loud here on purpose — this is the one screen on the site meant to grab attention before everything else settles into darker, calmer tones.",
    ),
  },
  {
    type: "media-full",
    src: `${PM}/Screenshot_2026-09-19_at_5.21.33_PM.jpg`,
    alt: "PRIMAL landing — five phone screens showing score, friends, Today, habits, and new habit",
    caption: wCap(
      "App showcase",
      "Five phone screens are shown side by side, each showing a different real screen from the app: the weekly score chart, the friends leaderboard, the Today score circle with a log-progress sheet open, the full habits list, and the new-habit creation screen. Showing five real screens at once, instead of one polished hero shot, is meant to communicate the app has actual depth to it, not just a single feature.",
    ),
  },
  {
    type: "media-full",
    src: `${PM}/Screenshot_2026-09-19_at_5.22.02_PM.jpg`,
    alt: "PRIMAL landing — Today, Habits, and Insights phones with captions",
    caption: wCap(
      "Today / Habits / Insights",
      "Three phones are shown with a line of caption text under each: the Today screen with the streak and leaderboard, the Habits screen sorted into Remaining and Completed, and the Insights screen with daily and weekly score charts. This is the \"five tabs, one daily score\" section — it's walking through what each part of the app actually does, one screen at a time, instead of describing the app in the abstract.",
    ),
  },
  {
    type: "media-full",
    src: `${PM}/Screenshot_2026-09-19_at_5.22.31_PM.png`,
    alt: "PRIMAL pricing — Free and Pro cards on coral background",
    caption: wCap(
      "Pricing",
      "Two plans, Free and Pro, shown as dark cards on the coral background. Free lists ten active habits, limited friends and messaging, and 7-day history. Pro, at $4.99/month, raises those limits and adds Plan Tomorrow, unlimited Smart Insights scans, and custom accent colors. Both cards use the same layout, so the comparison is easy to scan without needing a separate table.",
    ),
  },
  {
    type: "media-half",
    left: still(
      "Screenshot_2026-09-19_at_5.22.46_PM.png",
      "PRIMAL closing CTA — Ready to be PRIMAL coral card",
    ),
    right: still(
      "Screenshot_2026-09-19_at_5.22.52_PM.png",
      "PRIMAL footer — Product, App, Social, Legal columns and EZEVIO credit",
    ),
    caption: wCap(
      "Closing CTA & Footer",
      "A single coral card closes out the page: \"Join 240+ people already on PRIMAL,\" followed by \"Ready to be PRIMAL?\" and one button. It repeats the same promise from the hero, once, right before the page ends.",
      "Four columns — Product, App, Social, Legal — plus the App Store button repeated one more time. Social links go to Instagram, TikTok, YouTube, Threads, and X. The footer also credits EZEVIO as the studio that built the site.",
    ),
  },
  {
    type: "media-half",
    left: still(
      "Screenshot_2026-09-19_at_5.23.05_PM.png",
      "PRIMAL waitlist — updating PRIMAL headline and Google form",
    ),
    right: still(
      "Screenshot_2026-09-19_at_5.23.23_PM.png",
      "PRIMAL download page — App Store button and QR code",
    ),
    caption: wCap(
      "Waitlist & Download",
      "Instead of hiding the fact that the app isn't fully live yet, the site says so directly: \"We're updating PRIMAL... we're patching bugs and tightening the build before the App Store link goes live.\" Underneath is a plain waitlist form — email, optional name — so anyone who wants in gets notified the moment it opens.",
      "A dedicated download page pairs the App Store button with a QR code, so someone browsing on a laptop can scan straight into the signup flow on their phone instead of having to remember a link.",
    ),
  },
  {
    type: "media-half",
    left: still(
      "Screenshot_2026-09-19_at_5.23.34_PM.png",
      "PRIMAL Privacy Policy — account, identity, and habit data",
    ),
    right: still(
      "Screenshot_2026-09-19_at_5.23.43_PM.png",
      "PRIMAL Terms of Service — eligibility and feature list",
    ),
    caption: wCap(
      "Privacy & Terms",
      "The privacy policy is a real, detailed document — not a placeholder page. It breaks down exactly what's collected: account and identity data (name, email, sign-in provider), and habit and progress data (the habits someone creates, their logs). Email/password accounts require verification before social features like friends and messaging unlock.",
      "The terms cover eligibility (13+) and spell out exactly what the service includes — daily scores, streaks, achievements, Smart Insights, history limits by plan, Plan Tomorrow, custom accent colors, CSV export. Writing out the full feature list here, not just in marketing copy, means the terms actually match what the product does.",
    ),
  },
  {
    type: "media-half",
    left: still(
      "Screenshot_2026-09-19_at_5.25.34_PM.png",
      "Figma — PRIMAL app icon and eight-theme color system",
    ),
    right: still(
      "Screenshot_2026-09-19_at_5.26.33_PM.png",
      "Figma — Build the Man You Want to Be ad creative",
    ),
    caption: wCap(
      "Theme system & ad creative",
      "This is the working file behind PRIMAL's theming system: every accent color (blue, purple, teal, red, pink, yellow, green, orange) built out as a full matching set — app icon, settings card, paywall panel, launch background — so that when someone picks a color in the app, everything shifts together instead of just one element changing.",
      "A single ad creative: bold coral type on a dark, faceted background, paired with the app icon and both App Store and Google Play badges. This is one of the pieces used directly in social promotion, not just a design exercise.",
    ),
  },
  {
    type: "media-half",
    left: still(
      "Screenshot_2026-09-19_at_5.27.03_PM.png",
      "Figma — Choose Your Style and Create Better Routines ad slideshow",
    ),
    right: still(
      "Screenshot_2026-09-19_at_5.28.32_PM.png",
      "Figma — eight accent-color phone mockups in a grid",
    ),
    caption: wCap(
      "Ad slideshow & theme mockups",
      "Two promotional slide templates — \"Choose Your Style\" and \"Create Better Routines\" — each showing a row of real app screens under a short headline. These are built to be swapped in as a set (a slideshow), which is also how they show up later in the Instagram content grid.",
      "All eight accent-color themes rendered on the same phone screen side by side, so the full range of what a user can choose is visible in one image at once — useful both for testing the color system and for using directly in marketing.",
    ),
  },
  {
    type: "media-half",
    left: still(
      "Screenshot_2026-09-19_at_5.30.26_PM.png",
      "Instagram @theprimalapp profile — bio, highlights, and follower count",
    ),
    right: still(
      "Screenshot_2026-09-19_at_5.30.35_PM.png",
      "Instagram link hub — website, waitlist, support, and TikTok",
    ),
    caption: wCap(
      "Profile & link hub",
      "@theprimalapp sits at 3,935 followers on 67 posts, with three pinned highlight reels — Creatives, Be Primal, Themes — sitting right under the bio. The bio itself is a single line: \"The app that helps people build discipline through daily habits.\"",
      "The profile's link-in-bio opens to four destinations: the PRIMAL website, the waitlist form directly, a support link for questions and bug reports, and TikTok. Routing straight to the waitlist from Instagram, rather than just the homepage, cuts out a step for anyone who's already decided they want in.",
    ),
  },
  {
    type: "media-full",
    src: `${PM}/Screenshot_2026-09-19_at_5.30.43_PM.png`,
    alt: "Instagram grid — Build the Man You Want to Be pinned post",
    caption: wCap(
      "Pinned posts",
      "The top of the grid is pinned: the \"Build the Man You Want to Be\" ad sits first, so it's the first thing anyone new to the profile sees.",
    ),
  },
  {
    type: "media-half",
    left: still(
      "Screenshot_2026-09-19_at_5.30.50_PM.jpg",
      "Instagram content grid — goat-mask habit slideshows",
    ),
    right: still(
      "Screenshot_2026-09-19_at_5.30.59_PM.jpg",
      "Instagram content — goat-mask posts with habit callouts",
    ),
    caption: wCap(
      "Content grid",
      "Most of the grid is a recurring slideshow format: an anime-style goat-mask character in different real-life settings, paired with a direct callout line — \"If you hide your opinions, seek approval, or overthink everything you say... these 5 habits will help you stop,\" \"You're not tired. You're leaking energy through these 5 habits,\" \"You're afraid of being judged... here are 5 habits to stop caring.\" Each post names a specific, relatable problem before offering habits as the fix, which is a different hook than posting app screenshots directly — it's built to stop someone mid-scroll before they know it's an app ad at all.",
    ),
  },
  {
    type: "media-full",
    src: `${PM}/Screenshot_2026-09-19_at_5.31.11_PM.jpg`,
    alt: "TikTok @theprimalapp profile and mascot-driven video grid",
    caption: wCap(
      "Profile & content",
      "@theprimalapp on TikTok sits at 676 followers and 7,758 total likes, running the same mascot-driven format as Instagram — videos like \"In Japan, laziness is considered a disease and people treat it with these 7 methods,\" \"You apologize for things that aren't your fault,\" and \"You take everything personally... here are 5 habits to let it go.\" Using the same character and hook style across both platforms means someone who follows on one recognizes the account immediately on the other.",
    ),
  },
  {
    type: "media-triple",
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
