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
} as const;

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '#solution', label: 'What We Do' },
  { href: '#included', label: "What's Included" },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
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
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'Website',
    description:
      'A professional website designed around your business and the services you actually offer.',
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
  'Professional website',
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
      'A professional website, hosting, maintenance, updates, technical management, forms, and mobile optimization — the full managed website service in one monthly price.',
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
      'Yes. We can use your existing business information, branding, services, photos, and other assets when rebuilding your site.',
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
