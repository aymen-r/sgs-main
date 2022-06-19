import React from "react";
import { Link } from "react-router-dom";
import "./objectiv.css";

const Objectives = () => {
  return (
    <div className="obj-numbers">
      <h2>OUR PURPOSE</h2>
      <div className="objs">
        <div className="obj">
          <h3>Better</h3>
          <p>We help businesses trade with integrity and trust</p>
        </div>
        <div className="obj">
          <h3>Safer</h3>
          <p>We ensure safety in everyday life, at home and at work</p>
        </div>
        <div className="obj">
          <h3>Interconnected</h3>
          <p>We help new technology to reach consumers quickly</p>
        </div>
      </div>
      <div className="more-links">
        <Link to={"/about-SGS"}>
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Objectives;
