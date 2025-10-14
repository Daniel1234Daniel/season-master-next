import Image from "next/image";
import React from "react";

const ShoppingAs = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
    
        <div className="text-start mb-10">
          <h2 className="text-3xl font-bold text-[#1C3960] mb-2">
            Who Are You Shopping As?
          </h2>
          <p className="text-gray-600 text-start max-w-2xl">
            Whether you’re improving your home or supplying to clients, Season
            Master provides tailored solutions for every type of customer.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
          <div className="relative group rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/glazingImg.png"
              alt="Trader"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

            <div className="absolute bottom-0 p-6 text-white z-10">
              <span className="inline-block bg-cyan-600 text-sm font-medium px-3 py-1 rounded-md mb-3">
                Trader
              </span>
              <h3 className="text-2xl font-bold leading-snug mb-2">
                Grow Your Business with the Season Master System.
              </h3>
              <p className="text-gray-200 mb-4 text-sm">
                Buy ready-made windows or system parts always in stock.
              </p>
              
              <button className="flex max-w-[40%]  md:max-w-full w-[40%] md:w-full items-center justify-center bg-[#0284A3]  text-white text-sm font-semibold px-5 py-2 rounded-md transition">
              
                For Traders & Installers →
              </button>
            </div>
          </div>

     
          <div className="relative group rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/glazingImg.png"
              alt="Customer"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>

            <div className="absolute bottom-0 p-6 text-white z-10">
              <span className="inline-block bg-emerald-600 text-sm font-medium px-3 py-1 rounded-md mb-3">
                Customer
              </span>
              <h3 className="text-2xl font-bold leading-snug mb-2">
                Upgrade Your Home’s Warmth, Quiet & Security.
              </h3>
              <p className="text-gray-200 mb-4 text-sm">
                Perfect for period properties, modern homes & listed buildings.
              </p>
              <button className="flex w-full items-center justify-center bg-[#0284A3] max-w-[28rem] text-white text-sm font-semibold px-5 py-2 rounded-md transition">
                Explore Windows →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingAs;
