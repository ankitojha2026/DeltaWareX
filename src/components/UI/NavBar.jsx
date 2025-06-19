import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
   <>
    <nav className="navbar navbar-expand-lg  px-2 md-px-3 shadow-lg" style={{ backgroundColor: "#212529"  }}>
      <div className="container-fluid">
        {/* Logo/Brand - Left Side */}
        <NavLink className="navbar-brand" to="/">
          <h1 style={{ margin: 0 ,color: "#fff" }}>DeltaWareX</h1> {/* Added margin:0 to h1 for better alignment */}
        </NavLink>
        
        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler text-light" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNavbar" 
          aria-controls="mainNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className=" text-light "><FiAlignJustify size={33} /></span>
        </button>

        {/* Nav Links - Right Side */}
        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink  to="/"  className="nav-link text-light active fw-bold fs-6 hover-effect" >
              Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-light fw-bold fs-6 hover-effect">About</NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link fw-bold fs-6 text-light hover-effect" to="/career">Career</NavLink> {/* Fixed spelling from "Carrier" to "Career" */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold fs-6 text-light hover-effect" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold fs-6 text-light hover-effect" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
    </>
  );
};

export default NavBar;