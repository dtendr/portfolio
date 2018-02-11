import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import ProjectNavigation from "../components/ProjectNavigation";
import Footer from "../components/Footer";

import {
  FaGithubSquare
} from "react-icons/lib/fa";

const CakeRaid = () => (
  <div>
    <header id="projectpage">
        <ProjectNavigation />
    </header>

    <section id="project-page">
        <div className="row">
            <div className="four columns header-col">
                <h1>
                    <span>Cake Raid</span>
                </h1>

                <br/>

                <h2>Tools Used:</h2>
                <p>Unity, Visual Studio (C#)</p>

                <a href="https://github.com/dtendr/cake-raid" title="cakeraidgithub">
                    <FaGithubSquare />
                </a> 
            </div>

            <div className="eight columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                        <h3></h3>
                            <p className="info">
                                Cake Raid is a 2D tower defense game where the goal is to defend your cake from various bugs. 
                                I handled the programming, art is courtesy of another student, Wen Shi.
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

export default CakeRaid;
