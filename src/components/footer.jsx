import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <>
     <div className="sep">
          <hr className="nav-sep"></hr>
        </div>
        <footer>
          <div className="left">
            <div className="footlogo">
              <img src={logo}></img>
            </div>
            <div className="left-sec">
              <span>Service</span>
              <p>Fronted</p>
              <p>UI/UX</p>
              <p>Website Redesign</p>
              <p>Performance Optimization</p>
              <p>Animation & Interactions</p>
            </div>
          </div>
          <div className="right">
            <div className="right-sec">
              <span>Used Languages</span>
              <p>ReactJS</p>
              <p>HTML/CSS</p>
              <p>GSAP</p>
              <p>Javascript</p>
              <p>Figma</p>
            </div>
            <div className="right1-sec">
              <span>Contact</span>
              <p>Email</p>
              <p>Github</p>
              <p>Instagram</p>
            </div>
          </div>
        </footer>
        <div className="end">
          <span className="end1">
            © 2025 Talha — Crafted with React & GSAP
          </span>
        </div></>
    )
}

export default Footer;