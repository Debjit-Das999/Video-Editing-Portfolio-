// Shared types for the site content. Keeps data/content.ts type-safe.

export interface Profile {
  name: string;
  tagline: string;
  email: string;
  /** Calendly scheduling link, embedded in the Contact section. */
  calendlyUrl: string;
  /** One-sentence value prop shown in the hero. */
  intro: string;
  /** Longer bio paragraphs for the About section. */
  bio: string[];
  /** Small credentials / facts list shown beside the bio. */
  highlights: string[];
  /** Optional social links — leave empty to hide. */
  socials?: { label: string; href: string }[];
}

export interface Showreel {
  heading: string;
  subtext: string;
  /** YouTube video ID only (the part after v=). */
  youtubeId: string;
}

export interface Project {
  id: string;
  title: string;
  /** Must match one of the categories below. */
  category: string;
  /** YouTube video ID only. */
  youtubeId: string;
  description: string;
  /** Total view count — used for the Impact counter/graph and "most viewed". */
  views?: number;
  /** Show in the "Featured" tab (the default tab in Selected work). */
  featured?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

/** A big headline number shown in the Stats band. */
export interface Stat {
  value: string;
  label: string;
}

/** A numbered service shown in the Services list. */
export interface Service {
  title: string;
  description: string;
}

/** A real screenshot of client feedback (Slack/DM/etc.) for the Reviews section. */
export interface ReviewImage {
  /** Path under /public, e.g. "/reviews/review-1.png". */
  src: string;
  alt: string;
}

export interface SiteContent {
  profile: Profile;
  showreel: Showreel;
  /** Big-number stats band under the hero. */
  stats: Stat[];
  /** Numbered list of what you do. */
  services: Service[];
  categories: string[];
  projects: Project[];
  testimonials: Testimonial[];
  /** Screenshot reviews. When present, they replace the written testimonials. */
  reviewImages?: ReviewImage[];
}
