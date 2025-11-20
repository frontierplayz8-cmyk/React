import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Footer from "./footer";
import Mousefollower from "./mousefollower";
import hero from "../assets/hero.jpg"
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger,SplitText);
const Home = () => {
  const tlimg = gsap.timeline({
    scrollTrigger: {
      trigger: [".hero", ".hero2", ".hero3", ".hero4", ".hero5"],
      scrub: 1,
      ease: "power4.out",
      start: "top bottom",
      end: "+=5000",
      pin: "main",
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  useGSAP(() => {
    tlimg.to(".imghero", { x: 0, y: 0 });
    tlimg.to(".imghero", { x: 910, y: 950 });
    tlimg.to(".imghero", { x: 1, y: 1890 });
    tlimg.to(".imghero", { x: 510, y: 3200, scale: 1.3 });
    tlimg.to(".imghero", { x: 510, y: 3200, scale: 1.4 });
  });

  useGSAP(() => {
    let heading = SplitText.create(".hero-right h1", {type: "chars"})
    gsap.from(heading.chars,{
      x:40,
      stagger:0.1,
    })
    
    
    gsap.fromTo(
      [".h1", ".tags"],
      {
        opacity: 0,
        y: -200,
        x: -200,
      },
      {
        y: -200,
        x: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".h1 h1",
          start: "top center",
          end: "top center",
          scrub: 2,
          ease: "power4.out",
        },
      }
    );
    gsap.to(".tags p", {
      x: 0,
      y: 200,
      opacity: 1,
      stagger: 0.1,
    });
    gsap.from(".hero3-right", {
      x: 400,
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero3-right",
        scrub: 2,
      },
    });
    gsap.from(".hero5-left", {
      x: -300,
      scrollTrigger: {
        trigger: ".hero5-left",
        scrub: 1,
      },
    });
    gsap.from(".hero5-right", {
      x: 300,
      scrollTrigger: {
        trigger: ".hero5-right",
        scrub: 1,
      },
    });
    const cardtl = gsap.timeline({
      scrollTrigger: { trigger: [".achivemain h1", ".cards"], scrub: 2, end: "+=300 bottom"},
    });
    cardtl.from(".achivemain h1", { opacity: 0, scale: 0 });
    cardtl.from(".card", { opacity: 0, scale: 0 });
  });

  return (
    <>
      <main>
        <Mousefollower />
        <Navbar />
        <div className="hero">
          <div className="hero-left">
            <img
              className="imghero"
              src={hero}
              alt="hero-img"
            ></img>
          </div>
          <div className="hero-right">
            <h1>React Developer Focused on Performance & Design</h1>
            <p>
              Building modern, responsive web interfaces with a focus on clean
              design, performance, and great user experience.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="hero2">
          <div className="hero2-left">
            <div className="h1">
              <h1>
                Skilled in modern frontend tools, I create clean, structured,
                and efficient web solutions that feel great to use. From
                component architecture to responsive styling, I focus on
                delivering high-quality interfaces with smooth interactions.
              </h1>
            </div>
            <div className="tags">
              <p>React.js</p>
              <p>Fronted</p>
              <p>UI/UX Principal</p>
              <p>CSS Animation</p>
              <p>Clean Code</p>
            </div>
          </div>
        </div>
        <div className="hero3">
          <div className="hero3-right">
            <p>Skill Level</p>
            <h1>HTML</h1>
            <input type="range" value={"75"} disabled></input>
            <h1>CSS</h1>
            <input type="range" value={"85"} disabled></input>
            <h1>Javascript</h1>
            <input type="range" value={"50"} disabled></input>
            <h1>React JS</h1>
            <input type="range" value={"10"} disabled></input>
          </div>
        </div>
        <div className="hero4"></div>
        <div className="hero5">
          <div className="hero5-left">
            <h2>Specialized In</h2>
            <p>
              I specialize in crafting modern, responsive, and visually
              appealing web interfaces using React.js, JavaScript, and strong
              UI/UX principles. My strengths include building clean, structured
              components, optimizing performance, and creating smooth animations
              that enhance user interaction. I focus on writing maintainable
              code, designing intuitive layouts, and ensuring every element of
              the frontend feels polished and consistent.
            </p>
          </div>
          <div className="hero5-right">
            <h2>Vision</h2>
            <p>
              My vision is to create digital experiences that feel natural,
              fluid, and enjoyable for users. I aspire to combine creativity
              with performance, designing interfaces that not only look great
              but also deliver a seamless and meaningful experience. I aim to
              continuously grow as a developer, explore innovative approaches,
              and bring ideas to life through thoughtful design and user-focused
              development.
            </p>
          </div>
        </div>
        <div className="sep">
          <hr className="nav-sep"></hr>
        </div>
        <div className="achivements">
          <div className="achivemain">
            <h1>My Achivements</h1>
            <div className="cards">
              <div className="card">
                <h3>Built modern websites</h3>
                <p>
                  Created fully responsive React.js web interfaces with clean
                  code architecture.
                </p>
              </div>
              <div className="card">
                <h3>Smooth Animations</h3>
                <p>
                  Implemented GSAP & CSS animations to improve user engagement.
                </p>
              </div>
              <div className="card">
                <h3>API Integrations</h3>
                <p>
                  Connected projects to real APIs for dynamic content display.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
