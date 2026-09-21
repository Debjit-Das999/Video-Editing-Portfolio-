import type { SiteContent } from "@/lib/types";

/* ============================================================================
   ★ EDIT THIS FILE TO UPDATE YOUR SITE ★

   Everything visitors see — your name, bio, videos, testimonials — lives here.
   You do NOT need to touch any other file to change the content.

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
      "I turn raw talking-head footage into sharp, watchable videos that keep viewers locked in and coming back.", // TODO: tweak wording
    bio: [
      // TODO: replace with your real story
      "I'm a freelance video editor specializing in talking-head content — interviews, YouTube videos, course lessons, and personal-brand channels. My job is to make you sound clear, look great, and never lose the viewer.",
      "From cutting out the ums and dead air to clean pacing, captions, b-roll, and color, I handle the edit end to end so you can stay focused on showing up on camera.",
    ],
    highlights: [
      // TODO: replace with your real numbers / skills
      "5+ years editing talking-head video",
      "Fast, predictable turnaround",
      "Premiere Pro · DaVinci Resolve · After Effects",
      "Captions, b-roll, sound cleanup & color included",
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

  // The first category should stay "All". Add or rename the rest to fit your work.
  categories: ["All", "AI & Automation", "Growth"],

  projects: [
    // Top 5 most-viewed videos from The AI Architects (Tom Crawshaw) channel.
    {
      id: "p1",
      title: "Seriously, Please Watch This Before You Start Learning n8n",
      category: "AI & Automation",
      youtubeId: "ofC4OeNjDx8",
      description:
        "The channel's #1 video at 229K views — a tight long-form tutorial edit with clean pacing and seamless screen-recording integration.",
    },
    {
      id: "p2",
      title: "Don't Build AI Automations Before You Watch THIS Video",
      category: "AI & Automation",
      youtubeId: "HMo8ixMd4ts",
      description:
        "62K-view talking-head edit blending direct-to-camera delivery with b-roll and on-screen callouts.",
    },
    {
      id: "p3",
      title: "OpenClaw Use Cases That Are Actually INSANE",
      category: "AI & Automation",
      youtubeId: "yIKxXRks4Jo",
      description:
        "A 29-minute deep dive kept punchy with chapters, live demos, and motion text. 56K views.",
    },
    {
      id: "p4",
      title: "How I Use OpenClaw for 95% Cheaper (Feels Illegal)",
      category: "AI & Automation",
      youtubeId: "rVAzoNf-w-M",
      description:
        "42K-view tutorial edited for clarity with crisp screen captures and clean lower-thirds.",
    },
    {
      id: "p5",
      title: "How I Got 15,500 Twitter Followers in 4 Months Using AI",
      category: "Growth",
      youtubeId: "oTa2RccMkJU",
      description:
        "36K-view growth case study with dynamic captions and retention-focused pacing.",
    },
  ],

  testimonials: [
    // TODO: replace with real client quotes
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
