"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";

export default function FAQ() {
  const [acc, setAcc] = useState(null);

  const faqList = [
    {
      que: "What AI development services are offered in India?",
      ans: "AI development services include machine learning, deep learning, natural language processing (NLP), computer vision, and robotic process automation (RPA). These solutions help automate processes, improve decision-making, and optimize business operations.",
    },
    {
      que: "How can AI benefit a business in India?",
      ans: "AI can enhance efficiency by automating repetitive tasks, improving customer interactions, analyzing large datasets for insights, and optimizing decision-making processes. It can be applied in various areas such as customer support, fraud detection, predictive analytics, and workflow automation.",
    },
    {
      que: "Are custom AI solutions available in India, or only pre-built models?",
      ans: "Both options are available. Custom AI models can be developed to address specific business needs, while pre-built models can be integrated and fine-tuned to enhance existing systems.",
    },
    {
      que: "How secure are AI solutions in India?",
      ans: "AI solutions follow strict security protocols, including data encryption, compliance with industry regulations, and access control measures. Privacy and data protection are key considerations in every AI implementation.",
    },
    {
      que: "What industries can benefit from AI development in India?",
      ans: "AI can be applied across multiple industries, including healthcare, finance, e-commerce, real estate, logistics, and many more. Businesses in various sectors use AI to improve efficiency, enhance customer experiences, and drive innovation.",
    },
  ];

  function handleAcc(idx) {
    if (acc === idx) {
      setAcc(null);
      return;
    }
    setAcc(idx);
  }

  return (
    <div className="flex justify-center py-[40px] md:py-[80px]">
      <div className="relative box-layout justify-center items-center !w-full !overflow-visible md:!w-[90%] ">
        <div className="q-img relative top-0 md:left-20 flex w-[120%] md:w-[90%] aspect-square">
          <Image
            src={"/assets/quesion_full.webp"}
            alt="quesion mark"
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute z-1 top-[10%] md:top-[10%] w-[90%] md:!w-[850px]">
          <div>
            <h1 className="text-[40px] md:text-[80px] font-medium">FAQ's</h1>
          </div>
          <div className="">
            {faqList.map((item, idx) => (
              <div className="" key={idx}>
                <button
                  className="flex items-center border-b-1 w-full text-left gap-4 md:gap-8 font-normal p-2 md:p-5 cursor-pointer bg-white"
                  onClick={() => handleAcc(idx)}
                >
                  <HiOutlinePlus
                    className={`min-w-[20px] min-h-[20px] md:min-w-[50px] md:min-h-[50px] text-[var(--primary-color)] transition-transform duration-300 ${
                      idx === acc ? "rotate-225" : "rotate-0"
                    }`}
                  />
                  <p className="!text-xs md:!text-[26px]">{item.que}</p>
                </button>
                <div className="">
                  <p
                    className={`!text-[12px] md:!text-[23px] overflow-hidden pl-[45px] md:pl-[100px] bg-white rounded-b-2xl px-[1.25rem] transition-all duration-300 ease-in-out ${
                      idx === acc ? "max-h-[500px] py-[.5rem] md:py-[1rem]" : "max-h-0 py-0"
                    }`}
                  >
                    {item.ans}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
