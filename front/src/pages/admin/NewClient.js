import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewClient = () => {
  const [reportNumber, setreportNumber] = useState("");
  const [clientName, setclientName] = useState("");
  const [clientAddress, setclientAddress] = useState("");
  const [sampleName, setsampleName] = useState("");
  const [sampleBatch, setsampleBatch] = useState("");
  const [producedDate, setproducedDate] = useState("");
  const [manufactured, setManufactured] = useState("");
  const [SgsSampleNumber, setSgsSampleNumber] = useState("");
  const [dateSample, setdateSample] = useState("");
  const [testingPeriod, settestingPeriod] = useState("");
  // date picker
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/client/new", {
        report_no: reportNumber,
        name: clientName,
        sample_name: sampleName,
        address: clientAddress,
        sample_batch_no: sampleBatch,
        produced_date: producedDate,
        manufactured: manufactured,
        sgs_sample_no: SgsSampleNumber,
        date_sample: dateSample,
        test_period: dateRange,
      });
      toast.success("new report added");
      setreportNumber("");
      setclientName("");
      setclientAddress("");
      setsampleName("");
      setsampleBatch("");
      setproducedDate("");
      setManufactured("");
      setSgsSampleNumber("");
      setdateSample("");
      settestingPeriod("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <main className="container-sm mt-4 p-4">
      <Row>
        <Col sm={4}>
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>
        </Col>
        <Col sm={8}>
          <Form onSubmit={submitHandler}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalReport"
            >
              <Form.Label column sm={4}>
                Report Number
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Report Number"
                  value={reportNumber}
                  onChange={(e) => setreportNumber(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Client Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Client Name"
                  value={clientName}
                  onChange={(e) => setclientName(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Client Address
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Client Address"
                  value={clientAddress}
                  onChange={(e) => setclientAddress(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Sample Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Sample Name"
                  value={sampleName}
                  onChange={(e) => setsampleName(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Sample Batch
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="number"
                  placeholder="Sample Batch"
                  value={sampleBatch}
                  onChange={(e) => setsampleBatch(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Produced Date
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="date"
                  placeholder="Produced Date"
                  value={producedDate}
                  onChange={(e) => setproducedDate(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Manufactured
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder=" Manufactured"
                  value={manufactured}
                  onChange={(e) => setManufactured(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Sgs Sample Number
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Sgs Sample Number"
                  value={SgsSampleNumber}
                  onChange={(e) => setSgsSampleNumber(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Date of Sample
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="date"
                  value={dateSample}
                  onChange={(e) => setdateSample(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalName"
            >
              <Form.Label column sm={4}>
                Testing Period
              </Form.Label>
              <Col sm={8}>
                {/* <Form.Control
                  type="date"
                  value={testingPeriod}
                  onChange={(e) => settestingPeriod(e.target.value)}
                /> */}
                <DatePicker
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  isClearable={true}
                />
              </Col>
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

            <Form.Group className="mb-3">
              <Col>
                <Button type="submit">Add new</Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </main>
  );
};

export default NewClient;
