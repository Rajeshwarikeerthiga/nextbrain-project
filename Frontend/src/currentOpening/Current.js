import React from "react";
import "./current.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { ImCommand } from "react-icons/im";
import { CiLocationOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
class Current extends React.Component {
  constructor() {
    super();
    this.state = {
      job: []
    }
  }
  componentDidMount = async () => {
    const locationDD = await axios({
      method: 'GET',
      url: 'http://localhost:8900/joblist',
      headers: { 'Content-Type': 'application/json' }
    });
    this.setState({ job: locationDD.data });
  }
  handleCareerNavigate = (id) => {
    this.props.history.push(`/carrer?job_id=${id}`);
    // this.props.history.push(/details?restaurants=${id})
  };
  render() {
    const { job } = this.state;
    return (
      <>
        <div className="second">
          <h3 className="co">Current Openings</h3>
          <p className="pp">Working together, everything is possible.</p>
          <div className="job">
            <div className="openings">
              {job.map((item) => {
                return <div className="job_box">
                  <h1>{item.name}</h1>
                  <div className="dis">
                  <p><ImCommand /> {item.department}</p>
                  <p><CiLocationOn /> {item.location}</p>
                  <p><FaBriefcase /> {item.year}</p>
                  </div>
                  <button className="view_butt" onClick={()=> this.handleCareerNavigate(item.job_id)}>
                    View
                  </button>                
                  </div>
              })}
              {/* <h2>Full Stack Engineer</h2>
              <p>
              <ImCommand />Engineer
              </p>
              <p>
              <CiLocationOn />Banglore, India
              </p>
              <p>
              <FaBriefcase />  0-1 years
              </p>
              <button className="view" onClick={this.handleCareerNavigate}>
                View
              </button> */}
            </div>
            {/* <div className="openings">
              <h2>Manager Talent Acquisition</h2>
              <p>
                 Human Resources
              </p>
              <p>
                 Chennai, India
              </p>
              <p>
                 0-3 years
              </p>
              <button className="view" onClick={this.handleCareerNavigate}>View</button>
            </div>
            <div className="openings">
              <h2>Graphic Designer</h2>
              <p>
                 Associate
              </p>
              <p>
                 Banglore, India
              </p>
              <p>
                 3-5 years
              </p>
              <button className="view" onClick={this.handleCareerNavigate}>View</button>
            </div>
            <div className="openings">
              <h2>HR Intern</h2>
              <p>
                 Human Resources
              </p>
              <p>
                 Banglore, India
              </p>
              <p>
                 0-1 years
              </p>
              <button className="view" onClick={this.handleCareerNavigate}>View</button>
            </div>
            <div className="openings">
              <h2>Full Stack Engineer Intern</h2>
              <p>
                 Engineer
              </p>
              <p>
                 Chennai, India
              </p>
              <p>
                0-1 years
              </p>
              <button className="view" onClick={this.handleCareerNavigate}>View</button>
            </div>
            <div className="openings">
              <h2>Sales Executive</h2>
              <p>
                 Engineer
              </p>
              <p>
                 Banglore, India
              </p>
              <p>
                 0-1 years
              </p>
              <button className="view" onClick={this.handleCareerNavigate}>View</button>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Current);
