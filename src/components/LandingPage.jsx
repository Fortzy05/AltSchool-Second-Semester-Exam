import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";
import AltSchoolLogo from "../images/AltSchoolLogo.png";
import { SEO } from "../exports/Exports";

const LandingPage = () => {
  return (
    <>
      <SEO
        title={"My Counter App"}
        description={"AltSchool Africa Second Semester Project"}
        name={"Omorodion Fortune"}
      />
      <div className="landing_page">
        <div className="logo">
          <img alt="AltSchool-Logo" src={AltSchoolLogo} />
        </div>

        <div className="center">
          <div className="landing__page__container">
            <h1>
              WELCOME TO MY COUNTER APPLICATION
            </h1>
            <Link to="/counter">
              <button className="">
                Navigate to Counter
                <i className="large arrow right icon"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;