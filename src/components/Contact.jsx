import Navbar from './Navbar';
import Footer from './footer';
import MouseFollower from './mousefollower';


const Contact = () => {
  return ( 
    <>
      <MouseFollower /><div>
        <Navbar />
          <div className="contact-main">
            <h1>Contact Us</h1>
            <div className="contact-list">
              <span>LinkedIn</span>
              <span>GitHub</span>
              <span>Instagram</span>
              <span>Facebook</span>
              <span>Email</span>
            </div>
          </div>
        <Footer />
    </div>
    </>
  )
}

export default Contact