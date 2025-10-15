import React from 'react';

const Regulation = ({data}:any) => {


  return (
    <section className="relative w-full bg-gray-800  bg-center bg-cover bg-no-repeat py-[90px] px-4"
      style={{ backgroundImage: `url(${data?.data?.coverImage?.url}` }} 
    >
     
      <div className="max-w-[896px] rounded-[16px] bg-white/94  mx-auto text-center blur-[70] p-[28px]">
       
        <h2 className="text-[48px] text-wrap  font-bold text-[#1C3960] mb-[24px] tracking-[-0.01em]">
         {data?.data?.heading || '' }
        </h2>
        
      
        <div className="text-[18px] font-normal text-[#333333] mb-[48px] ">
        {data?.data?.description || ''}
        </div>

        <div className="flex justify-center overflow-x-auto items-start gap-[14px]">
  {data?.data?.logoLists?.length > 0 ? (
  data.data.logoLists.map((item: any, index: number) => (
    <div key={index} className="flex flex-col items-center">
      <img
        src={item.logo?.url || ""}
        alt="trusted company logo"
        className="w-[140px] h-[80px] object-cover shadow-md rounded-md"
      />
    </div>
  ))
) : (
  <div>No data available</div>
)}


         
        </div>

    
      </div>
    </section>
  );
};

export default Regulation;