import React from "react";
import "./inspection.css";
import Layout from "../Layout/Layout";
import img1 from "./verification hero.jpg";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inspection = () => {
  return (
    <Layout>
      <div className="inspc">
        <div className="heading">
          <h1>VERIFICATION SERVICES</h1>
          <hr className="hr" />

          <p>
            Ensure your products, services and processes meet all relevant
            regulations and standards with verification services from SGS.
          </p>
        </div>
        <img src={img1} alt="hello" />
        <div className="sectors">
          <p>
            Whatever your industry, compliance with the latest regulations and
            standards can be challenging. As the world’s leading verification
            company, we offer you unsurpassed accuracy, highly experienced
            specialists, state-of-the-art examination methodologies and a global
            network.
          </p>
          <p>
            As a result, we can help you ensure that your products, services and
            processes reach the latest national and international standards as
            efficiently and effectively as possible – wherever you are in the
            world.
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

export default Inspection;
