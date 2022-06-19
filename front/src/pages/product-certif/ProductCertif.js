import React from "react";
import "./inspection.css";
import Layout from "../Layout/Layout";

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCertif = () => {
  return (
    <Layout>
      <div className="inspc">
        <div className="heading">
          <h1>PRODUCT CERTIFICATION</h1>
          <hr className="hr" />

          <h5>
            How can you ensure that your products are safe and reliable, so they
            can be sold in Brazil and worldwide?
          </h5>
          <p>
            Before they can be sold in Brazil and the rest of the world, many
            products must meet the safety and performance requirements of
            national and international quality control standards. Product
            certification guarantees that your products have gone through every
            step of the processes required by Inmetro and international
            regulatory bodies, so you can gain access to the Brazilian market
            and export your products where desired.
          </p>
          <h3>HOW PRODUCT CERTIFICATION WILL BENEFIT YOUR BUSINESS</h3>
          <p>Product certification will enable you to:</p>
          <ul>
            <li>
              Prove that you comply with the legal requirements of the countries
              where you wish to market your products
            </li>
            <li>Gain access to new markets</li>
            <li>Enhance your brand’s reputation</li>
            <li>Minimize risks to your brand</li>
          </ul>
          <h3>WHY CHOOSE SGS?</h3>
          <p>
            As the world leader in inspection, verification, testing and
            certification, with more than 2,400 offices and laboratories and
            more than 95,000 employees around the world, we are the ideal
            provider of compulsory and voluntary product certification, both
            inside and outside of the scope of the Brazilian System of
            Conformity Evaluation (SBAC).
          </p>
          <p>Products that we certify include:</p>
          <ul>
            <li>Toys</li>
            <li>Home appliances</li>
            <li>Medical equipment and supplies</li>
            <li>LED Lamps</li>
            <li>Strollers</li>
            <li>Cribs</li>
            <li>Mattresses</li>
            <li>Child restraint devices</li>
            <li>Auto parts</li>
          </ul>
          <p>
            We test microwaves, fans, washing machines and refrigerators for
            energy efficiency.
          </p>
          <p>Our services include certification to the standards of:</p>
          <ul>
            <li>National Electrical Energy Conservation Program (PROCEL)</li>
            <li>Brazilian Labeling Program (PBE)</li>
          </ul>
          <p>We offer:</p>
          <ul>
            <li>A highly qualified team of auditors</li>
            <li>
              A chemical laboratory, which complies with the entire scope of
              Consumer and Retail Servics (CRS) certification
            </li>
            <li>
              Laboratories focused on the testing and analysis of electrical and
              electronic equipment, and toys and juvenile products
            </li>
          </ul>
          <p>
            We are accredited by the General Coordination for Inmetro
            Certification (CGCRE) and will ensure compliance with a large number
            of Inmetro safety regulations for electrical and electronic
            products, ranging in size from small light bulbs to large
            refrigerators and freezers for industrial use in several countries.
          </p>
          <p>
            Want to certify your products with us? Contact us for more
            information and a quote.
          </p>
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

export default ProductCertif;
