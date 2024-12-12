import "./HeroImgStyles.css";
import IntroImg from "../assets/bg.jpg";
import React from 'react'
import {Link} from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
      <p>I am currently pursuing B.Tech in Computer Science from IGDTUW</p>
        <h1>HI, I'M SHRUTI GUPTA </h1>
        <div>
            <Link to="/education" className="btn">Education</Link>
            <Link to="/about" className="btn btn-light">About</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
