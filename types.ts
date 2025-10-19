
export interface NavLink {
  label: string;
  href: string;
}

export interface Package {
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface Testimonial {
  quote: string;
  name: string;
  rating: number;
}

export interface ValueProposition {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
