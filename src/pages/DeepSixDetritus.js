import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import ProjectNavigation from "../components/ProjectNavigation";
import Footer from "../components/Footer";

const DeepSixDetritus = () => (
  <div>
    <header id="projectpage">
        <ProjectNavigation />
    </header>

    <section id="project-page">
        <div className="row">
            <div className="four columns header-col">
                <h1>
                    <span>Deep Six Detritus</span>
                </h1>

                <br/>

                <h2>Tools Used:</h2>
                <p>Prototype Development: Adobe Flash Professional CS5, ActionScript 3.0, Flash Develop</p>
                <p>Final Development: Unity, Visual Studio (C#)</p>
                
            </div>

            <div className="eight columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                        <h3></h3>
                            <p className="info">
                                Development of this game started from a prototype, called Tile Dungeon, which was built for a class. 
                                The original core idea for this game is that every object is a tile that can be moved in specific ways by the player. 
                                I designed and programmed the game, and another student, Joe Farrell created the art.
                                In creating the final version of the game, I transitioned from exploring a fantasy dungeon setting to scavenging in an 
                                sci-fi alien ruin/junkyard. I commissioned an artist (https://twitter.com/2dchaos) to create full sprite sheets to 
                                this end. The entire project was redeveloped in Unity, and I added some RPG elements to have a
                                sense of player progression. Currently, the project is undergoing polish and tweaks, but I'm expecting to release 
                                a version within a few months to PC.
                            </p>

                            <br/>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
  </div>
);

export default DeepSixDetritus;
