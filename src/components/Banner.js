import React from "react";
import * as Icons from "react-icons/fa";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Josh Davis.</h1>
      <h3>
        I'm an independent <span>game developer</span>, who graduated from the Rochester Institute of Technology. 
        My goal is to create both <span>helpful, practical and entertaining</span> experiences in my professional and personal time. I've been involved 
        in both <span>development and design</span> of several projects, both professional and personal.
      </h3>
      <hr />
      <ul className="social">
        <li>
          <a href="https://www.linkedin.com/in/josh-davis-74256840/">
            <Icons.FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/dtendr">
            <Icons.FaTwitterSquare />
          </a>
        </li>
        <li>
          <a href="https://github.com/dtendr">
            <Icons.FaGithubSquare />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Banner;
