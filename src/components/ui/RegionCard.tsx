import React from 'react'

interface RegionCardProps {
  name: string;
  cities: string[];
}

const RegionCard = ({ name, cities }: RegionCardProps) => (
  <div className="bg-white shadow-md rounded-xl p-6">
    <h4 className="text-xl font-semibold mb-2">{name}</h4>
    <ul className="text-gray-600 space-y-1">
      {cities.map((city) => (
        <li key={city}>• {city}</li>
      ))}
    </ul>
  </div>
);

export default RegionCard;
