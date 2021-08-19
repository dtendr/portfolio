import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import ProjectNavigation from "../components/ProjectNavigation";
import Footer from "../components/Footer";

import {
  FaGithubSquare
} from "react-icons/fa";

import RockGIF1 from "../assets/images/portfolio/final_gifs/storageBuilding.gif";

const TheRock = () => (
  <div>
    <header id="projectpage">
        <ProjectNavigation />
    </header>

    <section id="project-page">
        <div className="row">
            <div className="four columns header-col">
                <h1>
                    <span>The Rock</span>
                </h1>

                <br/>

                <h2>Tools Used:</h2>
                <p>Source SDK, Hammer</p> 
            </div>

            <div className="eight columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                        <h3></h3>
                            <p className="info">
                                The Rock is a map created for the published game Nuclear Dawn. This map was created in a team setting; key assets were split between group members.
                                I built 3 buildings in the environment: a guard tower, a warehouse, and a prop building with a fair level of outer detail. 
                                The entire production, from learning Hammer to the planning and execution of the group's design, took about 2 months. 
                                By the end, I had fully finished my three buildings and worked a fair amount on terrain (beaches and cliff paths) using brushes. 
                                The map is available on the Steam workshop page <a href ="http://steamcommunity.com/sharedfiles/filedetails/?id=218573495" title = "Steam workshop">here</a> 
                                as well as in the downloads section of my portfolio.
                            </p>

                            <br/>

                            <p>
                                <img alt="" src={RockGIF1} />
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
  </div>
);

export default TheRock;
