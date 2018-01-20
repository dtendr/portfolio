import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>C2 Technologies</h3>
          <p className="info">
            Developer
            <span>&bull;</span>
            <em className="date">August 2015 - August 2017</em>
          </p>

          <p>
            Developed and updated training simulations for small businesses and
            military contracts, focusing on Flash to HTML5 conversion.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>District Trivia</h3>
          <p className="info">
            Intern
            <span>&bull;</span>
            <em className="date">June 2014 - August 2014</em>
          </p>

          <p>
            Developed updated versions of interactive applications using HTML5 for
            use in live events at local businesses.
          </p>
        </div>
      </div>

       <div className="row item">
        <div className="twelve columns">
          <h3>iD Tech Camps</h3>
          <p className="info">
            Lead Instructor
            <span>&bull;</span>
            <em className="date">July 2013 - August 2013</em>
          </p>

          <p>
            Instructed iD Programming Academy students at the MIT two week overnight
            camp in the Minecraft Modding and Java Coding course.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
