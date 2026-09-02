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
    description: 'A simple update to hours or services takes weeks of back-and-forth emails.',
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
    description: 'A new website, or a rebuild of your current one. Priced based on what you need.',
    oneTime: true,
  },
  {
    title: 'Hosting',
    description: 'We host your website. No accounts to manage, no bills to track down.',
  },
  {
    title: 'Maintenance',
    description: 'We fix problems when something breaks.',
  },
  {
    title: 'Updates',
    description: 'We update your site when your business changes — new services, hours, or photos.',
  },
  {
    title: 'Forms',
    description: 'We set up and test your contact and estimate forms so requests reach you.',
  },
  {
    title: 'Technical Management',
    description: 'We handle your domain, DNS, and SSL in the background.',
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
    description: 'We build a real website for your business. No generic templates.',
  },
  {
    title: 'Review & Launch',
    description: 'You review the site, we make changes, and the website goes live.',
  },
  {
    title: 'We Keep Managing It',
    description: 'We keep handling hosting, maintenance, updates, and technical work.',
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
      'Hosting, maintenance, updates, technical management, forms, and mobile optimization. All for one monthly price.',
  },
  {
    question: 'How much does a new website cost?',
    answer:
      'It depends on what you need. We look at your business and give you a price before we start. After that, hosting and management is $200/month.',
  },
  {
    question: 'Is there a discount for paying upfront?',
    answer: `Yes. Pay your first ${PREPAY_MONTHS} months of hosting upfront ($${PREPAY_UPFRONT_TOTAL}) and get ${PREPAY_DISCOUNT_PERCENT}% off your website build — up to $${PREPAY_UPFRONT_TOTAL} off.`,
  },
  {
    question: 'Do I need to manage the website myself?',
    answer: "No. Building IT handles the technical management so you don't have to.",
  },
  {
    question: 'Can you update the website for me?',
    answer: "Yes. Tell us what changed and we'll update the site.",
  },
  {
    question: 'Do you handle hosting?',
    answer: 'Yes. Hosting is part of the $200/month plan.',
  },
  {
    question: 'Can you use my existing domain?',
    answer: 'Yes. We can connect your existing domain to your new site.',
  },
  {
    question: 'Can you rebuild my existing website?',
    answer:
      'Yes. We quote a rebuild the same way as a new site, using your existing content and photos.',
  },
  {
    question: 'Do I need to know anything about websites?',
    answer: "No. This is for business owners who don't want to deal with the technical side.",
  },
  {
    question: 'What kinds of businesses do you work with?',
    answer: 'Primarily local blue-collar and service-based businesses around the Kankakee area.',
  },
];
