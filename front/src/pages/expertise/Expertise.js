import React from "react";
import "./inspection.css";
import Layout from "../Layout/Layout";

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <Layout>
      <div className="inspc">
        <div className="heading">
          <h1>EXPERTISE</h1>
          <hr className="hr" />

          <h5>
            SGS provides worldwide, independent services that make a difference
            in people’s lives.
          </h5>
          <p>
            Our international experts help you operate in more efficient and
            sustainable ways by streamlining processes, improving quality and
            productivity, reducing risk, verifying compliance and increasing
            speed to market. Our core service activities cover all industry
            sectors and touch the products and services that consumers around
            the world rely on every day.
          </p>
        </div>

        <Row className="expertise d-flex">
          <Col className="expertise-left exp1" sm={6}>
            <h4>AGRICULTURE AND FOOD</h4>
          </Col>
          <Col className="expertise-left exp2" sm={6}>
            <h4>CHEMICAL</h4>
          </Col>
        </Row>
        <Row className="expertise d-flex">
          <Col className="expertise-left exp3" sm={6}>
            <h4>CONSTRUCTION</h4>
          </Col>
          <Col className="expertise-left exp4" sm={6}>
            <h4>CONSUMER GOODS AND RETAIL</h4>
          </Col>
        </Row>
        <Row className="expertise d-flex">
          <Col className="expertise-left exp5" sm={6}>
            <h4>ENERGY</h4>
          </Col>
          <Col className="expertise-left exp6" sm={6}>
            <h4>ENVIRONMENT</h4>
          </Col>
        </Row>

        {/* contact */}
        <Row className="touch">
          <Col className="touch-left" sm={4}>
            <h3>CONTACT US</h3>
            <Link to={"/contact"}>
              <button>SEND MESSAGE</button>
            </Link>
          </Col>
          <Col className="touch-right" sm={8}>
            <h3>GET IN TOUCH</h3>
            <p>
              Alameda Xingu, 512 - 19º andar Alphaville Industrial Barueri – SP,
              06455-030 Brazil
            </p>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Expertise;
