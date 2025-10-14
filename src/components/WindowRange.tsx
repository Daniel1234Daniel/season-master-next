"use client";

import React from "react";
import WindowCard from "./ui/WindowCard";

const WindowRange = ({data}:any) => {

  console.log(data,'windowrange');
  const windows = [
    {
      title: "Fixed Panel",
      description:
        "Fixed panels are the simplest, most durable form of secondary glazing.",
      image: "/glazingImg.png",
    },
    {
      title: "Horizontal Slider",
      description:
        "One of the most commonly used forms of secondary glazing.",
           image: "/glazingImg.png",

    },
    {
      title: "Tilt-In Vertical Slider",
      description:
        "A heavy-duty version of the standard counterbalanced vertical slider.",
         image: "/glazingImg.png",
    },
        {
      title: "Tilt-In Vertical Slider",
      description:
        "A heavy-duty version of the standard counterbalanced vertical slider.",
         image: "/glazingImg.png",
    },
        {
      title: "Tilt-In Vertical Slider",
      description:
        "A heavy-duty version of the standard counterbalanced vertical slider.",
         image: "/glazingImg.png",
    },
        {
      title: "Tilt-In Vertical Slider",
      description:
        "A heavy-duty version of the standard counterbalanced vertical slider.",
         image: "/glazingImg.png",
    },
  ];

  return (
    <section className="py-16 bg-white w-full max-w-6xl text-start px-8">
      <h2 className="text-3xl font-semibold mb-4 text-[#1C3960]">{data?.data?.WindowRangeGrid?.head}</h2>
      <p className="text-[#333333] text-start mb-8 max-w-[40rem]">
     {data?.data?.WindowRangeGrid?.description}
       </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data?.data?.WindowRangeGrid?.WindowRangeGrid.map((w:any,id:any) => (
          <WindowCard key={id} data={w} />
        ))}
      </div>
    </section>
  );
};

export default WindowRange;
