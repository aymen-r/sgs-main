import React from "react";
import "./inspection.css";
import Layout from "../Layout/Layout";

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Certif = () => {
  return (
    <Layout>
      <div className="inspc">
        <div className="heading">
          <h1>CERTIFICATION SERVICES</h1>
          <hr className="hr" />

          <h5>
            Our world-leading certification services enable you to demonstrate
            that your products, processes, systems or services are compliant
            with national and international regulations and standards.
          </h5>
        </div>

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

export default Certif;
