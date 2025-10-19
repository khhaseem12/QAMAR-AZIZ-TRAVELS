
import React from 'react';
import { PACKAGES } from '../constants';
import PackageCard from './PackageCard';

const FeaturedPackages = () => {
  return (
    <section id="packages" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ocean-blue-900">Our Handpicked Collections</h2>
          <p className="mt-4 text-lg text-ocean-blue-700 max-w-2xl mx-auto">Discover curated journeys that promise unforgettable memories and unique experiences.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.title} packageInfo={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
