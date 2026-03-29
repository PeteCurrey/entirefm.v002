/**
 * Featured FM Insights for rotation in the mega menu.
 * These are selected based on the current date to keep the menu fresh.
 */

export interface FeaturedInsight {
  title: string;
  description: string;
  href: string;
  image: string;
}

export const FEATURED_INSIGHTS: FeaturedInsight[] = [
  {
    title: "What Is Integrated Facilities Management (IFM)?",
    description: "Learn how consolidating services under an IFM model can drive efficiency and reduce costs.",
    href: "/resources/what-is-integrated-facilities-management",
    image: "/images/fm-insights-hero.jpg"
  },
  {
    title: "Hard FM vs Soft FM: Finding the Balance",
    description: "Understanding the critical differences between technical maintenance and soft services.",
    href: "/resources/hard-fm-vs-soft-fm-vs-specialist-engineering",
    image: "/images/service-ppm.jpg"
  },
  {
    title: "What is Total Facilities Management (TFM)?",
    description: "Exploring the benefits of a single-source outsourcing model for large-scale estates.",
    href: "/resources/what-is-total-facilities-management",
    image: "/images/sector-offices.jpg"
  },
  {
    title: "Electrical EICR Survival Manual",
    description: "Everything property managers need to know about periodic testing and BS 7671.",
    href: "/resources/electrical-eicr-survival-manual",
    image: "/images/service-electrical.png"
  }
];

/**
 * Deterministically selects a featured insight based on the current date.
 * Rotates every 3 days.
 */
export function getFeaturedInsight(): FeaturedInsight {
  const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const interval = 3; // Change every 3 days
  const index = Math.floor(daysSinceEpoch / interval) % FEATURED_INSIGHTS.length;
  return FEATURED_INSIGHTS[index];
}
