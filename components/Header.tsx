import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './icons/Icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-ocean-blue-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className={`text-2xl font-extrabold ${isScrolled ? 'text-white' : 'text-white'}`}>
              Qamar aziz travels
            </a>
          </div>

          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-medium transition-colors duration-200 ${isScrolled ? 'text-sandy-beige/80 hover:text-white' : 'text-sandy-beige/80 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="inline-block bg-accent-gold text-ocean-blue-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
              Plan Your Trip
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${isScrolled ? 'text-white hover:bg-ocean-blue-700' : 'text-white hover:bg-black/20'}`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-ocean-blue-900/95 backdrop-blur-sm shadow-xl`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2 rounded-md text-base font-medium text-sandy-beige hover:bg-ocean-blue-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-ocean-blue-700">
          <div className="px-5">
             <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="block w-full text-center bg-accent-gold text-ocean-blue-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300">
              Plan Your Trip
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;