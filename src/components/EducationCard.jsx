import "./EducationCardStyles.css"
import React from 'react'

const EducationCard = () => {
  return (
    <div className="education">
      <div className="card-container">
        <div className="card">
          <h3>B.TECH</h3>
          <p className="btc">Computer Science and Engineering</p>
          <p>INDIRA GANDHI DELHI TECHNICAL UNIVERSITY FOR WOMEN</p>
          <p>CGPA:9.22/10</p>
          <p>Dec 2021-May 2025</p>
        </div>
        <div className="card">
          <h3>Class XII</h3>
          <p className="btc">SENIOR SECONDARY SCHOOL</p>
          <p>GOODLEY PUBLIC SCHOOL</p>
          <p>PERCENTAGE:91.8%</p>
          <p>Apr 2019-Mar 2020</p>
        </div>
        <div className="card">
          <h3>CLASS X</h3>
          <p className="btc">SECONDARY SCHOOL</p>
          <p>GOODLEY PUBLIC SCHOOL</p>
          <p>PERCENTAGE:90.8%</p>
          <p>Apr 2027-Mar 2018</p>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
