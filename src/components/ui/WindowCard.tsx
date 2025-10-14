import React from 'react'



const WindowCard = ({ data }: any) => (

  
 
  <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
    <img src={data?.cover?.url} className="w-full h-48 object-cover" />
    <div className='flex justify-between px-4 pt-2 items-center '>
      <h3 className="font-semibold text-lg mb-2 text-[#1C3960]">{data?.header}</h3>
      
      <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#1C3960"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
    </div>
    <div className='px-4'>
    <hr className="border-dashed border-gray-300" />

        </div>
    <div className="p-4 text-left">
      <p className="text-gray-600 text-sm">{data?.textDescription}</p>
    </div>
  </div>
);

export default WindowCard;
