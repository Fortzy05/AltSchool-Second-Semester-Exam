import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import AltSchoolLogo from "../images/AltSchoolLogo.png";
import { SEO } from "../exports/Exports";

const Home = () => {
  return (
    <>
      <SEO
        title={"Custom Counter App"}
        description={"AltSchool Africa Second Semester Exam Project"}
        name={"Samuel Oso"}
      />
      <div className="home">
        <div className="logo">
          <img alt="AltSchool-Logo" src={AltSchoolLogo} />
        </div>
        <div className="center">
          <div className="home__card">
            <h1>WELCOME</h1>
            <p>
              This is a presentation of AltSchool's second semester exam
              project. It is a simple custom counter hook with properties like;
              increment, decrement, reset and setValue functions. It was
              implemented using react and useReducer hook.
            </p>
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