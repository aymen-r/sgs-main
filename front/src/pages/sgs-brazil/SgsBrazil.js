import React from "react";
import "./inspection.css";
import Layout from "../Layout/Layout";

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SgsBrazil = () => {
  return (
    <Layout>
      <div className="inspc">
        <div className="heading">
          <h1>SGS IN BRAZIL</h1>
          <hr className="hr" />

          <p>
            Recognized as the benchmark for quality and integrity, SGS has been
            in Brazil since 1938. Our employees, in major cities and ports
            around the country, work to generate trust among people,
            organizations, institutions and governments. We offer a portfolio of
            solutions for market segments nationwide, including:
          </p>

          <ul>
            <li>Oil, gas, chemicals and biofuels</li>
            <li>
              Management system certification, customized audit solutions and
              training
            </li>
            <li>
              Testing, auditing and product certification for consumer goods and
              retail
            </li>
            <li>Minerals services for ores and metallurgical products</li>
            <li>Governments and institutions services</li>
            <li>Agricultural and food industry solutions</li>
            <li>Transportation solutions</li>
            <li>Environmental and occupational hygiene services</li>
            <li>
              Industrial services solutions for structural engineering and
              welding, including consultancy, defection detecting, inspections,
              industrial radiographic testing and training
            </li>
          </ul>
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

export default SgsBrazil;
