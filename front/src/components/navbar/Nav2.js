import React, { useState } from "react";
import "./navbar.css";
import {
  Container,
  Nav,
  Navbar,
  Button,
  Modal,
  Form,
  Row,
  FormControl,
} from "react-bootstrap";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
import { toast } from "react-toastify";
import QR from "../../pages/QR";
import { AiOutlineMail, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
const Nav2 = () => {
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //search
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState({});

  const [emailSender, setEmailSender] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      if (search === "") {
        toast.error("type report number");
        return;
      }
      const { data } = await axios.get(`/api/client/${search}`);

      setInfo(data);
      handleShow();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleSend = (e) => {
    e.preventDefault();
    try {
      const { data } = axios.post("/api/client/quote", {
        email: emailSender,
        ...info,
      });
      toast.success("Check your email box within 48 hours");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setEmailSender("");
    setSearch("");
    handleClose();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <div className="logo">
              <img src="/img/sgs-logo.png" alt="" />
            </div>
          </Link>
        </Navbar.Brand>
        <div className="nav-right-mobile d-flex justify-content-between align-items-center">
          <Link to={"/contact"}>
            <AiOutlineMail className="mail-icon" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  w-100  justify-content-end">
            <div className="search-wrapper">
              <form className="nav-form" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Test Report No"
                  className="input-nav"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <AiOutlineSearch
                  type="submit"
                  className="search-icon"
                  onClick={handleSearch}
                />
              </form>
              <ul className="menu-nav">
                <li className="menu-item-nav">Our Services</li>
                <li className="menu-item-nav">
                  <Link to={"/about-SGS"}>Our Company</Link>{" "}
                </li>
                <li className="menu-item-nav">News, Media & Resources</li>
                <li className="menu-item-nav">
                  <Link to={"/contact"}>Contact Us</Link>{" "}
                </li>
                <li className="menu-item-nav">
                  <Link to={"/office"}>SGS Offices & Labs</Link>{" "}
                </li>
                {/* <li className="menu-item-nav">Our Company</li>
                <li className="menu-item-nav">News, Media & Resources</li>
                <li className="menu-item-nav">Contact Us</li>
                <li className="menu-item-nav">SGS Offices & Labs</li> */}
              </ul>
              <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                size="xl"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Test Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form className="p-3">
                    <Form.Group
                      as={Row}
                      className="mb-4 "
                      controlId="formHorizontalReport"
                    >
                      <Form.Label>Report Number</Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="Report Number"
                        value={info.report_no}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-4"
                      controlId="formHorizontaldate"
                    >
                      <Form.Label>Date</Form.Label>

                      <Form.Control
                        type="date"
                        placeholder="Report Number"
                        value={info.createdAt?.split("T")[0]}
                        readOnly
                      />
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalName"
                    >
                      <Form.Label>Client Name</Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="Client Name"
                        value={info.name}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalName"
                    >
                      <Form.Label>Client Address</Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="Client Address"
                        value={info.address}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalName"
                    >
                      <Form.Label>Sample Name</Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="Sample Name"
                        value={info.sample_name}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalName"
                    >
                      <Form.Label>Sample Batch</Form.Label>

                      <Form.Control
                        type="number"
                        placeholder="Sample Batch"
                        value={info.sample_batch_no}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalName"
                    >
                      <Form.Label>Produced Date</Form.Label>

                      <Form.Control
                        type="date"
                        placeholder="Produced Date"
                        value={info.produced_date?.split("T")[0]}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalName"
                    >
                      <Form.Label>Manufactured</Form.Label>

                      <Form.Control
                        type="text"
                        placeholder=" Manufactured"
                        value={info.manufactured}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalName"
                    >
                      <Form.Label>Sgs Sample Number</Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="Sgs Sample Number"
                        value={info.sgs_sample_no}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalName"
                    >
                      <Form.Label>Date of Sample</Form.Label>

                      <Form.Control
                        type="date"
                        value={info.date_sample?.split("T")[0]}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalName"
                    >
                      <Form.Label>Testing Period</Form.Label>

                      {info.test_period && (
                        <Form.Control
                          value={`${info?.test_period[0].split("T")[0]} ---> ${
                            info?.test_period[1].split("T")[0]
                          }`}
                          readOnly
                        />
                      )}
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between align-items-end">
                  <QR text={"http://www.sgs.br.com"} />
                  <Form className="d-flex w-50">
                    <FormControl
                      required
                      size="md"
                      type="email"
                      placeholder="enter your email to receive more details"
                      className="me-1"
                      value={emailSender}
                      onChange={(e) => setEmailSender(e.target.value)}
                    />
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSend}
                    >
                      Send
                    </Button>
                  </Form>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav2;
