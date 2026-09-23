import type { SiteContent } from "@/lib/types";

/* ============================================================================
   ★ EDIT THIS FILE TO UPDATE YOUR SITE ★

   Everything visitors see — your name, bio, stats, services, videos,
   testimonials — lives here. You do NOT need to touch any other file to
   change the content.

   To swap a video:  copy the ID from its YouTube URL.
     https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                     ^^^^^^^^^^^  <- this is the youtubeId
   Lines marked  // TODO  are sample placeholders you should replace.
============================================================================ */

export const content: SiteContent = {
  profile: {
    name: "potato bear",
    tagline: "Talking Head Video Specialist",
    email: "debjitdas842@gmail.com",
    calendlyUrl: "https://calendly.com/debjitdas842/30min", // booking widget in the Contact section

    intro:
      "I turn raw talking-head footage into sharp, watchable videos that keep viewers locked in and coming back. From interviews and YouTube videos to course lessons and personal-brand channels.",
    bio: [
      "I genuinely care about helping business owners grow. My focus is getting your message in front of the exact people you want as customers, so the right audience finds you, trusts you, and wants to work with you.",
      "You already know your business better than anyone. My job is to make sure the people who are a perfect fit for what you offer actually see it, connect with it, and take the next step with you.",
    ],
    highlights: [
      "Focused on reaching the customers who matter to your growth",
      "Content that builds real trust with the right audience",
      "Turning your expertise into videos people want to watch",
      "A partner invested in your results, not just the finished video",
    ],
    // Add social links here to show them in the footer, e.g.:
    // socials: [{ label: "YouTube", href: "https://youtube.com/@you" }],
    socials: [],
  },

  showreel: {
    heading: "Showreel",
    subtext: "My most-watched edit — 229K views and counting.",
    youtubeId: "ofC4OeNjDx8", // The AI Architects — top video (229K views)
  },

  // Big headline numbers shown in the band under the hero.
  stats: [
    { value: "425K+", label: "Views generated" },
    { value: "229K", label: "Top single video" },
    { value: "3+ yrs", label: "Editing experience" },
    { value: "End-to-end", label: "Cut · captions · b-roll · color" },
  ],

  // Numbered list of what you do (ZOU-style services section).
  services: [
    {
      title: "Talking-head editing",
      description:
        "Interviews, YouTube videos, course lessons and personal-brand channels — cut for clarity and clean pacing.",
    },
    {
      title: "Tight pacing & cleanup",
      description:
        "Cutting out the ums and dead air so every second earns its place and the viewer never drifts.",
    },
    {
      title: "Captions, b-roll & callouts",
      description:
        "Dynamic captions, supporting b-roll and on-screen callouts that boost retention and comprehension.",
    },
    {
      title: "Sound & color",
      description:
        "Sound cleanup and color grading included — your footage looks and sounds professional, every time.",
    },
    {
      title: "Fast, predictable turnaround",
      description:
        "Edited in Premiere Pro, DaVinci Resolve and After Effects with a reliable, on-time delivery process.",
    },
  ],

  // Real content categories (no "All" here — the Selected work section adds a
  // "Featured" tab first and an "All" tab last automatically).
  categories: ["AI & Automation", "Growth", "Email marketing"],

  projects: [
    // Top 5 most-viewed videos from The AI Architects (Tom Crawshaw) channel.
    // `featured: true` shows a video in the default "Featured" tab.
    {
      id: "p1",
      title: "Seriously, Please Watch This Before You Start Learning n8n",
      category: "AI & Automation",
      youtubeId: "ofC4OeNjDx8",
      views: 229000,
      featured: true,
      description:
        "The channel's #1 video at 229K views — a tight long-form tutorial edit with clean pacing and seamless screen-recording integration.",
    },
    {
      id: "p2",
      title: "Don't Build AI Automations Before You Watch THIS Video",
      category: "AI & Automation",
      youtubeId: "HMo8ixMd4ts",
      views: 62000,
      featured: true,
      description:
        "62K-view talking-head edit blending direct-to-camera delivery with b-roll and on-screen callouts.",
    },
    {
      id: "p3",
      title: "OpenClaw Use Cases That Are Actually INSANE",
      category: "AI & Automation",
      youtubeId: "yIKxXRks4Jo",
      views: 56000,
      description:
        "A 29-minute deep dive kept punchy with chapters, live demos, and motion text. 56K views.",
    },
    {
      id: "p4",
      title: "How I Use OpenClaw for 95% Cheaper (Feels Illegal)",
      category: "AI & Automation",
      youtubeId: "rVAzoNf-w-M",
      views: 42000,
      description:
        "42K-view tutorial edited for clarity with crisp screen captures and clean lower-thirds.",
    },
    {
      id: "p5",
      title: "How I Got 15,500 Twitter Followers in 4 Months Using AI",
      category: "Growth",
      youtubeId: "oTa2RccMkJU",
      views: 36000,
      description:
        "36K-view growth case study with dynamic captions and retention-focused pacing.",
    },

    // Email marketing edits (Klaviyo tutorials & strategy videos).
    {
      id: "p6",
      title:
        "Klaviyo Tutorial: How To Create A High Converting Pop-Up Form in 20 min",
      category: "Email marketing",
      youtubeId: "XwC8CZspGIM",
      description:
        "Step-by-step Klaviyo pop-up tutorial edited with clean screen-recording walkthroughs and clear on-screen callouts.",
    },
    {
      id: "p7",
      title: "Copy This 8-Figure Email Strategy, It Will Blow Up Your Business",
      category: "Email marketing",
      youtubeId: "UHQglfAvy54",
      featured: true,
      description:
        "Punchy strategy breakdown edited for retention with tight pacing, captions, and supporting b-roll.",
    },
    {
      id: "p8",
      title: "How to Create a Killer Site Abandonment Flow in Klaviyo",
      category: "Email marketing",
      youtubeId: "jM_hbnHylgk",
      featured: true,
      description:
        "Flow-building walkthrough edited to keep the steps easy to follow with crisp screen captures and lower-thirds.",
    },
    {
      id: "p9",
      title: "How to Build a Welcome Flow That Prints Money (FREE Template)",
      category: "Email marketing",
      youtubeId: "6-qVz3B7r5I",
      description:
        "Template-driven tutorial edited with clean transitions, motion text, and clear visual guidance.",
    },
    {
      id: "p10",
      title: "The $200M Klaviyo Email Flows Playbook for 2026",
      category: "Email marketing",
      youtubeId: "wEsBmoCV6OA",
      description:
        "Long-form playbook kept punchy with chapters, callouts, and retention-focused pacing.",
    },
  ],

  // Real screenshot reviews — shown instead of the written testimonials below.
  // Drop the image files into  public/reviews/  with these exact names.
  reviewImages: [
    { src: "/reviews/review-1.jpg", alt: "Client feedback from Archit Mittal" },
    { src: "/reviews/review-2.png", alt: "Client feedback from Jack Cole" },
    { src: "/reviews/review-3.png", alt: "5.0/5 client testimonial from Jack Cole" },
  ],

  testimonials: [
    // Written fallbacks (only used if reviewImages above is empty/removed).
    {
      quote:
        "potato bear made my talking-head videos feel effortless. The pacing is tight and my audience retention jumped.",
      author: "Alex Rivera",
      role: "YouTube Creator",
    },
    {
      quote:
        "Reliable, fast, and genuinely creative. I hand over the raw footage and get back something better than I imagined.",
      author: "Priya Nair",
      role: "Founder, SaaS Startup",
    },
    {
      quote:
        "Best editor I've worked with for interview content. Clean cuts, great captions, zero hand-holding needed.",
      author: "Marcus Lee",
      role: "Podcast Host",
    },
  ],
};
