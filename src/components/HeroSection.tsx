"use client";

import React from "react";

import RatingBadge from "./ui/RatingBadge";

const HeroSection = ({data}:any) => {

  const endPoint = process.env.NEXT_PUBLIC_API_BASE_FILE;
  const backgroundImageUrl = data?.data?.heroimage?.url || ''
  ? `url(${endPoint}${data?.data?.heroimage?.url})`
  : 'none';

  return (
    <section
      className="relative w-full bg-gray-800 bg-center bg-cover bg-no-repeat text-center py-24 text-white"
      style={{ backgroundImage: backgroundImageUrl }}
    >
      <div className="absolute inset-0 bg-black/50" /> 

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {data?.data?.title || ""}
        </h1>

        <p className="max-w-2xl mx-auto text-gray-200 mb-8">
          {data?.data?.description || ""}
        </p>

        <div className="flex flex-col md md:flex-row items-center justify-center gap-[8px]">
          <span className="flex px-[40px] py-[16px] bg-[#0284A3] hover:bg-[#02485a] rounded-[8px] font-medium cursor-pointer">
            Buy Ready-Made Windows
          </span>
          <span className="flex px-[40px] py-[16px] border-2 border-white text-white rounded-[8px] font-medium cursor-pointer">
            Become a Season Master Fabricator
          </span>
        </div>

        <div className="mt-8 hidden md:block">
          <RatingBadge rating={data?.data?.rating} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
