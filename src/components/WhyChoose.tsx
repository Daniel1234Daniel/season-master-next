import React from 'react';

const WhyChoose = () => {
  return (
    <section className="container max-w-5xl mx-auto px-4 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
       
        <div className="flex flex-col items-center justify-between px-2">
          <div className="py-4">
            <h2 className="text-3xl font-bold text-[#1C3960] mb-4">
              Why Choose Season Master
            </h2>
            <p className="text-[14px] text-gray-700">
              Engineered precision, exceptional service, and proven performance — Season Master delivers glazing systems trusted by homeowners, architects, and installers across the UK.
            </p>
          </div>
       <div >
        <img 
          src="/glazingImg.png" 
          alt="Season Master Worker"
          className="rounded-xl shadow-lg" 
        />
      </div>
        </div>


       
<div className='flex flex-row h-full w-full'>
  <div className=" border-r border-[1.4px] hidden lg:block border-gray-800 mr-0 md:mr-4 h-auto "></div>

  <div className="flex flex-col justify-evenly w-full h-full gap-6 px-2">
        <div className='bg-[#26C7BE] p-4 rounded-lg max-w-full'>

      <h3 className="text-xl font-bold text-white pb-3">Trusted by Professionals</h3>
      <p className="text-white font-light text-sm">
        Chosen by installers and architects nationwide.
      </p>
    </div>

      <div className='bg-[#26C7BE] p-4 rounded-lg max-w-full'>

      <h3 className="text-xl font-bold text-white pb-3">Always in Stock</h3>
      <p className="text-white font-light text-sm">
        Fast, reliable UK delivery and next-day dispatch.
      </p>
    </div>

    <div className='bg-[#26C7BE] p-4 rounded-lg max-w-full'>

      <h3 className="text-xl font-bold text-white pb-3">Seamless Installation</h3>
      <p className="text-white font-light text-sm">
        Quick-fit systems designed for minimal disruption.
      </p>
    </div>

    <div className='bg-[#26C7BE] p-4 rounded-lg max-w-full'>
      <h3 className="text-xl font-bold text-white pb-3">Quality Guaranteed</h3>
      <p className="text-white font-light text-sm">
        Premium materials with long-lasting durability and performance.
      </p>
    </div>
  </div>
</div>


    
  
     
      </div>
    </section>
  );
};

export default WhyChoose;
