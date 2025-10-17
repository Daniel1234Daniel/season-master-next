import React from "react";

const Regulation = ({ data }: any) => {
  return (
    <section
      className="relative w-full bg-center bg-cover bg-no-repeat py-[90px] px-4 sm:px-6"
      style={{ backgroundImage: `url(${data?.data?.coverImage?.url})` }}
    >

      <div className="max-w-[900px] mx-auto bg-white/95 rounded-2xl shadow-md text-center p-6 sm:p-10 backdrop-blur-sm">
        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bold text-[#1C3960] mb-4 sm:mb-6">
          {data?.data?.heading || "Tested. Certified. Safe."}
        </h2>

        <p className="text-[16px] sm:text-[18px] text-[#333333] leading-relaxed mb-8 sm:mb-10">
          {data?.data?.description ||
            "Every pane is rigorously tested for impact resistance, thermal stress, and shatter performance ensuring complete compliance with British and European regulations."}
        </p>

      
        <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap sm:flex-nowrap">
          {data?.data?.logoLists?.length > 0 ? (
            data.data.logoLists.map((item: any, index: number) => (
              <div
                key={index}
                className="flex justify-center items-center bg-white rounded-md shadow-sm p-2 sm:p-3 flex-1 min-w-[70px] sm:min-w-[120px] max-w-[120px]"
              >
                <img
                  src={item.logo?.url || ""}
                  alt="trusted company logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-500">No data available</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Regulation;
