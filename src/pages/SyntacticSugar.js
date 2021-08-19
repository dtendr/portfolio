import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import ProjectNavigation from "../components/ProjectNavigation";
import Footer from "../components/Footer";

import * as Icons from "react-icons/fa";

import SugarThumb from "../assets/images/portfolio/syntactic-sugar-thumb.png";

const SyntacticSugar = () => (
  <div>
    <header id="projectpage">
        <ProjectNavigation />
    </header>

    <section id="project-page">
        <div className="row">
            <div className="four columns header-col">
                <h1>
                    <span>Syntactic Sugar (Website)</span>
                </h1>

                <br/>

                <h2>Tools Used:</h2>
                <p>
                    ReactJS
                    <br/>
                    GatsbyJS
                </p>

                <ul className="social-links-sidebar">
                    <li>
                        <a href="http://syntacticsugar.moe/">
                            <Icons.FaExternalLinkSquareAlt />
                        </a> 
                    </li>
                </ul>
            </div>

            <div className="eight columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                        <h3></h3>

                            <p className="info">
                                I designed and scripted a relatively simple website to the specifications of a friend, for
                                promotion of an upcoming indie visual novel. This was iterated on and improved with feedback,
                                and deployed in basically the same way this portfolio was, except to a private server.
                            </p>

                            <br/>
                            
                            <p>
                                <img alt="" src={SugarThumb} />
                            </p>

                            <br/>

                            <p className="info">
                                "Syntactic Sugar is an indie Japanese-style visual novel following the life of a programmer 
                                and his experiences working at a small web solutions company. The game is currently being 
                                developed by a small team of talented individuals from around the world with the common goal 
                                of bringing this story to life."
                            </p>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
  </div>
);

export default SyntacticSugar;
