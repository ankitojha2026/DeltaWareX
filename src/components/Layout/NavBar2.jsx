
import { FaArrowRight, FaBookOpen, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const NavBar2 = () => {
  return (
    <div className="container-fluid px-5 py-0" style={{ backgroundColor: "#ef6026", color: "white" }}>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-3 fs-4">
          <li>
            <a className="hover-effect"
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <FaFacebook />  
            </a>
          </li>
          <li >
            <a className="hover-effect"
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a className="hover-effect"
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <FaLinkedin /> 
            </a>
          </li>
          <li>
            <a className="hover-effect"
              href="mailto:example@example.com" 
              style={{ color: "white" }}
            >
             <IoMdMail />
            </a>
          </li>
        </ul>


        <div > <p className="fw-bold ">Do Your Training under the guidance of Experts  {<FaBookOpen />}</p></div>

        <div className="col-md-3 text-end hover-effect">
          <button 
  type="button" 
  className="BTN  fw-bold " 
>
  Register Here!! {<FaArrowRight />}
</button>
        </div>
      </header>
    </div>
  );
};

export default NavBar2;