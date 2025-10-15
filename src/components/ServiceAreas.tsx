import RegionCard from "./ui/RegionCard";


const ServiceAreas = ({data}:any) => {
  

  return (
    <section className="flex items-center gap-[40px] flex-col md:flex-row mx-auto max-w-6xl  w-[100%] py-16 text-center px-8">
        <div className="flex flex-col w-[100%] md:w-[55%]">
    
    
    <div className="flex flex-start flex-col max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-[#1C3960] text-start">{data?.data?.heading || ''}</h2>
      <p className="text-gray-600  mb-8 text-start">
        {data?.data?.description || ''}
     
      </p>
        </div>

        <div className="flex flex-col md:flex-row gap-[40px]">
              <div className="flex flex-col gap-2">
                <span className="text-[#1C3960] text-start font-bold text-[16px]">{data?.data?.nationWideTitle || ''}</span>
                  <p className="text-start text-[14px] text-[#333333]">{data?.data?.nationWideDescription || ''}</p>
              </div>

                 <div className="flex flex-col gap-2">
                <span className="text-[#1C3960] text-start font-bold text-[16px]">{data?.data?.localTitle || ''}</span>
                  <p className="text-start text-[14px] text-[#333333]">{data?.data?.localDescription || ''}</p>
              </div>
        </div>

        <div className="flex items-center  max-w-full md:max-w-[22rem] my-4 justify-center rounded-[8px] gap-2 bg-[#0284A3] px-[40px] py-[14px]">
            <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                </svg>
            </div>
            <span>{data?.data?.buttonText || ''}</span>
          
        </div>

       
                <div className="flex flex-col text-start py-4">
    
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

      
       

        <p className="text-start text-gray-700 text-[16px]">Rated 5/5 by homeowners across the UK</p>
      </div>
      
        </div>

        <div className="flex flex-col w-[100%] md:w-[45%]">
 <img
          src={`${data?.data?.imageOfLocation?.url || ''}`}
          alt="Service Areas Map"
          className="w-full h-full object-cover"
        />
        </div>
    




      
    </section>
  );
};

export default ServiceAreas;
