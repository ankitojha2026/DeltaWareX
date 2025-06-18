import { FaArrowRight, FaBookOpen, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const NavBar2 = () => {
  return (
    <div className="container-fluid px-5" style={{ backgroundColor: "#212529", color: "white" }}>
      <header className="d-flex flex-column flex-md-row align-items-center justify-content-between py-2 px-3">
        {/* Social Icons Row (Top on mobile) */}
        <ul className="nav order-1 order-md-0 mb-1 mb-md-0 gap-2 gap-md-3">
          <li>
            <a className="social-icon"
              href="https://deltawaresolution.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={18} />  
            </a>
          </li>
          <li>
            <a className="social-icon"
              href="https://www.youtube.com/@DeltawareSolution" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
          </li>
          <li>
            <a className="social-icon"
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} /> 
            </a>
          </li>
          <li>
            <a className="social-icon"
              href="mailto:example@example.com" 
              aria-label="Email"
            >
              <IoMdMail size={18} />
            </a>
          </li>
        </ul>

        {/* Center Text (Middle on mobile) */}
        <div className="order-0 order-md-1 text-center my-1 my-md-0 mx-auto mx-md-0">
          <p className="m-0 fw-bold" style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)" }}>
            Do Your Training under the guidance of Experts <FaBookOpen size={14} />
          </p>
        </div>

        {/* Register Button (Bottom on mobile) */}
        <div className="order-2 order-md-2 text-center text-md-end mt-1 mt-md-0">
          <button 
            type="button" 
            className="register-btn" 
            aria-label="Register"
          >
            Register Here!! <FaArrowRight size={12} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavBar2;