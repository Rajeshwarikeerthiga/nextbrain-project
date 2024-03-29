import React, { useState } from "react";
import "./carrer.css";
import { TbRobotOff } from "react-icons/tb";

import queryString from "query-string";
import { ImCommand } from "react-icons/im";
import { CiLocationOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import Modal from "react-modal";

class Carrer extends React.Component {
  constructor() {
    super();
    this.state = {
      job_id: [],
      sumbitModeIsOpen: false,
    }
  }
  componentDidMount = async () => {
    const qs = queryString.parse(this.props.location.search);
    const job_id = Number(qs.job_id);
    const locationDD = await axios({
      method: 'GET',
      url: `http://localhost:8900/joblist/${job_id}`,
      headers: { 'Content-Type': 'application/json' }
    });
    this.setState({ job_id: locationDD.data });
  }
  handleClose = () =>{
    this.setState({ sumbitModeIsOpen: false })

  }
  handleApplyNavigate = () => {
    this.setState({ sumbitModeIsOpen: true })
    // this.props.history.push("/apply");
  };
  render() {
    const { job_id, sumbitModeIsOpen } = this.state;

    return (
      <>
        <div className="fsd">
          {job_id.map((value) => {
            return <div>
              <h1>{value.name}</h1>
              <p className="ppp">
                We are Excited to find an experienced & motivated individual to join
                our team helpus
                <br />
                drive succesful project outcomes
              </p>
              <div className="dis1">
                <p className="p1">
                  <ImCommand /> {value.department}
                </p>
                <p className="p2">
                  <CiLocationOn /> {value.location}
                </p>
                <p className="p3">
                  <FaBriefcase /> {value.year}
                </p>
                <p className="p4">
                  <IoMdPerson /> {value.vacancy}
                </p>
               
              </div>
              <button className="apply" onClick={this.handleApplyNavigate}>
                  Apply Now
                </button>
            </div>
          })}
           <Modal isOpen={sumbitModeIsOpen}>
                  <div>
                    <form className="container">
                      <IoMdClose onClick={this.handleClose}/>
                      <h2 className="head">Submit Resume</h2>
                      <p className="p">Want to get in Touch?Let us kmow how we can help</p>

                      <div className="name">
                        <label className="head1">Name</label>
                        <br />
                        <input className="inp1" type="text" placeholder="Enter Name" />
                      </div>
                      <div className="email">
                        <label className="head2">Email</label>
                        <br />
                        <input className="inp2" type="text" placeholder="Enter email" />
                      </div>
                      <br />

                      <div className="phone">
                        <label className="head3">Phone number</label>
                        <br />
                        <input className="inp3" type="text" placeholder="Mobile" />
                      </div>
                      <div className="pos">
                        <label className="head4">Position</label>
                        <br />
                        <input className="inp4" type="text" placeholder="Full stack Engineer" />
                      </div>
                      <br />
                      <div className="exp">
                        <label className="head5">Area of Expertise</label>
                        <br />
                        <input className="inp5" type="text" placeholder="Area of Expertise" />
                      </div>
                      <div className="ctc">
                        <label className="head6">Expected CTC</label>
                        <br />
                        <input className="inp6" type="text" placeholder="Expected CTC" />
                      </div>
                      <br />
                      <div className="city">
                        <label className="head7">City</label>
                        <br />
                        <input className="inp7" type="text" placeholder="City" />
                      </div>
                      <div className="resu">
                        <label className="head8">Upload Resume</label>
                        <br />
                        <input
                          className="inp8"
                          type="text"
                          placeholder="only doc,docx,.pdf.odt.rtf"
                        />
                      </div>
                      <br />
                      <div className="testarea">
                        {" "}
                        <label className="head9">Message</label>
                        <br />
                        <textarea className="inp9"></textarea>
                      </div>
                      <br />

                      <button className="check">
                        <input className="inp10" type="checkbox" />
                        I'm not Robot
                        <TbRobotOff style={{fontSize:"30px"}}/>
                      </button>
                      <button className="submit" onClick={this.handleClose}>Submit</button>
                    </form>
                  </div>
                </Modal>
          {/* <h1 className="fse">Full Stack Engineer</h1>
          <p className="p">
            We are Excited to find an experienced & motivated individual to join
            our team helpus
            <br />
            drive succesful project outcomes
          </p> */}
          <div className="loc">
            {/* <p className="p1">
              <ImCommand /> Engineer
            </p>
            <p className="p2">
              <CiLocationOn /> Banglore, India
            </p>
            <p className="p3">
              <FaBriefcase /> 0-1 years
            </p>
            <p className="p4">
              <IoMdPerson /> 2 vaccancy
            </p>
            <button className="apply" onClick={this.handleApplyNavigate}>
              Apply Now
            </button> */}
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <h2>Job summary</h2>
          <p className="p5">
            We are seeking a dedicated Full Stack Engineer to join our dynamic
            team and contribute to our traiblazing mission.We've secured
            <br />
            funding from some of world's foremost inventors,We are ready for the
            exciting journey that lies ahead.Will you join us?{" "}
          </p>
          <br />
          <br />
          <h2 className="resp">Responsibilities</h2>
          <ul className="res">
            <li>
              Write clean,maintainable & efficient code,in alignment with
              software development best practises
            </li>
            <li>
              Design & implement front-end using React,ensure optimal user
              interface & experience
            </li>
            <li>
              leverage Django for developing and secure & efficient backend
              functionalities
            </li>
            <li>
              Integrate with database,internal & external services & API's{" "}
            </li>
            <li>
              collabrate with cross functions including product ,Design,quality
              assurance to drive the success of our product
            </li>
            <li>
              Participate in all phases of the software development lifecycle
              ,from planning & design to testing the deployment
            </li>
            <li>
              Identify the troubleshoot & resolve bugs & performance issue &
              oversee software updates
            </li>
            <li>
              Stay upsated on emerging technologies & incorporate them into
              operation and activities
            </li>
          </ul>
          <h2>Qualification</h2>
          <ul className="qua">
            <li>A minimum 1 year experience of Full Stack Engineer.</li>
            <li>
              Demonstrated experience with Django for backend development &
              React front-end development.
            </li>
            <li>Knowledge of Databases such as PostgreSQL or MySQL . </li>
            <li>Understanding RESTFul API's & HTTP & Web Technology.</li>
            <li>Proficiency with version control system such as Git.</li>
            <li>Proven ability to test debug software application.</li>
            <li>
              Familiraties with responsive design principles & implementation.
            </li>
            <li>
              Excellent problem solving abilities with Knack for innovative
              thinking & appititude to incorporate feedback.
            </li>
            <li>Strong verbal & written communication skills in English.</li>
          </ul>
          <h2>Preferred Skills</h2>
          <ul className="pre">
            <li>
              Experience with Cloud platforms such as AWS,Google Cloud
              Platforms,or Azure is a plus
            </li>
            <li>
              Familiraty with containerization techonology like Docker or
              Kubernetes.
            </li>
            <li>Experience with CI/CD pipelines for deployment. </li>
          </ul>
          <h2>Benefits & Perks</h2>
          <p className="ben">
            Aspino offers an array of benefits including competitive
            salaries,equipty options free food & beverages & weekly team
            outings!
          </p>
          <h2>Salary Range</h2>
          <p className="sal">Salary Range :12PA-24LPA</p>
          <h2>Location</h2>
          <p className="Ban">Bangalore,india.</p>
        </div>
      </>
    );
  }
}

export default Carrer;
