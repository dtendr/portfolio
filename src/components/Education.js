import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Rochester Institute of Technology</h3>
          <p className="info">
            B.S. Degree in Game Design and Development
            <span>&bull;</span>
            <em className="date">December 2017</em>
          </p>

          <p>
            During my time at RIT, I pursued a variety of projects and interests.
            I helped create a level for the RTS/FPS Nuclear Dawn, working during part of a semester 
            and over the summer to design a total of three buildings in Hammer and the Source SDK, as well 
            as a fair bit of the terrain.
            I participated in several hackathons and game jams, most notably Microsoft's 2012 Imagine Cup.
            A game I designed and helped program, Renu, won second place in the local college round.
            For a year, I was Secretary for the Game Developers Club.
            I took two years off to work full-time in military contracting.
            Towards the end of my time at RIT, I developed an interest in music composition and recording.
          </p>
        </div>
      </div>

    </div>
  </div>
);

export default Education;
