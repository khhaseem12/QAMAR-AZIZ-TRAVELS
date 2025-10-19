
import React from 'react';
import type { Package } from '../types';

interface PackageCardProps {
  packageInfo: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageInfo }) => {
  const { image, title, description, price } = packageInfo;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-ocean-blue-900 mb-2">{title}</h3>
        <p className="text-ocean-blue-700/90 text-sm flex-grow mb-4">{description}</p>
        <div className="mt-auto">
          <p className="text-lg font-semibold text-ocean-blue-800 mb-4">
            Starting at <span className="text-accent-teal font-extrabold">${price.toLocaleString()}</span>
          </p>
          <a href="#contact" className="w-full block text-center bg-ocean-blue-800 text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-ocean-blue-900 transition-colors duration-300 group-hover:bg-accent-gold group-hover:text-ocean-blue-900">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
