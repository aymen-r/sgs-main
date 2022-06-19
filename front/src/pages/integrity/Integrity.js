import React from "react";
import "./inspection.css";
import Layout from "../Layout/Layout";

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Integrity = () => {
  return (
    <Layout>
      <div className="inspc">
        <div className="heading">
          <h1>INTEGRITY AT SGS</h1>
          <hr className="hr" />

          <h5>
            Integrity lies at the heart of SGS. The trust that we inspire in our
            customers and stakeholders is the key to our success as an
            organization and as individuals.
          </h5>
          <p>
            As leaders in our industry, we hold ourselves to the highest
            standard of professional behavior. The SGS Code of Integrity defines
            the main principles of professional integrity for the SGS Group and
            is an expression of the values that are shared throughout our
            organization, our businesses and our affiliates.
          </p>
          <p>
            We are committed to a culture in which issues of integrity and
            professional ethics can be raised and discussed openly. Guidance and
            support is available to assist employees and other stakeholders
            acting on behalf of, or representing our organization to understand
            the Code and to help them make the right decision when faced with an
            ethical dilemma.
          </p>
          <p>
            SGS was the first inspection company to implement a global integrity
            training program for its employees. Our SGS Group compliance
            program, based on our SGS Code of Integrity, exists to ensure that
            the highest standards of integrity are applied to all our business
            activities worldwide, in accordance with international best
            practice.
          </p>
          <p>
            Our annual integrity training program acts as a periodic refresher
            of the principles of the Code and is conducted by each supervisor
            and manager with responsibility for staff. A record of participation
            is kept to ensure that all staff complete the training each year.
            Specific integrity training sessions for supervisors and managers
            are also conducted.
          </p>

          <p>
            The annual integrity training is supplemented by an interactive
            eLearning program, which integrates the general principles contained
            in the Code into our different SGS businesses. Available on the
            Internet in English and more than 20 languages, it is used as
            continual training and by new employees as part of their induction.
          </p>

          <p>
            The Chief Compliance Officer is responsible for implementing
            procedures governing the ethical behavior of our employees and
            consultants, and for conducting investigations on alleged staff
            misconduct. He also sets the standards of integrity that we expect
            of our business partners. Reports on suspected violations of the
            Code can be submitted, or advice obtained, by calling the Integrity
            Helpline or by filing a written report online or sending it by fax
            or mail.
          </p>
          <p>
            The Corporate Governance & Sustainability Committee (previously
            known as the Professional Conduct Committee) is the Committee of the
            Board of Directors of SGS SA which has ultimate oversight over
            compliance matters regarding SGS Group. It ensures implementation of
            the Code of Integrity within our organization and advises management
            on all issues of business ethics. It also approves policies
            regarding anti-bribery and corruption and the use of certain
            suppliers that are deemed to present a high level of risk.
          </p>
          <p>
            The Corporate Governance & Sustainability Committee consists of the
            following members:
          </p>
          <ul>
            <li>Chair of the Board of Directors: Calvin Grieder</li>
            <li>
              Board Members:
              <ul>
                <li>Sami Atiya</li>
                <li>Ian Gallienne</li>
              </ul>
            </li>
          </ul>
          <p>
            The Chief Compliance Officer, Olivier Merkt, reports to the
            Committee on all compliance related matters. The CEO attends all
            meetings of the Committee. The Committee may request the attendance
            of other executives or employees of the Group when required.
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

export default Integrity;
