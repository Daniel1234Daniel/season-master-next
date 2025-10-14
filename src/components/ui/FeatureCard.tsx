import React from 'react'

interface FeatureCardProps {
  icon:any;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="flex items-start flex-col p-6  bg-white">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="font-bold text-[20px] text-[#1C3960] text-lg mb-2">{title}</h3>
    <p className="flex  flex-row items-start text-[#333333] text-left text-[14px] ">{description}</p>
  </div>
);

export default FeatureCard;
