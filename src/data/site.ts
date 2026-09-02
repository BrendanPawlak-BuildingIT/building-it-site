/**
 * Single source of truth for site copy and contact details.
 * Update business info here — components read from this file.
 */

export const SITE = {
  name: 'Building IT',
  shortName: 'BIT',
  tagline: 'Managed websites for local service businesses near Kankakee, Illinois.',
  url: 'https://buildmyit.com',
  phoneDisplay: '815-573-4787',
  phoneHref: 'tel:8155734787',
  email: 'brendanpawlak@buildmyit.com',
  location: 'Kankakee, IL',
  serviceArea: 'Serving within ~50 miles',
  hours: 'Mon–Sat, 8:00 AM–6:00 PM',
  price: 200,
  priceDisplay: '$200',
  /** Shared "last updated" date shown on the Privacy Policy and Terms of Service pages. */
  legalUpdated: 'September 2, 2026',
} as const;

/**
 * Prepay offer: pay this many months of the managed plan upfront and get this
 * % off a website build project, capped at the upfront amount itself (e.g. 3
 * months upfront = $600, so up to $600 comes off the build project — not an
 * unlimited 25%, and not a discount on the monthly plan itself).
 */
export const PREPAY_MONTHS = 3;
export const PREPAY_DISCOUNT_PERCENT = 25;
export const PREPAY_UPFRONT_TOTAL = SITE.price * PREPAY_MONTHS;

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/#solution', label: 'What We Do' },
  { href: '/#included', label: "What's Included" },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
];

/** Quick Links column in the footer — the main nav plus a final link to the contact form. */
export const FOOTER_NAV_LINKS: NavLink[] = [
  ...NAV_LINKS,
  { href: '/#start', label: 'Get Started' },
];

export const LEGAL_LINKS: NavLink[] = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export interface SectionDot {
  href: string;
  label: string;
}

export const SECTION_DOTS: SectionDot[] = [
  { href: '#top', label: 'Hero' },
  { href: '#problem', label: 'The Problem' },
  { href: '#solution', label: 'The Solution' },
  { href: '#included', label: "What's Included" },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#start', label: 'Get Started' },
];

export const INDUSTRIES: string[] = [
  'Roofing',
  'HVAC',
  'Plumbing',
  'Electrical',
  'Landscaping',
  'Excavation',
  'Concrete',
  'General Contracting',
];

export interface ProblemItem {
  title: string;
  description: string;
}

export const PROBLEMS: ProblemItem[] = [
  {
    title: 'Outdated websites',
    description: "The site was built years ago and hasn't kept up with the business.",
  },
  {
    title: 'Broken forms',
    description: 'Estimate requests stop showing up in the inbox and nobody notices for weeks.',
  },
  {
    title: 'Hosting problems',
    description: "The site goes down or the domain lapses, and there's no one to call.",
  },
  {
    title: 'Changes take forever',
    description: 'A simple update to hours or services turns into a weeks-long back-and-forth.',
  },
  {
    title: 'Too many vendors',
    description: 'One company built it, another hosts it, and nobody owns the whole thing.',
  },
  {
    title: 'No time to maintain it',
    description: "Between jobs and crews, there's no time left to babysit a website.",
  },
];

export interface ServiceItem {
  title: string;
  description: string;
  /** True for the one-time build phase; the rest are the ongoing $200/month plan. */
  oneTime?: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'Website Build',
    description:
      'A new website or a rebuild of your existing one, scoped and built around your business. Priced individually — see Pricing below.',
    oneTime: true,
  },
  {
    title: 'Hosting',
    description:
      'Hosting and deployment handled for you. No accounts to manage, no bills to track down.',
  },
  {
    title: 'Maintenance',
    description:
      'Ongoing technical maintenance and troubleshooting when something needs attention.',
  },
  {
    title: 'Updates',
    description:
      'Content and information updated as your business changes — new services, hours, or photos.',
  },
  {
    title: 'Forms',
    description: 'Lead and estimate forms set up, tested, and kept working so requests reach you.',
  },
  {
    title: 'Technical Management',
    description: 'Domains, DNS, SSL, and deployment handled in the background by Building IT.',
  },
];

export interface StepItem {
  title: string;
  description: string;
}

export const STEPS: StepItem[] = [
  {
    title: 'Tell Us About Your Business',
    description:
      'Share your business information, services, photos, branding, and existing website, if you have one.',
  },
  {
    title: 'We Build Your Website',
    description:
      'Building IT creates the website around your actual business, not generic placeholder content.',
  },
  {
    title: 'Review & Launch',
    description: 'You review the site, we make changes, and the website goes live.',
  },
  {
    title: 'We Keep Managing It',
    description:
      'Building IT continues handling hosting, maintenance, updates, and technical work going forward.',
  },
];

export const PRICE_FEATURES: string[] = [
  'Hosting',
  'Maintenance',
  'Updates',
  'Technical management',
  'Forms',
  'Mobile optimization',
  'Local support',
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'What does $200/month include?',
    answer:
      'Hosting, maintenance, updates, technical management, forms, and mobile optimization — everything it takes to keep your website online and running smoothly, in one monthly price.',
  },
  {
    question: 'How much does a new website cost?',
    answer:
      'It depends on your business — new builds and rebuilds are scoped and quoted individually based on what you need. Once your site is live, hosting and management is $200/month.',
  },
  {
    question: 'Is there a discount for paying upfront?',
    answer: `Yes. If you pay your first ${PREPAY_MONTHS} months of hosting upfront ($${PREPAY_UPFRONT_TOTAL}), you get ${PREPAY_DISCOUNT_PERCENT}% off your website build — up to $${PREPAY_UPFRONT_TOTAL} off.`,
  },
  {
    question: 'Do I need to manage the website myself?',
    answer: "No. Building IT handles the technical management so you don't have to.",
  },
  {
    question: 'Can you update the website for me?',
    answer:
      "Yes. You can request reasonable updates as your business changes, and we'll take care of them.",
  },
  {
    question: 'Do you handle hosting?',
    answer: 'Yes. Hosting and deployment are managed as part of the service.',
  },
  {
    question: 'Can you use my existing domain?',
    answer: 'Yes. Existing domains can generally be connected to your new website.',
  },
  {
    question: 'Can you rebuild my existing website?',
    answer:
      'Yes. Rebuilds are scoped and quoted just like a new build, using your existing business information, branding, services, and photos.',
  },
  {
    question: 'Do I need to know anything about websites?',
    answer:
      "No. This service is specifically designed for business owners who don't want to deal with the technical side of a website.",
  },
  {
    question: 'What kinds of businesses do you work with?',
    answer: 'Primarily local blue-collar and service-based businesses around the Kankakee area.',
  },
];
