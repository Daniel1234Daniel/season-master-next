"use client";

import React from "react";
import FeatureCard from "./ui/FeatureCard";
import { ShieldCheck, Thermometer, VolumeOff } from "lucide-react";

const FeatureHighlights = ({data}:any) => {





  return (
    <section className="py-14 bg-white w-full">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        {data?.data?.CardGirdFeatures[0]?.FeatureCards.map((f:any) => (
          <FeatureCard key={f?.heading} data={f} />
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
