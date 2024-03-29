import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
function Navbar() {
  return (
    <>
      <div>
          <div className="nav" >
            <img src={logo} className="logo" />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">
                  <select name="service" id="services">
                    <option value="volvo">Services</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </Link>
              </li>
              <li>
                <Link to="/contact">Industries</Link>
              </li>
              <li>
                <Link to="/carrer">Carrer</Link>
              </li>
              <li>
                <a href="#contact">
                  <select name="resource" id="resource">
                    <option value="volvo">Resource</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </a>
              </li>
              <li>
                <button className="btn">Contact us<FaArrowRightLong/> </button>
              </li>
              <li className="globe">
                
                <CiGlobe/>
                
              </li>
            </ul>
          </div>
      </div>
    </>
  );
}

export default Navbar;
