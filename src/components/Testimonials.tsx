"use client";
import React, { useState } from "react";
import Image from "next/image";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviews = [
    {
      name: "Sarah Mitchell",
      date: "19 September",
      review:
        "Absolutely transformed our Victorian home. The noise reduction is incredible and they look fantastic.",
    },
    {
      name: "James Wilson",
      date: "15 September",
      review:
        "Professional service from start to finish. The windows have made a huge difference to our energy bills!",
    },
    {
      name: "Emma Thompson",
      date: "12 September",
      review:
        "The team was punctual and cleaned up perfectly after installation. Highly recommended!",
    },
    {
      name: "Michael Brown",
      date: "8 September",
      review:
        "Quality craftsmanship and excellent customer service. Our home has never been more comfortable.",
    },
    {
      name: "Lisa Johnson",
      date: "5 September",
      review:
        "Worth every penny! The difference in temperature regulation is remarkable throughout the seasons.",
    },
    {
      name: "David Clark",
      date: "1 September",
      review:
        "Fast installation and beautiful results. The windows enhance our home's curb appeal significantly.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

 
  const getVisibleReviews = () => {
    if (typeof window === 'undefined') return reviews.slice(0, 4);
    
    const screenWidth = window.innerWidth;
    let cardsToShow = 4; 
    
    if (screenWidth < 768) {
      cardsToShow = 1;
    } else if (screenWidth < 1024) {
      cardsToShow = 2; 
    }
    
    const visibleReviews = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % reviews.length;
      visibleReviews.push(reviews[index]);
    }
    
    return visibleReviews;
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 text-center">
    
      <h2 className="text-3xl md:text-4xl font-bold text-[#1C3960] mb-8">
        What Our Customers Say
      </h2>

  
      <div className="relative   p-6 overflow-hidden">
  
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#F5F5F5]  rounded-full w-8 h-8 flex items-center justify-center text-[#1C3960] transition-colors z-10"
          aria-label="Previous testimonials"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-8">
          {getVisibleReviews().map((r:any, i:any) => (
            <div
              key={`${r.name}-${i}`}
              className="bg-[#EAF7FA] rounded-lg p-4 text-left flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
          
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FEA500"
                    viewBox="0 0 24 24"
                    strokeWidth="0"
                    stroke="none"
                    className="w-4 h-4"
                  >
                    <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.73z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#333333] text-[14px] leading-relaxed mb-4">{r.review}</p>

              <div className="flex justify-between items-center text-[13px] text-[#333]">
                <span className="font-bold">{r.name}</span>
                <span className="text-gray-600">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

  
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#F5F5F5] shadow-md rounded-full w-8 h-8 flex items-center justify-center text-[#1C3960]  z-10"
          aria-label="Next testimonials"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

     
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-2 text-[14px]">
       
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.63 1.22 9.1 3.6l6.8-6.8C35.6 2.6 30.3.5 24 .5 14.8.5 6.9 5.7 3 13.1l7.9 6.1C12.4 13.1 17.7 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.6 3.1-2.5 5.8-5.3 7.6l8.1 6.3c4.7-4.3 7.4-10.6 7.4-18.4z"
            />
            <path
              fill="#4A90E2"
              d="M10.9 28.8c-1.1-3.1-1.1-6.4 0-9.5L3 13.1C-.7 20 1.2 28.5 7.3 34.2l7.9-6.1z"
            />
            <path
              fill="#FBBC05"
              d="M24 46.5c6.5 0 11.9-2.1 15.9-5.6l-8.1-6.3c-2.2 1.5-5 2.4-7.8 2.4-6.3 0-11.6-4.2-13.6-10l-7.9 6.1C6.9 42.3 14.8 46.5 24 46.5z"
            />
          </svg>
          <div className="flex flex-col text-left leading-tight">
            <p className="font-semibold text-[13px] text-black">Google Rating</p>
            <p className="text-[#1C3960] text-[12px]">See all our reviews</p>
             <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill="#FEA500"
              viewBox="0 0 24 24"
              strokeWidth="0"
              stroke="none"
              className="w-4 h-4"
            >
              <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.73z" />
            </svg>
          ))}
        </div>
          </div>
        </div>

      
       

        <p className="ml-2 text-gray-700 font-medium">Rated 4.9/5</p>
      </div>
    </section>
  );
};

export default Testimonials;