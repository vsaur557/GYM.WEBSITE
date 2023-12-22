import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="logo-footer">
          <img src={logo} alt="" />
         
        </div>
        <div>
        <h2>All Rights & Created By : Saurabh Verma</h2>
      </div>
      </div>
      <div className="blur blur-footer"></div>
      <div className="blur blur-footer1"></div>
      
    </div>
  );
};

export default Footer;
