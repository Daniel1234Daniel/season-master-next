import React from 'react'
import Image from 'next/image';
interface FeatureCardProps {
  icon:any;
  title: string;
  description: string;
}

const FeatureCard = ({ data}: any) => (

  <div className="flex items-start flex-col p-6  bg-white">
    <div className="flex justify-center mb-4">
         <Image
                    src={`${data?.icon?.url} || ''}`}
                    alt="Customer"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
    
      </div>
     <h3 className="font-bold text-[20px] text-[#1C3960] text-lg mb-2">{data?.heading}</h3> 
    <p className="flex  flex-row items-start text-[#333333] text-left text-[14px] ">{data?.text}</p> 
  </div>
);

export default FeatureCard;
