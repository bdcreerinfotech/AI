import React from "react";
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard";

export default function CaseStudies() {
  const caseStudies = [
    {
      img: "case-study-1.webp",
      title: "Rezcomm",
      desc: "Cut AWS costs by 30%, boosted performance, achieved PCI compliance, and accelerated feature deployment by 40% using AI and Terraform.",
    },
    {
      img: "case-study-1.webp",
      title: "Rezcomm",
      desc: "Cut AWS costs by 30%, boosted performance, achieved PCI compliance, and accelerated feature deployment by 40% using AI and Terraform.",
    },
    {
      img: "case-study-1.webp",
      title: "Rezcomm",
      desc: "Cut AWS c",
    },

  ];

  return (
    <div className="flex bg-[#f2f2f2] justify-center py-[40px] md:py-[80px]">
      <div className="box-layout flex-col">
        <div className="mb-10">
          <h1 className="text-[32px]/[1.3] mb-3 md:mb-0 md:text-[52px]/[1.3] font-bold">Case Studies</h1>
          <p className="max-sm:!text-base">Learn more by reading some of our client results stories.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-30">
          {caseStudies.map((item, idx) => (
            <CaseStudyCard data={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
