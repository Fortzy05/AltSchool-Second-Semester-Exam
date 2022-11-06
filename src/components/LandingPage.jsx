import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";
import AltSchoolLogo from "../images/AltSchoolLogo.png";
import { SEO } from "../exports/Exports";

const Home = () => {
  return (
    <>
      <SEO
        title={"My Counter App"}
        description={"AltSchool Africa Second Semester Project"}
        name={"Omorodion Fortune"}
      />
      <div className="home">
        <div className="logo">
          <img alt="AltSchool-Logo" src={AltSchoolLogo} />
        </div>
        <div className="center">
          <div className="landing_page">
            <h1>WELCOME TO MY COUNTER APPLICATION</h1>
            <Link to="/counter">
              <button>Check it out!</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;