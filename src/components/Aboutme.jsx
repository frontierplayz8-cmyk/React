import React from 'react'
import Navbar from "./Navbar"
import Footer from './footer'
import MouseFollower from './mousefollower'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger,SplitText)

function Aboutme() {

  useGSAP(()=>{
  let heading = new SplitText(".heading", {type: "chars words" })
  let hero2subhead = new SplitText(".subhead", {type: "words"}) 
    gsap.from(hero2subhead.words,{
      y:60,
      opacity:0,
      stagger:0.1,
      ease: "sine.inOut",
      scrollTrigger: {
        scrub:2,
        start: "center bottom",
        end: "bottom 1500",
      }
    })

  gsap.from(heading.chars,{
      autoAlpha: 0,
      opacity:0,
      x:20,
      stagger:0.1,
      duration:0.4,
    })
    gsap.from(".aboutme-hero p",{
      x:-20,
      opacity:0,
      delay:2,
    })
  })
  return (
    <>
    <MouseFollower />
      <main>
        <Navbar />
          <div className="aboutme-hero">
            <h1 className='heading'>Hello i'm <span>Talha</span>!</h1>
            <p>Front-end developer creating interactive, smooth, and modern web experiences using React, GSAP, and clean UI design.</p>
          </div>
          <div className="aboutme-hero2">
            <h1>My journey</h1>
            <p className='subhead'>I began my journey in web development by learning HTML and CSS, building simple web pages and exploring the foundations of design. Gradually, I dove into JavaScript and React, creating dynamic and interactive web applications. Along the way, I discovered the power of animations with GSAP, which helped me bring my projects to life with smooth and engaging interactions. Today, I focus on crafting websites that are both functional and visually appealing, blending clean code with modern design.</p>
          </div>
        <Footer />
      </main>
    </>
  )
}

export default Aboutme