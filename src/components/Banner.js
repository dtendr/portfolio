import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare
} from "react-icons/lib/fa";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Josh Davis.</h1>
      <h3>
        I'm an independent <span>game developer</span>, who graduated from the Rochester Institute of Technology. 
        My goal is to create <span>unique experiences through game development</span>. 
        Currently, I'm seeking <span>new opportunities</span> in and around the games industry, but I've been involved 
        in both <span>development and design</span> of several projects, both professional and personal.
      </h3>
      <hr />
      <ul className="social">
        <li>
          <a href="https://www.facebook.com/jdavis4005">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/dtendr">
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a href="https://github.com/dtendr">
            <FaGithubSquare />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Banner;
