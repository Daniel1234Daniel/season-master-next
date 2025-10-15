import React from 'react';

const WhyChoose = ({data}:any) => {


  return (
    <section className="container max-w-5xl mx-auto px-4 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
       
        <div className="flex flex-col items-center justify-between px-2">
          <div className="py-4">
            <h2 className="text-3xl font-bold text-[#1C3960] mb-4">
              {data?.data?.heading || ''}
            </h2>
            <p className="text-[14px] text-gray-700">
              {data?.data?.description || ''}
            </p>
          </div>
       <div >
        <img 
          src={`${data?.data?.coverImage?.url || ''}`}
          alt="Season Master Worker"
          className="rounded-xl shadow-lg" 
        />
      </div>
        </div>


       
<div className='flex flex-row h-full w-full'>
  <div className=" border-r border-[1.4px] hidden lg:block border-gray-800 mr-0 md:mr-4 h-auto "></div>

  <div className="flex flex-col justify-evenly w-full h-full gap-6 px-2">
          {data?.data?.whyChooseComponent?.whyChoose?.length > 0 ? (
            data.data.whyChooseComponent.whyChoose.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-[#26C7BE] p-4 rounded-lg max-w-full"
              >
                <h3 className="text-xl font-bold text-white pb-3">
                  {item?.heading || ""}
                </h3>
                <p className="text-white font-light text-sm">
                  {item?.description || ""}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm text-center">
              No details available.
            </p>
          )}


     
  </div>
</div>


    
  
     
      </div>
    </section>
  );
};

export default WhyChoose;
