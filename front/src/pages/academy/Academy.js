import React from "react";
import "./inspection.css";
import Layout from "../Layout/Layout";

import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Academy = () => {
  return (
    <Layout>
      <div className="inspc">
        <div className="heading">
          <h1>SGS ACADEMY</h1>
          <hr className="hr" />

          <h5>
            How can you ensure that your business or school is prepared for
            technological and societal change?
          </h5>
          <p>
            Brazil is facing an era marked by change that is affecting
            businesses and educational institutions. Advances in technology mean
            that businesses must deal with new processes, new rules and new
            management system specifications. Schools and universities must
            accommodate the needs of students from a wide variety of
            backgrounds, while adapting to changes to the BNCC (Base National
            Common Curriculum) and providing students with quality content that
            is accessible online.
          </p>
          <p>
            Training is the key to keeping up with the pace of change. Personal
            and professional training allows businesses to remain competitive
            and provides schools and universities with the tools to transmit
            knowledge in a meaningful way.
          </p>
          <h3>
            SUPPORTING YOU WITH CUSTOMIZED, HIGH QUALITY TRAINING SOLUTIONS
          </h3>
          <p>
            SGS Academy provides businesses and schools with customized training
            courses that can be accessed face to face, online – with videos and
            interactive presentations – or in a hybrid format. Our dedicated
            team of experts will design a cost effective training solution for
            you, in line with your learning objectives and strategic indicators.{" "}
          </p>

          <h3>COURSES FOR BUSINESS</h3>

          <p>
            We offer training for all areas and segments of business, including:
          </p>
          <ul>
            <li>Automotive</li>
            <li>Industry</li>
            <li>Logistics and supplies</li>
            <li>Food safety </li>
            <li>Medical and cosmetics</li>
            <li>Sustainability and the environment</li>
            <li>Social responsibility</li>
            <li>Management</li>
            <li>Human resources (HR)</li>
            <li>Quality and risk management, including ISO 9001 compliance</li>
          </ul>
          <p>Our training is available face-to-face and online.</p>
          <h3>COURSES FOR SCHOOLS</h3>
          <p>
            We provide training for educators at all levels: elementary, high
            school, undergraduate and postgraduate. Our course content is
            aligned with the new BNCC. We have an elaborate bank of test
            questions and offer simulations for exams – including ENEM and ENADE
            – given by the largest and best universities in Brazil.
          </p>
          <h3>TAILORED TRAINING FROM A GLOBAL LEADER</h3>
          <p>
            We are a global leader in professional training, combining global
            expertise with the knowledge of local specialists. Contact us to
            learn more about SGS Academy training solutions or to request a
            proposal.
          </p>
          <p>Fields marked with an asterisk (*) are mandatory.</p>
          <Form className="contact-form">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalReport"
            >
              <Form.Label column sm={4}>
                Inquiry type*
              </Form.Label>
              <Col sm={8}>
                <Form.Select aria-label="Default select example">
                  <option>Select from the list</option>
                  <option value="brazil">Request information</option>
                  <option value="2">Request quotation</option>
                  <option value="3">recruitement & jobs</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                First name *
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Last name *
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Company name
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Job Title
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="number" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Your location*
              </Form.Label>
              <Col sm={8}>
                <Form.Select aria-label="Default select example">
                  <option>Select from the list</option>
                  <option value="brazil">Brazil</option>
                  <option value="2">UAE</option>
                  <option value="3">Tunisia</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Phone
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="number" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Email*
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="email" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                How can we help?*
              </Form.Label>
              <Col sm={8}>
                <textarea
                  class="form-control"
                  id="textAreaExample1"
                  rows="4"
                ></textarea>
              </Col>
            </Form.Group>

            <Form.Group className="mb-3">
              <Col className="d-flex justify-content-center mt-5">
                <Button variant="danger" type="submit">
                  SEND
                </Button>
              </Col>
            </Form.Group>
          </Form>
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

export default Academy;
