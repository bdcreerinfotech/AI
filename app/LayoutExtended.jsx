"use client";
import React, { useEffect, useState } from "react";
import Header from "@/app/Components/Header/Header";
import HeroSection from "@/app/Components/Sections/HeroSection/HeroSection";
import CompanySlider from "@/app/Components/Sections/CompanySlider/CompanySlider";
import About from "@/app/Components/Sections/About/About";
import Services from "@/app/Components/Sections/Services/Services";
import Experience from "@/app/Components/Sections/Experience/Experience";
import ServicesSlider from "@/app/Components/Sections/ServicesSlider/ServicesSlider";
import Process from "@/app/Components/Sections/Process/Process";
import Testimonials from "@/app/Components/Sections/Testimonials/Testimonials";
import Certificate from "@/app/Components/Sections/Certificate/Certificate";
import CaseStudies from "@/app/Components/Sections/CaseStudies/CaseStudies";
import TechStack from "@/app/Components/Sections/TechStack/TechStack";
import FAQ from "@/app/Components/Sections/FAQ/FAQ";
import Footer from "@/app/Components/Sections/Footer/Footer";
import Form from "./Components/Form/Form";

export default function LayoutExtended() {
  const [isForm, setIsForm] = useState(false);

  function handleForm(){
    setIsForm(!isForm)
  }

  useEffect(() => {
    if (isForm) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll
    }

    // cleanup in case component unmounts while popup is open
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isForm]);

  return (
    <div>
      {isForm && <Form onClose={handleForm}/>}
      <Header onForm={handleForm}/>
      <HeroSection onForm={handleForm}/>
      <CompanySlider />
      <About />
      <Services />
      <Experience onForm={handleForm}/>
      <ServicesSlider />
      <Process />
      <Testimonials />
      <Certificate />
      <CaseStudies />
      <TechStack />
      <FAQ />
      <Footer onForm={handleForm}/>
    </div>
  );
}
