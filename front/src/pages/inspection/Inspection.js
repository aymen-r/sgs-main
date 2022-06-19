import React from "react";
import "./inspection.css";
import Layout from "../Layout/Layout";
import img1 from "./inspection_hero.jpg";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inspection = () => {
  return (
    <Layout>
      <div className="inspc">
        <div className="heading">
          <h1>INSPECTION SERVICES</h1>
          <hr className="hr" />

          <p>
            Inspection services from SGS help you to reduce risk and ensure
            quality and accuracy, as well as meeting regulatory requirements.
          </p>
        </div>
        <img src={img1} alt="hello" />
        <div className="sectors">
          <p>
            Whether you are developing products, projects, or processes, you
            need trusted independent inspection to ensure that both your legal
            obligations and the standards you expect are met, at every stage.
            Our comprehensive range of world-leading inspection services helps
            you to reduce risk, control quality and quantity, and meet all
            relevant regulatory requirements across different regions and
            markets.
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
