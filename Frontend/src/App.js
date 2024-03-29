import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import Current from "./currentOpening/Current";
import Benefits from "./Benefits/Benefits";

function App() {
  return (
    <>
      <div>
        <div className="first">
          {/* <div className="nav">
            <img src={logo} className="logo" />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
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
              <li className="contact">
                <a href="#contact">
                  Contact us <i className="bi bi-arrow-right"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-globe2"></i>
                </a>
              </li>
            </ul>
          </div>
          <br />
          <br />
          <br />
          <br /> */}
          <div className="content">
            <h2>Be a part of something special</h2>
            <p>
              We are always looking for people with skills, passion and a great
              attitude to join our team.
            </p>
          </div>
          <div className="boxes">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 dropdowns">
              <label>Industry</label>
              <br />
              <select name="industry" className="select">
                <option value="volvo">Select industry</option>
                <option value="saab">IT</option>
                <option value="opel">Non It</option>
              </select>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 dropdowns">
              <label>Location</label>
              <br />
              <select name="industry" className="select">
                <option value="volvo">Select Location</option>
                <option value="saab">Chennai</option>
                <option value="opel">Coimbatore</option>
              </select>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 dropdowns">
              <label>Search</label>
              <br />
              <input type="search" className="select" placeholder="Search" />
            </div>
          </div>
        </div>
        <Current/>
        <Benefits/>

      </div>
    </>
  );
}

export default App;
