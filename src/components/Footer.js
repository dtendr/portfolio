import React from "react";
import * as Icons from "react-icons/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/josh-davis-74256840/">
              <Icons.FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/dtendr">
              <Icons.FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/dtendr">
              <Icons.FaGithub />
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
          <Icons.FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
