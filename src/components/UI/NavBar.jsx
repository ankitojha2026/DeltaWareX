import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-light px-5 md-px-3" style={{ backgroundColor: "#ffffff" }}>
      <div className="container-fluid">
        {/* Logo/Brand - Left Side */}
        <a className="navbar-brand" href="/">
          <h1 style={{ margin: 0 }}>DeltaWareX</h1> {/* Added margin:0 to h1 for better alignment */}
        </a>
        
        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNavbar" 
          aria-controls="mainNavbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links - Right Side */}
        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink  to="/"  className="nav-link active fw-bold fs-6 hover-effect" >
              Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link fw-bold fs-6 hover-effect">About</NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link fw-bold fs-6 hover-effect" to="/career">Career</NavLink> {/* Fixed spelling from "Carrier" to "Career" */}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold fs-6 hover-effect" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold fs-6 hover-effect" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavBar;