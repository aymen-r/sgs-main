import React from "react";
import "./inspection.css";
import Layout from "../Layout/Layout";

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutSGS = () => {
  return (
    <Layout>
      <div className="inspc">
        <div className="heading">
          <h1>SGS IN BRIEF</h1>
          <hr className="hr" />
          <h5>
            We are SGS – the world’s leading testing, inspection and
            certification company.
          </h5>
          <p>
            We are recognized as the global benchmark for quality and integrity.
            Our 93,000 employees operate a network of 2,600 offices and
            laboratories, working together to enable a better, safer and more
            interconnected world.
          </p>
          <p>
            Wherever you are, whatever your industry, our experts worldwide
            provide specialized solutions to make your business faster, simpler
            and more efficient.
          </p>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/OqtbPxsP89E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <h3>
            OUR VALUE TO SOCIETY IS ENABLING A BETTER, SAFER AND MORE
            INTERCONNECTED WORLD
          </h3>
          <ul>
            <li>
              We enable a better world by helping businesses everywhere to work
              efficiently, deliver with quality, and trade with integrity and
              trust
            </li>
            <li>
              We enable a safer world by ensuring that the environment where you
              work and live is secure and clean, and that the products you use
              or consume are safe
            </li>
            <li>
              We enable a more interconnected world by helping new technology
              reach consumers quickly and affordably, ensuring IT and data
              security, and using AI and IoT to develop smart cities
            </li>
          </ul>

          <h3>OUR CORE SERVICES</h3>
          <p>
            We provide worldwide, independent services that make a difference in
            people’s lives. Our core services can be divided into three main
            categories:
          </p>
          <ul>
            <li>
              Testing: Reduce risks, shorten time to market and test the
              quality, safety and performance of your products against relevant
              health, safety and regulatory standards with our global network of
              testing facilities
            </li>
            <li>
              Inspection: Control quantity and quality, and meet all relevant
              regulatory requirements across different regions and markets with
              our world-leading inspection and verification services
            </li>
            <li>
              Certification: Ensure that your products, processes, systems or
              services meet national and international standards and regulations
              with our comprehensive certification services
            </li>
          </ul>
          <p>We also offer training and consultancy services:</p>
          <ul>
            <li>
              Training: Keep up with the latest developments in standards,
              regulations and technology with high-quality training and
              development for every level of your organization – anywhere in the
              world
            </li>
            Consultancy: Gain full market access by identifying, meeting and
            complying with the requirements of your target market, anywhere in
            the world, whatever your industry
          </ul>
          <h3>OUR HISTORY</h3>
          <p>
            Established in 1878, we have transformed grain trading in Europe by
            offering innovative agricultural inspection services. Our company
            was registered in Geneva as Société Générale de Surveillance in
            1919. Shares were first listed on (SWX) Swiss Exchange in 1981.
          </p>
          <p>
            From our beginnings as a grain inspection house, we have steadily
            grown into our role as the industry leader. We have done this
            through continual improvement and innovation and through supporting
            our customers’ operations by reducing risk and improving
            productivity.
          </p>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/STorAgCyAps"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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

export default AboutSGS;
