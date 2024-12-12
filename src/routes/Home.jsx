import React from 'react';
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import EducationCard from "../components/EducationCard";
import AboutContent from "../components/AboutContent";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <AboutContent/>
      <EducationCard/>
      <Footer/>
    </div>
  )
}

export default Home
