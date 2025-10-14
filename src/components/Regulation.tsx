import React from 'react';

const Regulation = () => {
  return (
    <section className="relative w-full bg-gray-800  bg-center bg-cover bg-no-repeat py-[64px] px-4"
      style={{ backgroundImage: "url('/glazingImg.png')" }} 
    >
     
      <div className="max-w-[896px] rounded-[16px] bg-white/90 mx-auto text-center blur-[36] p-[48px]">
       
        <h2 className="text-[48px] text-wrap  font-bold text-[#1C3960] mb-[24px] tracking-[-0.01em]">
          Tested. <span>Certified. </span>Safe.
        </h2>
        
      
        <div className="text-[18px] font-normal text-[#333333] mb-[48px] ">
          <div className="mb-[4px]">Every pane is rigorously tested for impact resistance, thermal stress, and</div>
          <div className="mb-[4px]">shatter performance ensuring complete compliance with British and</div>
          <div>European regulations.</div>
        </div>

        <div className="flex justify-center items-start gap-[64px]">
     
          <div className="flex flex-col items-center">
          <img
          src="/glazingImg.png" 
          alt="Service Areas Map"
          className="w-[160px] h-[100px] object-cover shadow-md rounded-md"
        />
          </div>

      
          <div className="flex flex-col items-center">
            <img
          src="/glazingImg.png" 
          alt="Service Areas Map"
          className="w-[160px] h-[100px] object-cover shadow-md rounded-md"
        />
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default Regulation;