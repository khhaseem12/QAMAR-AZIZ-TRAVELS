
import React from 'react';
import { NAV_LINKS } from '../constants';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons/Icons';

const Footer = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-ocean-blue-900 text-sandy-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Agency Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Qamar Aziz Travels</h3>
            <p className="text-sandy-beige/80 mb-2">Phone: (123) 456-7890</p>
            <p className="text-sandy-beige/80">Email: contact@qatravels.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sandy-beige/80 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sandy-beige/80 hover:text-white hover:underline transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sandy-beige/80 hover:text-white hover:underline transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-sandy-beige/80 hover:text-white transition-colors"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" className="text-sandy-beige/80 hover:text-white transition-colors"><InstagramIcon className="h-6 w-6" /></a>
              <a href="#" className="text-sandy-beige/80 hover:text-white transition-colors"><TwitterIcon className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-ocean-blue-700 pt-6 text-center text-sandy-beige/70">
          <p>&copy; {new Date().getFullYear()} Qamar Aziz Travels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
