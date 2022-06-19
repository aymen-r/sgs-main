import React, { useState } from "react";
import { Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import "./contactUs.css";
import { BsTelephone } from "react-icons/bs";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactUs = () => {
  const [inquiry, setInquiry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/client/contact", {
        inquiry,
        firstName,
        lastName,
        companyName,
        jobTitle,
        location,
        phone,
        email,
        text,
      });
      console.log(data);
      toast.success("Message Sent");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="contact">
      <div className="container-sm ">
        <div className="d-flex justify-content-between">
          <h1>Contact Us</h1>
          <Link className="close" to={"/"}>
            <h5>close x</h5>
          </Link>
        </div>

        <hr className="hr" />
        <Tabs
          defaultActiveKey="EMAIL US"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="EMAIL US" title="EMAIL US">
            <h3>Please complete the form to send us a message.</h3>
            <p>Fields marked with an asterisk (*) are mandatory.</p>
            <Form onSubmit={submitHandler} className="contact-form">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalReport"
              >
                <Form.Label column sm={4}>
                  Inquiry type*
                </Form.Label>
                <Col sm={8}>
                  <Form.Select
                    aria-label="Default select example"
                    value={inquiry}
                    onChange={(e) => setInquiry(e.target.value)}
                  >
                    <option>Select from the list</option>
                    <option value="Request_information">
                      Request information
                    </option>
                    <option value="Request_quotation">Request quotation</option>
                    <option value="recruitement">recruitement & jobs</option>
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
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
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
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
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
                  <Form.Control
                    type="text"
                    value={companyName}
                    onChange={(e) => setcompanyName(e.target.value)}
                  />
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
                  <Form.Control
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
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
                  <Form.Control
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
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
                  <Form.Control
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
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
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                    className="form-control"
                    id="textAreaExample1"
                    rows="4"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </Col>
              </Form.Group>

              <Form.Group className="mb-3">
                <Col className="d-flex justify-content-center mt-5">
                  <Button variant="danger" type="submit">
                    SEND MESSAGE
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Tab>
          <Tab eventKey="CALL OR VISIT" title="CALL OR VISIT">
            <hr />
            <div className="location-contact">
              <h5>SGS DO BRASIL LTDA.</h5>
              <p>
                Alameda Xingu, 512 - 19º andar Alphaville Industrial Barueri –
                SP, 06455-030 Brazil
              </p>
              <BsTelephone /> : +55 11 3883 8880
            </div>
            <hr />
            <div className="location-contact">
              <h5>SGS ACADEMY - SÃO PAULO - SP</h5>
              <p>
                Av. Paulista, 807 - 16º andar Bairro Bela Vista Sao Paulo – SP,
                01311-100 Brazil
              </p>
              <BsTelephone /> +55 11 3254 7825 <br />
              <BsTelephone /> +55 11 3254 7835
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ContactUs;
