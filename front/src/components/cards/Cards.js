import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

const Cards = () => {
  return (
    <>
      <div className="content-cards1">
        <ul className="menu">
          <li className="menu-item menu-active">Our Services</li>
          <Link to={"/ourCompany"}>
            <li className="menu-item">Our Company</li>
          </Link>
          <li className="menu-item">News, Media & Resources</li>
          <Link className="menu-link" to={"/contact"}>
            <li className="menu-item">Contact Us</li>
          </Link>
          <Link className="menu-link" to={"/office"}>
            <li className="menu-item">SGS Offices & Labs</li>
          </Link>
        </ul>
        <div className="features">
          <p className="menu-par">
            We are the world's leading testing, inspection and certification
            company
          </p>
          <Link to={"/about-SGS"}>
            <span>about us</span>
          </Link>
        </div>
      </div>
      <div className="content-cards2">
        <div className="row1">
          <div className="card1 card-mobile">
            <Link to={"/ourCompany"}>
              <img src="/img/card/main-feature-glass-building.jpg" alt="" />
              <div className="card-body1 box">
                <h5>SGS in Brazil</h5>
                <p>
                  Operating in Brazil since 1938, SGS has 36 offices and more
                  than 30 laboratories in major cities and ports around the
                  country, employing over 3,500 people.
                </p>
              </div>
            </Link>
          </div>
          <div className="card2 card-mobile">
            <Link to={"/expertise"}>
              <img src="/img/card/main-feature-long-bridge.jpg" alt="" />
              <div className="card-body2 box">
                <h5>Expertise</h5>

                <p>
                  Our core service activities cover all industry sectors and
                  touch the products and services that consumers around the
                  world rely on every day.
                </p>
              </div>
            </Link>
          </div>
          <div className="card3 card-mobile">
            <Link to={"/office"}>
              {" "}
              <img src="/img/card/main-feature-global-cogs.jpg" alt="" />
              <div className="card-body3 box">
                <h5>Office Directory</h5>
                <p>
                  The SGS network comprises over 2,600 offices and laboratories
                  and more than 96,000 employees around the world.
                </p>
              </div>
            </Link>
          </div>
          <div className="card4 card-mobile">
            <Link to={"/integrity"}>
              <img src="/img/card/main-feature-connected-dots.jpg" alt="" />
              <div className="card-body4 box">
                <h5>Integrity at SGS</h5>

                <p>
                  As leaders in our industry, we hold ourselves to the highest
                  standard of professional behavior.
                </p>
              </div>
            </Link>
          </div>
          <div className="card5 card-mobile">
            <Link to={"/office"}>
              {" "}
              <img src="/img/card/main-feature-colorful-news.jpg" alt="" />
              <div className="card-body3 box">
                <h5>E Subscriptions</h5>
                <p>
                  Keep up-to-date with industry news, events, market trends,
                  standards and regulations with our email newsletters and
                  alerts.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
