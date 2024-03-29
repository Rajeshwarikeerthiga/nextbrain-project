import React from "react";
import "./Benefits.css";
import career from "../assets/career.webp";
import event from "../assets/event.jpg";
import team from "../assets/team.jpg";
import learning from "../assets/learning.jpg";
import medical from "../assets/medical.webp";
import research from "../assets/research.png";
const Benefits = () => {
  return (
    <>
      <div className="three">
        <h2>Perks & Benifits</h2>
        <p>Elevate your Life with Our Exceptional Benifits</p>
        <div className="perks">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 benefit">
            <img src={career} className="image" />
            <h3>Fast Career growth</h3>
            <p>
              Give your career a boost by joining one of the most successful
              organisations in the compliance industry.
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 benefit">
            <img src={event} className="image" />
            <h3>Fun-filled events</h3>
            <p>
              Say Good bye to cliche work schedules.Let Ricago make your working
              experience more enjoyable by organizing fun-filled activities
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 benefit">
            <img src={team} className="image" />
            <h3>Great team</h3>
            <p>
              We belive in teamwork and work together to advance each other's
              careers.Our warm welcome is awaiting your presence
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 benefit">
            <img src={learning} className="image" />
            <h3>Immense learning</h3>
            <p>
              Get a chance to collaborate with and learn from senior executives.
              Get inundated with material that will benefit it your profession.
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 benefit">
            <img src={medical} className="image" />
            <h3>Medical insurance Cover</h3>
            <p>
              We provide employee health insurance benefits and ensure that
              medical emergencies do not financially burden you.
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 benefit">
            <img src={research} className="image" />
            <h3>Research</h3>
            <p>
              Work on world className projects while researching, learning and
              developingcomplence products under the supervision of top senior
              management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
