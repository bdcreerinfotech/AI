import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

export default function Services() {
  const serviceList = [
    {
      img: "services/ai-service.webp",
      title: "AI-Powered Business Growth",
      desc: "With over 8 years of AI expertise, we help businesses streamline operations, boost productivity, and unlock new opportunities through intelligent automation in India.",
    },
    {
      img: "services/ai-service.webp",
      title: "Machine Learning Solutions",
      desc: "Leverage advanced machine learning models, including supervised, unsupervised, and reinforcement learning, to build systems that optimize decision-making with minimal human intervention.",
    },
    {
      img: "services/ai-service.webp",
      title: "Deep Learning Innovations",
      desc: "Utilize multi-layered neural networks to create AI models capable of complex pattern recognition, predictive analytics, and automation at scale.",
    },
    {
      img: "services/ai-service.webp",
      title: "Natural Language Processing (NLP)",
      desc: "Enhance user experiences with AI-powered NLP solutions, including real-time speech recognition, sentiment analysis, and conversational AI for seamless interactions.",
    },
    {
      img: "services/ai-service.webp",
      title: "Robotic Process Automation (RPA)",
      desc: "Automate repetitive tasks, reduce operational costs, and improve efficiency with AI-driven RPA solutions tailored to your business needs.",
    },
    {
      img: "services/ai-service.webp",
      title: "Computer Vision & OCR",
      desc: "Transform visual data into actionable insights with AI-powered image recognition, biometric authentication, and intelligent document processing.",
    },
  ];

  return (
    <div className="flex justify-center max-sm:py-[40px] py-[80px] box-content">
      <div className="box-layout flex-col">
        <h1 className="max-sm:text-[32px]/[1.3] text-[52px]/[1.3] font-bold mb-8 ">
          Unlock AI-Driven Innovation <br /> for Your Business in India
        </h1>
        <div className="flex flex-wrap justify-between gap-15 max-sm:!gap-10">
          {serviceList.map((item, idx) => (
            <ServiceCard
              key={idx}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
