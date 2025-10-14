import FeatureCard from "./ui/FeatureCard";
import { ShieldCheck, Thermometer, VolumeOff } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      icon: <VolumeOff className="w-6 h-6 text-[#20A69E]" />,
      title: "It’s Quieter",
      description:
      "Secondary glazing offers the most effective sound insulation. Reduces noise by up to 80% and significantly outperforms double glazing."  },
    {
      icon: <Thermometer className="w-6 h-6 text-[#20A69E]" />,
      title: "Thermal Efficiency",
      description:
        "Secondary glazing enhances thermal insulation of single-glazed windows by about 65%, which is roughly 10% better than double glazing.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#20A69E]" />,
      title: "Secure",
      description:
        "Secondary glazing is a cost-effective and discreet way to boost security, especially for multi-storey buildings, with no external access needed."  },
  ];

  return (
    <section className="py-16 bg-white w-full">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
