"use client";
import Image from "next/image";
import React from "react";

const ShoppingAs = ({data}:any) => {
 
  const Card = ({ src, alt, tag, title, desc, buttonText }:any) => {
    const [imgSrc, setImgSrc] = React.useState(src);

    return (
      <div className="relative group rounded-2xl overflow-hidden shadow-lg w-full h-[200px] sm:h-[300px] md:h-[420px]">
        <Image
          src={imgSrc || ""}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        
        />

  
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>


        <div className="absolute bottom-0 p-4 sm:p-6 text-white z-10 w-full">
          <span className="inline-block bg-teal-700 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-md mb-2 sm:mb-3">
            {tag}
          </span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-1 sm:mb-2">
            {title}
          </h3>
          <p className="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4">
            {desc}
          </p>
          <button className="flex w-full sm:w-[80%] items-center justify-center bg-[#0284A3] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-md transition">
            {buttonText}
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
      
        <div className="text-start mb-10">
          <h2 className="text-3xl font-bold text-[#1C3960] mb-2">
          {data?.data?.heading || '' }
          </h2>
          <p className="text-gray-600 text-start max-w-2xl">
            {data?.data?.description || '' }
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data?.data?.ShoppingCardGrid?.length > 0 ? (
            data?.data?.ShoppingCardGrid.map((item: any, index: number) => (
              <div key={index}>
                 <Card
            src="/glazingImg.png" 
            alt="Trader"
            tag={item?.type || ""}
            title={item?.description || ""}
            desc={item?.subDescription || ""}
            buttonText={item?.buttonText || ""}
          />
                </div>
             )
            )
          ):<div>No data available</div> 
            
            }
      
        </div>
      </div>
    </section>
  );
};

export default ShoppingAs;
