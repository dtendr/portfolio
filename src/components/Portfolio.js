import React from "react";
import Link from "gatsby-link";
import * as Icons from "react-icons/fa";

import Caffeine from "../assets/images/portfolio/caffeine-boost-thumb.png";
import Cake from "../assets/images/portfolio/cake-raid-thumb.png";
import Detritus from "../assets/images/portfolio/deep-six-detritus-thumb.png";
import Prism from "../assets/images/portfolio/prism-buster-thumb.png";
import Renu from "../assets/images/portfolio/renu-thumb.png";
import Punch from "../assets/images/portfolio/hole-punch-thumb.png";
import Rock from "../assets/images/portfolio/the-rock-thumb.png";
import Sugar from "../assets/images/portfolio/syntactic-sugar-thumb.png";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>

        <h1>Programming</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >

          {/*<div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-09" title="">
                <img alt="" src={Diluv} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Diluv</h5>
                    <p>React/Bootstrap</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>*/}

          <div className="columns portfolio-item">
            <div className="item-wrap">
            <Link to="/CaffeineBoost" className="link primary">
                <img alt="" src={Caffeine} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Caffeine Boost</h5>
                    <p>C++/OpenGL</p>
                  </div>
                </div>
                <div className="link-icon">
                  <Icons.FaPlus />
                </div>
              </Link>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <Link to="/CakeRaid" className="link primary">
                <img alt="" src={Cake} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Cake Raid</h5>
                    <p>C#/Unity</p>
                  </div>
                </div>
                <div className="link-icon">
                  <Icons.FaPlus />
                </div>
              </Link>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <Link to="/DeepSixDetritus" className="link primary">
                <img alt="" src={Detritus} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Deep Six Detritus</h5>
                    <p>C#/Unity</p>
                  </div>
                </div>
                <div className="link-icon">
                  <Icons.FaPlus />
                </div>
              </Link>
            </div>
          </div>

          {/*<div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-04" title="">
                <img alt="" src={Prism} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Prism Buster</h5>
                    <p></p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>*/}

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <Link to="/Renu" className="link primary">
                <img alt="" src={Renu} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Renu</h5>
                    <p>HTML5/JS</p>
                  </div>
                </div>
                <div className="link-icon">
                  <Icons.FaPlus />
                </div>
              </Link>
            </div>
          </div>

          {/*<div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-07" title="">
                <img alt="" src={Punch} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Hole Punch</h5>
                    <p>DirectX</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>*/}


        </div>


        <h1>Level Design</h1>

        <div
          id="portfolio-wrapper2"
          className="bgrid-quarters s-bgrid-thirds cf"
        >

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <Link to="/TheRock" className="link primary">
                <img alt="" src={Rock} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>The Rock</h5>
                    <p>Hammer/Source</p>
                  </div>
                </div>
                <div className="link-icon">
                  <Icons.FaPlus />
                </div>
              </Link>
            </div>
          </div>

        </div>


        <h1>Web Design</h1>

        <div
          id="portfolio-wrapper3"
          className="bgrid-quarters s-bgrid-thirds cf"
        >

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <Link to="/SyntacticSugar" className="link primary">
                <img alt="" src={Sugar} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Syntactic Sugar</h5>
                    <p>ReactJS/GatsbyJS</p>
                  </div>
                </div>
                <div className="link-icon">
                  <Icons.FaPlus />
                </div>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
);

export default Portfolio;
