import React from "react";
import "./inspection.css";
import Layout from "../Layout/Layout";

import { Col, Form, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Office = () => {
  return (
    <Layout>
      <div className="inspc">
        <div className="heading">
          <h1>SGS OFFICE DIRECTORY</h1>
          <hr className="hr" />

          <h5>
            The SGS network comprises over 2,600 offices and laboratories and
            more than 96,000 employees around the world.
          </h5>
          <Form className="mb-4">
            <Form.Group
              as={Row}
              className="mb-4 "
              controlId="formHorizontalReport"
            >
              <Form.Label>Filter by type</Form.Label>

              <Form.Select aria-label="Default select example">
                <option>All types</option>
                <option value="1">Global head office</option>
                <option value="2">Local head office</option>
                <option value="3">Lab</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-4 "
              controlId="formHorizontalReport"
            >
              <Form.Label>Filter by location</Form.Label>

              <Form.Select aria-label="Default select example">
                <option>Brazil</option>
                <option value="1">Benin</option>
                <option value="2">UAE</option>
                <option value="3">Tunisia</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-4 "
              controlId="formHorizontalReport"
            >
              <Form.Label>Filter by State/Province</Form.Label>

              <Form.Select aria-label="Default select example">
                <option>All states</option>
                <option value="1">one</option>
                <option value="2">two</option>
                <option value="3">three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-4 "
              controlId="formHorizontalReport"
            >
              <Form.Label>Filter by city</Form.Label>

              <Form.Select aria-label="Default select example">
                <option>All cities</option>
                <option value="1">one</option>
                <option value="2">two</option>
                <option value="3">three</option>
              </Form.Select>
            </Form.Group>
          </Form>
          <Table responsive>
            <thead>
              <tr>
                <th>OFFICE ADDRESS</th>
                <th>Contact</th>
                <th>Office Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width={"50%"}>
                  <h6>SGS do Brasil Ltda.</h6>
                  <p>
                    Alameda Xingu, 512 - 19º andar Alphaville Industrial Barueri
                    – SP, 06455-030 Brazil
                  </p>
                </td>
                <td>t: +55 11 3883 8880</td>
                <td>Local Head Office</td>
              </tr>
              <tr>
                <td width={"50%"}>
                  <h6>SGS Academy</h6>
                  <p>
                    Av. Paulista, 807 - 16º andar Bairro Bela Vista Sao Paulo –
                    SP, 01311-100 Brazil
                  </p>
                </td>
                <td>
                  t: +55 11 3254-7830 <br />
                  f: +55 11 3254-7835
                </td>
                <td>Office</td>
              </tr>
              <tr>
                <td width={"50%"}>
                  <h6>SGS do Brasil</h6>
                  <p>
                    Rua no. 138, Lote 25 da Quadra C21 Galpão B - Loteamento
                    Cidade de Garapu Cabo de Santo Agostinho – PE, 54518-260
                    Brazil
                  </p>
                </td>
                <td>t: +55 81 2129-3266</td>
                <td>Lab</td>
              </tr>
            </tbody>
          </Table>
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

export default Office;
