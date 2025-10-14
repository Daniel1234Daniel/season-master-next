import RatingBadge from "./ui/RatingBadge";

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-gray-800 bg-center bg-cover bg-no-repeat text-center py-24 text-white"
      style={{ backgroundImage: "url('/glazingImg.png')" }} 
    >
      <div className="absolute inset-0 bg-black/50" /> 

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          UK’s Most Reliable Secondary Glazing Since 1970
        </h1>

        <p className="max-w-2xl mx-auto text-gray-200 mb-8">
          Season Master manufactures precision secondary glazing systems for
          homeowners, architects, and trade professionals.
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
          <RatingBadge rating={4.9} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
