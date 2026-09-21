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
  /** Must match one of the categories below (besides "All"). */
  category: string;
  /** YouTube video ID only. */
  youtubeId: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface SiteContent {
  profile: Profile;
  showreel: Showreel;
  categories: string[];
  projects: Project[];
  testimonials: Testimonial[];
}
