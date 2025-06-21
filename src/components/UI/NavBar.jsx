import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

const NavBar = () => {
  const collapseRef = useRef(null);

  // 🛠 Close menu on NavLink click
  const handleLinkClick = () => {
    const navbar = collapseRef.current;
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg px-2 md-px-3 shadow-lg"
      style={{ backgroundColor: "#212529" }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <h1 style={{ margin: 0, color: "#fff" }}>DeltaWareX</h1>
        </NavLink>

        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="text-light">
            <FiAlignJustify size={33} />
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="mainNavbar"
          ref={collapseRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-light fw-bold fs-6"
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link text-light fw-bold fs-6"
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/career"
                className="nav-link text-light fw-bold fs-6"
                onClick={handleLinkClick}
              >
                Career
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-link text-light fw-bold fs-6"
                onClick={handleLinkClick}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link text-light fw-bold fs-6"
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
