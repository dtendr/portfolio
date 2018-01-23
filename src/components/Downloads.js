import React from "react";

import cakexna from "../assets/projects/cake-raid-xna.zip";

const Downloads = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Downloads</span>
      </h1>
    </div>

    <div className="nine columns main-col">

      <div className="row item">
        <div className="twelve columns">
          <h3>C2 Technologies</h3>
          <p className="info">
            Cake Raid (XNA)
          </p>

          <p>
            <a href={cakexna} title="Cake Raid (XNA)">Download</a>
          </p>
        </div>
      </div>


    </div>
  </div>
);

export default Downloads;
