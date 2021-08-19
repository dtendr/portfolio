import React from "react";
import * as Icons from "react-icons/fa";
import profilePic from "../assets/images/profilepic.jpg";
import portPDF from "../assets/resume_Davis_J.pdf";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I'm a developer with a variety of interests. Professionally, I work as an interface analyst for point of care devices in the medical field. Previously, I worked 
          in simulation development for web applications. In my spare time, I've worked on porting Cake Raid, one of my old C#/XNA projects into C#/Unity, as well as Deep 
          Six Detritus, a C#/Unity puzzle game with RPG elements. 

          Outside of development, I love tabletop games, and recently developed an interest in music composition
          and production. I've mostly just been using audio workstations, but I'm considering trying out various instruments.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Josh Davis</span>
              <br />
              <span>(434)981-2293</span>
              <br />
              <span>dtendr@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={portPDF} className="button">
                <Icons.FaCloudDownloadAlt /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
