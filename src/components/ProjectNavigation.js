import React from "react";
import Link from "gatsby-link";

const ProjectNavigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
         <Link to="/index" className="link primary">Home</Link>
      </li>
      <li>
        <a className="smoothscroll" href="#footer">
          Footer
        </a>
      </li>
    </ul>
  </nav>
);

export default ProjectNavigation;
