// PropertyInfo.js
import React from 'react';
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

const PropertyInfo = ({ bedrooms, bathrooms, area, location, price }) => {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-4 rounded-md shadow-md w-full">
      <div className="flex items-center space-x-2">
        <FaBed className="text-xl text-gray-600" />
        <span>{bedrooms} Beds</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaBath className="text-xl text-gray-600" />
        <span>{bathrooms} Baths</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaRuler className="text-xl text-gray-600" />
        <span>{area} sqft</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-xl text-gray-600" />
        <span>{location}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaMoneyBillWave className="text-xl text-gray-600" />
        <span>${price}</span>
      </div>
    </div>
  );
};

export default PropertyInfo;
