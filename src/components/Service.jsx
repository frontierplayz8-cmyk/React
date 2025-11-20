import Navbar from "./Navbar";
import Footer from "./footer";
import MouseFollower from "./mousefollower";
import gear from "../assets/gear.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Service = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-hero",
      scrub: 2,
      start: "top -=300",
      end: "top center",
      pin: ".service-hero",
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
  const lasttl = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-hero3",
      scrub: 2,
      start: "center bottom",
      end: "+=600 center",
      pin: true,
    }
  })
  useGSAP(() => {
    gsap.from(".service-land1 h1", {
      x: -1000,
      duration: 1,
      ease: "power4.inOut",
      opacity: 0,
    });
    gsap.from(".service-land1 p", {
      x: 500,
      duration: 1,
      ease: "power4.inOut",
      opacity: 0,
    });
    gsap.to([".gear1", ".gear2", ".gear3"], {
      rotate: "260deg",
      duration: 11,
      repeat: -1,
      yoyo: true,
    });
    tl.to(".gear3", {
      x: 1200,
      y: 950,
      scale: 2,
    });
    lasttl.from(".service-hero2 h1",{
      x:-300,
      opacity:0,
      duration:0.5,
    })
    lasttl.from(".service-card",{
      y:300,
      stagger: 0.3,
      opacity:0,
      duration:0.5,
    })
  });
  return (
    <>
      <MouseFollower />
      <div className="service-main">
        <Navbar />
        <div className="service-land1">
          <img className="gear1" src={gear} alt="gear1"></img>
          <img className="gear2" src={gear} alt="gear2"></img>
          <img className="gear3" src={gear} alt="gear3"></img>
          <h1 className="service-heading">Our Services</h1>
          <p>
            We provide innovative, scalable, and user-centric solutions tailored
            to meet the demands of modern businesses. With a commitment to
            quality, precision, and long-term success, we help organizations
            build products that perform and inspire.
          </p>
        </div>
        <div className="service-hero">
          <div className="service-heading-left">
            <h1>We Provide</h1>
            <div className="detail 1">
              <details>
                <summary>Fronted-End Web Development</summary>
                <div className="answer">
                  I build clean, modern, responsive websites using HTML, CSS,
                  JavaScript, and React. my work focuses on performance,
                  usability, and sleek UI design.
                </div>
              </details>
            </div>
            <div className="detail 2">
              <details>
                <summary>ReactJs Development</summary>
                <div className="answer">
                  I specialize in Building reusable components Functional UI/UX
                  Smooth state management API integration Single-page
                  applications (SPA) This is one of your strongest skills
                </div>
              </details>
            </div>
            <div className="detail 3">
              <details>
                <summary>GSAP Animation & Effect</summary>
                <div className="answer">
                  I create Hero animations Scroll-triggered effects Smooth
                  transitions Interactive UI elements Mouse-follow and parallax
                  animations Very few beginners can do this this is a premium
                  skill.
                </div>
              </details>
            </div>
            <div className="detail 4">
              <details>
                <summary>Portfolio & Personal Website Creation</summary>
                <div className="answer">
                  I built my own portfolio using React + animations,
                  I can offer: Custom portfolio websites Modern
                  developer/creator landing pages Smooth interactive designs
                  People pay a lot for this.
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className="service-hero2">
          <h1>Why Choose Me?</h1>
          <div className="service-cards">
            <div className="service-card">
              <h2>Fast & Efficient Delivery</h2>
              <p>I build and deliver projects quickly without compromising quality. Every part of the website is optimized for performance and responsiveness.</p>
            </div>
            <div className="service-card">
              <h2>High-Quality Work</h2>
              <p>Clean code, smooth animations, modern UI — I make sure every project looks professional and feels premium.</p>
            </div>
            <div className="service-card">
              <h2>Clear Communication</h2>
              <p>You’ll always know what’s happening. I keep things simple, transparent, and easy to understand throughout the entire process.</p>
            </div>
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Service;
