import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";

import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Ingela</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="navbar" spy={true} smooth={true}>Home</Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                 Interships
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;