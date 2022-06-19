import React from "react";
import "./footer.css";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer1">
        <h1>CONNECT WITH US</h1>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/company/sgs"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="icon-footer" />
          </a>
          <a href="https://twitter.com/SGS_SA" target="_blank" rel="noreferrer">
            <FaTwitter className="icon-footer" />
          </a>
          <a
            href="https://www.facebook.com/sgs"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="icon-footer" />
          </a>
          <a
            href="https://www.youtube.com/user/sgseditor"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="icon-footer" />
          </a>
          <a
            href="https://www.instagram.com/sgsglobal/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon-footer" />
          </a>
        </div>

        <p>© 2022 SGS SA</p>
      </div>
      <div className="footer2">
        <ul className="footer-list">
          <li>Terms and Conditions</li>
          <li>Terms of Access</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Office Directory</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
