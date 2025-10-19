
import type { NavLink, Package, Testimonial, ValueProposition } from './types';
import { ShieldCheckIcon, GlobeAltIcon, CurrencyDollarIcon } from './components/icons/Icons';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#packages' },
  { label: 'Packages', href: '#packages' },
  { label: 'About Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export const PACKAGES: Package[] = [
  {
    image: 'https://picsum.photos/seed/sea/800/600',
    title: 'Southeast Asia Escape',
    description: 'Explore ancient temples, bustling markets, and pristine beaches in this unforgettable journey.',
    price: 1200,
  },
  {
    image: 'https://picsum.photos/seed/alaska/800/600',
    title: 'Alaskan Cruise Adventure',
    description: 'Witness majestic glaciers, incredible wildlife, and stunning fjords from the comfort of a luxury cruise.',
    price: 2500,
  },
  {
    image: 'https://picsum.photos/seed/europe/800/600',
    title: 'European City Tours',
    description: 'Immerse yourself in the rich history and vibrant culture of Europe\'s most iconic cities.',
    price: 1800,
  },
    {
    image: 'https://picsum.photos/seed/safari/800/600',
    title: 'African Safari Expedition',
    description: 'Embark on a thrilling safari to witness the Big Five and experience the raw beauty of the African savanna.',
    price: 3200,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The trip was perfectly organized from start to finish. Qamar Aziz Travels thought of every detail, making our vacation stress-free and absolutely magical!',
    name: 'Jessica L.',
    rating: 5,
  },
  {
    quote: 'Our agent was incredibly knowledgeable and helped us craft the custom itinerary of our dreams. We couldn\'t have done it without them. Highly recommended!',
    name: 'Mark T.',
    rating: 5,
  },
  {
    quote: 'Exceptional service and support throughout our journey. When our flight was delayed, they had already rebooked us before we even landed. That\'s peace of mind.',
    name: 'Samantha P.',
    rating: 5,
  },
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    icon: GlobeAltIcon,
    title: 'Personalized Itineraries',
    description: 'We craft unique travel plans based on your interests, budget, and dreams.'
  },
  {
    icon: ShieldCheckIcon,
    title: '24/7 Local Support',
    description: 'Our team is available around the clock to assist you during your travels.'
  },
    {
    icon: CurrencyDollarIcon,
    title: 'Best Price Guarantee',
    description: 'We work hard to get you the best value without compromising on quality.'
  }
];
