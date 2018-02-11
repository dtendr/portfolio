import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import ProjectNavigation from "../components/ProjectNavigation";
import Footer from "../components/Footer";

import {
  FaGithubSquare
} from "react-icons/lib/fa";

import BoostGIF from "../assets/images/portfolio/final_gifs/runner.gif";

const CaffeineBoost = () => (
  <div>
    <header id="projectpage">
        <ProjectNavigation />
    </header>

    <section id="project-page">
        <div className="row">
            <div className="four columns header-col">
                <h1>
                    <span>Caffeine Boost</span>
                </h1>

                <br/>

                <h2>Tools Used:</h2>
                <p>OpenGL</p>

                <a href="https://github.com/DanteNardo/CaffeineBoost">
                    <FaGithubSquare />
                </a> 
            </div>

            <div className="eight columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                        <h3></h3>
                            <p className="info">
                                A 3D Finite Runner where the goal is to obtain the highest points possible through 
                                coffee pickups and distance ran.
                            </p>

                            <br/>
                            
                            <p>
                                <img alt="" src={BoostGIF} />
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
  </div>
);

export default CaffeineBoost;
