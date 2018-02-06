import React from "react";
import {
  FaLinkedinSquare,
  FaTwitter,
  FaGithub,
  FaChevronCircleUp
} from "react-icons/lib/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/josh-davis-74256840/">
              <FaLinkedinSquare />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dtendr">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/dtendr">
              <FaGithub />
            </a>
          </li>
        </ul>

        <ul className="copyright">
          <li>&copy; Copyright 2018 CeeVee</li>
          <li>
            Design by
            <a title="Styleshout" href="http://www.styleshout.com/">
              Styleshout
            </a>
          </li>
          <li>
            Developed in React ⚛️ by&nbsp;
            Josh Davis
            from <a href="https://github.com/amandeepmittal/gatsby-starter-ceevee">this base</a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
