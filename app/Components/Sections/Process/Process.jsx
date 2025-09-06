import React from "react";
import ProcessCard from "./ProcessCard/ProcessCard";

export default function Process() {
  const processes = [
    {
      num: "01",
      img: "discovery.webp",
      title: "Discovery",
      desc: "We conduct an in-depth analysis of your business data, challenges, and opportunities to define secure AI use cases and outline a strategic development path.",
    },
    {
      num: "02",
      img: "discovery.webp",
      title: " Design",
      desc: "We conduct an in-depth analysis of your business data, challenges, and opportunities to define secure AI use cases and outline a strategic development path.",
    },
    {
      num: "03",
      img: "discovery.webp",
      title: "POC",
      desc: "We conduct an in-depth analysis of your business data, challenges, and opportunities to define secure AI use cases and outline a strategic development path.",
    },
    {
      num: "04",
      img: "discovery.webp",
      title: "Execution",
      desc: "We conduct an in-depth analysis of your business data, challenges, and opportunities to define secure AI use cases and outline a strategic development path.",
    },
  ];

  return (
    <div className="flex justify-center max-sm:!py-[40px] py-[80px]">
      <div className="box-layout flex-col">
        <div className="w-full mb-14">
          <h1 className="max-sm:!text-[32px] text-[52px] font-bold text-center">
            Our Process for AI Projects in India
          </h1>
        </div>
        <div className="flex gap-8 max-sm:!flex-wrap">
          {processes.map((item, idx) => (
            <ProcessCard key={idx} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
