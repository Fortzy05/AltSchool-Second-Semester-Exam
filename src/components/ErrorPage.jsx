import React from "react";
import "../styles/ErrorPage.css";
import { Link } from "react-router-dom";
import AltSchoolLogo from "../images/AltSchoolLogo.png";
import ErrorImage from "../images/ErrorImage.png";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="logo nav">
        <img alt="AltSchool-Logo" src={AltSchoolLogo} />
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <div className="">
        <div className="">
          <img alt="Error-Img" src={ErrorImage} />
          <h3>Something went wrong!</h3>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
