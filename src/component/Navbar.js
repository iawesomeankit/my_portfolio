import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  return (
    <nav className="navbar">
      <Link to="/">
        <h3 className="logo">ap.</h3>
      </Link>
      <ul
        className={mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#service">
          <li>Projects</li>
        </a>
        <a href="#skill">
          <li>Skills</li>
        </a>
        <a href="#contact">
          <li id="cntc">CONTACT ME</li>
        </a>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
        {mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
