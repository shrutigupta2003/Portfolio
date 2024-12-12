import "./FooterStyles.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Delhi, India</p>
                    </div>
                </div>
                <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>8920306960</h4>
                </div>
                <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>guptashruti192003@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>Let's Connect!</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer
