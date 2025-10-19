import React, { useState } from 'react';
import { SearchIcon } from './icons/Icons';

const Hero = () => {
  const [searchMessage, setSearchMessage] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchMessage('Searching for your perfect trip...');
    setTimeout(() => {
      setSearchMessage('');
    }, 3000);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <img src="https://picsum.photos/seed/travel-hero/1920/1080" alt="Exotic travel destination" className="absolute inset-0 w-full h-full object-cover" />
      
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg animate-fade-in-down">
          Your Next Adventure Starts Here.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-sandy-beige mb-8 max-w-3xl mx-auto drop-shadow-md animate-fade-in-up">
          Expertly crafted trips tailored just for you.
        </p>

        <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="w-full">
              <label htmlFor="destination" className="block text-left text-sm font-medium text-sandy-beige mb-1">Destination</label>
              <input type="text" id="destination" placeholder="e.g., Paris, France" className="w-full bg-white/20 border border-white/30 rounded-lg py-3 px-4 focus:ring-2 focus:ring-accent-gold focus:outline-none transition" />
            </div>
            <div className="w-full">
              <label htmlFor="dates" className="block text-left text-sm font-medium text-sandy-beige mb-1">Travel Dates</label>
              <input type="text" id="dates" placeholder="MM/DD - MM/DD" className="w-full bg-white/20 border border-white/30 rounded-lg py-3 px-4 focus:ring-2 focus:ring-accent-gold focus:outline-none transition" />
            </div>
            <div className="w-full">
              <label htmlFor="travelers" className="block text-left text-sm font-medium text-sandy-beige mb-1">Travelers</label>
              <select id="travelers" className="w-full bg-white/20 border border-white/30 rounded-lg py-3 px-4 focus:ring-2 focus:ring-accent-gold focus:outline-none transition appearance-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23e0e1dd' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.5rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem',
              }}>
                <option>1 Traveler</option>
                <option>2 Travelers</option>
                <option>3 Travelers</option>
                <option>4+ Travelers</option>
              </select>
            </div>
            <button type="submit" className="w-full lg:col-span-1 bg-accent-gold text-ocean-blue-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Search Flights & Packages
            </button>
          </div>
        </form>
        {searchMessage && (
          <div className="mt-4 text-center text-sandy-beige bg-ocean-blue-700/80 py-2 px-4 rounded-lg inline-block transition-opacity duration-300">
            {searchMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;