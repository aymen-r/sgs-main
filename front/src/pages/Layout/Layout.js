import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Nav2 from "../../components/navbar/Nav2";
import "./Layout.css";

const Layout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav2 />
      <div className="children">
        <div className="child1">
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="0" alwaysOpen>
              <Accordion.Header>Our Services</Accordion.Header>
              <Accordion.Body>
                <ul className="acc-list">
                  <li className="acc-item">food</li>
                  <li className="acc-item">energy</li>
                  <li className="acc-item">certification</li>
                  <li className="acc-item">construction</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Our Company</Accordion.Header>
              <Accordion.Body>
                <ul className="acc-list">
                  <li className="acc-item">About SGS</li>
                  <li className="acc-item">Careers</li>
                  <li className="acc-item">Corporate Sustainability</li>
                  <li className="acc-item">Office Directory</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>New, Media & Resources</Accordion.Header>
              <Accordion.Body>
                <ul className="acc-list">
                  <li className="acc-item">Events</li>
                  <li className="acc-item">Training Schedule</li>
                  <li className="acc-item">Certified Clients & Products</li>
                  <li className="acc-item">E Subscription</li>
                  <li className="acc-item">Social Media</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Link to={"/contact"}>
              <p className="cont">Conatct Us</p>
            </Link>
          </Accordion>
        </div>
        <div className="child2">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
