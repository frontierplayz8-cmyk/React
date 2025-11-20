import logo from "../assets/logo.png";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img className="imglogo" src={logo} alt="logo"></img></Link>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/aboutme">About Me</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
    <div className="sep">
          <hr className="nav-sep"></hr>
    </div>
    </>
  );
};

export default Navbar;