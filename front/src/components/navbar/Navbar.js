import { Button, Modal, Form, Row, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import "./navbar.css";
import axios from "axios";
import { toast } from "react-toastify";
import QR from "../../pages/QR";
const Navbar = () => {
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //search
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState({});

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
    toast.success("Check your email box within 48 hours");
    handleClose();
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/img/sgs-logo.png" alt="" />
      </div>
      {/* <div className="dropdown">
        <img src="/img/flag-global-black.png" alt="" />
        <p>Sites e Idiomas</p>
        <AiFillCaretDown />
      </div> */}
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
        <Modal show={show} onHide={handleClose} animation={true} size="xl">
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

                <Form.Control
                  type="date"
                  value={info.test_period?.split("T")[0]}
                  readOnly
                />
              </Form.Group>
              {/* <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Test(s) required
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="tests" />
              </Col>
            </Form.Group> */}
            </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between align-items-end">
            <QR text={"http://www.sgs.br.com"} />
            <Form className="d-flex w-50">
              <FormControl
                size="md"
                type="email"
                placeholder="enter your email to receive more details"
                className="me-1"
              />
              <Button variant="success" onClick={handleSend}>
                Send
              </Button>
            </Form>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
