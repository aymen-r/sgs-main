import React from "react";
import { Link } from "react-router-dom";
import "./solutions.css";

const Solutions = () => {
  return (
    <div className="solutions ">
      <h1>FEATURED SOLUTIONS</h1>
      <ul className="sol-list">
        <li>
          <Link to={"/inspection"}>
            <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
            <h3>Inspection</h3>
          </Link>
        </li>
        <li>
          <Link to={"/verification"}>
            <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
            <h3>Verification</h3>
          </Link>
        </li>
        <li>
          <Link to={"/testing"}>
            <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
            <h3>Testing</h3>
          </Link>
        </li>
        <li>
          <Link to={"/certification"}>
            <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
            <h3>Certification</h3>
          </Link>
        </li>
        <li>
          <Link to={"/academy"}>
            <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
            <h3>SGS Academy</h3>
          </Link>
        </li>
        <li>
          <Link to={"/product"}>
            <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
            <h3>Product Certification</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Solutions;
