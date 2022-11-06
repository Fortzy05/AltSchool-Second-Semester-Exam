import React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter, LandingPage, ErrorPage } from "../Exports/Exports";

const Navigation =() => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Navigation;
