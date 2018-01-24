import React from "react";
import { withPrefix } from 'gatsby-link';

const Downloads = () => (
  <section id="downloads">
    <div className="row downloads">
      <div className="three columns header-col">
        <h1>
          <span>Downloads</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">

            <p>
              <a href={ withPrefix('/projects/cake-raid-xna.zip') } title="Cake Raid (XNA)">Cake Raid (XNA)</a>
            </p>
            <p>
              <a href={ withPrefix('/projects/hole-punch.zip') } title="Hole Punch">Hole Punch</a>
            </p>
            <p>
              <a href={ withPrefix('/projects/TileDungeon.swf') } title="Tile Dungeon">Tile Dungeon, prototype build</a>
            </p>
            <p>
              <a href="http://adamettenberger.com/ImagineCup2013/play/" title="Renu">Renu, demo build</a>
            </p>
            <p>
              <a href={ withPrefix('/projects/The_Rock_(1.4).zip') } title="The Rock">The Rock (v1.4, for use with Nuclear Dawn)</a>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Downloads;
