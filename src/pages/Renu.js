import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import ProjectNavigation from "../components/ProjectNavigation";
import Footer from "../components/Footer";

import {
  FaGithubSquare
} from "react-icons/fa";

const Renu = () => (
  <div>
    <header id="projectpage">
        <ProjectNavigation />
    </header>

    <section id="project-page">
        <div className="row">
            <div className="four columns header-col">
                <h1>
                    <span>Renu</span>
                </h1>

                <br/>

                <h2>Tools Used:</h2>
                <p>Visual Studio 2012, HTML5, JavaScript, CreateJS</p> 
            </div>

            <div className="eight columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                        <h3></h3>
                            <p className="info">
                                Renu is a 2D physics platformer built for Windows 8 with the theme of technology being used to improve the world. 
                                It was created in 21 hours during Microsoft's Imagine Cup @ RIT 2012, and it won second place in the competition. 
                                Within the time at the competition, six levels and a boss were designed and programmed. For the competition, 
                                I handled the design. Since then, I've worked to develop more enemies, levels, and multiple tile types, 
                                both in the design and underlying code.
                            </p>

                            <br/>

                            <a href="http://adamettenberger.com/ImagineCup2013/play/" title="Renu">Renu, demo build</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
  </div>
);

export default Renu;
