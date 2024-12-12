import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import EducationCard from "../components/EducationCard";
const Education = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="EDUCATION." text="Get to know more about my educational background"/>
      <EducationCard/>
      <Footer/>
    </div>
  )
}

export default Education
