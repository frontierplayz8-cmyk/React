import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Aboutme from "./components/Aboutme"
import Contact from "./components/Contact"
import Service from "./components/Service"


const Portfolio = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
};

export default Portfolio;
