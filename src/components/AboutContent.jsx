import "./AboutContentStyles.css"
import React from 'react'
import {Link} from "react-router-dom";
import React1 from "../assets/react1.jpg";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I am Shruti Gupta, currently pursuing B.Tech in Computer Science from IGDTUW and have an overall CGPA of 9.22/10.</p>
        <p>Coursework: Data Structures and Algorithms, OOPS(C++), Database Management Systems, Operating Systems</p>
        <Link to="/education">
            <button className="btn">Education</button>
        </Link>
      </div>
      <div className="right">
        <div className="aboutimg"></div>
            <img src={React1} className="img" alt="true"></img>
      </div>
    </div>
  )
}

export default AboutContent
