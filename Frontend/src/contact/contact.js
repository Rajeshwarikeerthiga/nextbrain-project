import React from "react";
import "./contact.css";
import logo from '../assets/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    
    <div class="main">
    <div class="card">
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 card1">
        <div class="card2">
          <img className="logoimg" src={logo} alt="#"/>
          <p>Aspino Group is a decdicated provider of tailored solutions </p>
        <div>
              <h4><b>Address</b></h4>
              <p>M-98,9thMain,Lic Housing Colony HAL 3rd Stage,Jeevanbimangar,Banglore-560075</p>
            </div>
              <div>
                <p><b>Email:</b>info@aspinohr.com</p>
                <p><b>Mobile:</b>+91 80 4115 2422</p>
                <a href="#" class="social"><FaFacebookF /></a>
                            <a href="#" class="social"><FaXTwitter /></a>
                            <a href="#" class="social"><FaInstagram /></a>
                            <a href="#" class="social"><FaYoutube /></a>
              </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 card1">
        <div class="card2">
          <h4><b>SERVICES</b></h4>
          <p><a className="link" href="#">Professional staffing</a></p>
          <p> <a className="link" href="#">Contract staffing</a></p>
          <p><a className="link" href="#">Temporary staffing Projects</a></p>
          <p> <a className="link" href="#">Visa transition services </a></p>
          <p><a className="link" href="#">IT staffing</a></p>
          <p><a className="link" href="#">Project recruitment</a></p>
          <p><a className="link" href="#">Permanent recruitment</a></p>
          <p><a className="link" href="#">Payroll management</a></p>
        </div>
      </div>

      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 card1">
        <div class="card2">
          <h4><b>QUICK LINKS</b></h4>
          <p><a className="link" href="#">Home</a></p>
          <p> <a className="link" href="#">About us</a></p>
          <p><a className="link" href="#">Careers</a></p>
          <p> <a className="link" href="#">Blog</a></p>
          <p><a className="link" href="#">Case studies</a></p>
          <p><a className="link" href="#">Testimonials</a></p>
          <p><a className="link" href="#">Terms & Conditions</a></p>
          <p><a className="link" href="#">Privacy Policy</a></p>
          <p><a className="link" href="#">Faq</a></p>
          <p><a className="link" href="#">Contact us</a></p>
 
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 card1">
        <div class="card2">
          <h4><b>CONTACT US</b></h4>
          <form>         
             <input type="name" placeholder="Name"/><br/>
          <input type="email"placeholder="Email"/><br/>
          <input type="number" placeholder="Mobile"/><br/>
          <textarea>Message</textarea>
          <input class="button" type="submit" value="submit"/>
        </form>

        </div>
      </div>

    </div>
 
    <div class="footer">
      
      <p >@ 2024 Aspino Groups All Rights Reserved</p>
    </div>
   
  </div>
    </>
  );
};

export default Contact;
