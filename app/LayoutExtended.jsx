import React from 'react'
import Header from '@/app/Components/Header/Header'
import HeroSection from '@/app/Components/Sections/HeroSection/HeroSection'
import CompanySlider from '@/app/Components/Sections/CompanySlider/CompanySlider'
import About from '@/app/Components/Sections/About/About'
import Services from './Components/Sections/Services/Services'
import Experience from './Components/Sections/Experience/Experience'
import ServicesSlider from './Components/Sections/ServicesSlider/ServicesSlider'

export default function LayoutExtended() {
  return (
    <div>
        <Header />
        <HeroSection />
        <CompanySlider />
        <About />
        <Services />
        <Experience />
        <ServicesSlider />
    </div>
  )
}
