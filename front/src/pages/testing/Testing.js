import React from "react";
import "./inspection.css";
import Layout from "../Layout/Layout";
import img1 from "./testing hero.jpg";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inspection = () => {
  return (
    <Layout>
      <div className="inspc">
        <div className="heading">
          <h1>TESTING SERVICES</h1>
          <hr className="hr" />

          <p>
            As a world leader in testing, we offer over 140 years' experience,
            providing a broad range of services to clients around the globe.
          </p>
        </div>
        <img src={img1} alt="hello" />
        <div className="sectors">
          <p>
            Our global network of laboratories and testing facilities, staffed
            by knowledgeable and experienced personnel, help you to reduce
            risks, shorten time to market and demonstrate the quality and safety
            of materials, components or products.
          </p>

          <p>Choose a sector to learn more about what we offer:</p>
          <div>
            <Row>
              <Col className="ins-sect" sm={7}>
                AGRICULTURE & FOOD
              </Col>
              <Col className="ins-sect" sm={5}>
                CERTIFICATION
              </Col>
            </Row>
            <Row>
              <Col className="ins-sect" sm={7}>
                CHEMICAL
              </Col>
              <Col className="ins-sect" sm={5}>
                CONSTRUCTION
              </Col>
            </Row>
            <Row>
              <Col className="ins-sect" sm={7}>
                CONSUMER GOODS & RETAIL
              </Col>
              <Col className="ins-sect" sm={5}>
                ENERGY
              </Col>
            </Row>
            <Row>
              <Col className="ins-sect" sm={7}>
                INDUSTRIAL MANUFACTURING
              </Col>
              <Col className="ins-sect" sm={5}>
                LIFE SCIENCES
              </Col>
            </Row>
            <Row>
              <Col className="ins-sect" sm={7}>
                MINING
              </Col>
              <Col className="ins-sect" sm={5}>
                OIL & GAS
              </Col>
            </Row>
            <Row>
              <Col className="ins-sect" sm={7}>
                PUBLIC SECTOR
              </Col>
              <Col className="ins-sect" sm={5}>
                TRANSPORTATION
              </Col>
            </Row>
            <Row>
              <Col className="ins-sect" sm={7}>
                ENVIRONMENT
              </Col>
              <Col className="ins-sect" sm={5}>
                HEALTH & SAFETY
              </Col>
            </Row>
          </div>
        </div>

        <Row className="touch">
          <Col className="touch-left" sm={5}>
            <h3>CONTACT US</h3>
            <Link to={"/contact"}>
              <button>SEND MESSAGE</button>
            </Link>
          </Col>
          <Col className="touch-right" sm={7}>
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

export default Inspection;
