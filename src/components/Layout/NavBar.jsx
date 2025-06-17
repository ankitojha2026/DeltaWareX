import NavBar2 from "./NavBar2";

const NavBar = () => {
  return (
   <> <NavBar2/>
    <nav className="navbar navbar-expand-lg navbar-light px-5" style={{ backgroundColor: "#ffffff" }}>
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
              <a className="nav-link active fw-bold fs-6 hover-effect" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold fs-6 hover-effect" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold fs-6 hover-effect" href="/career">Career</a> {/* Fixed spelling from "Carrier" to "Career" */}
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold fs-6 hover-effect" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold fs-6 hover-effect" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavBar;