import React from 'react';
import { Link } from "gatsby";

export const Nav: React.FC = () => {
  const separator = ' | ';
    return (
        <div className="App-header-nav">
            <h5>
              <Link to={"#about"} className="Menu-link">About</Link>{separator}
              <Link to={"#skills"} className="Menu-link">Skills</Link>{separator}
              <Link to={"#experience"} className="Menu-link">Experience</Link>{separator}
              <Link to={"#project"} className={"Menu-link"}>Projects</Link>{separator}
              <Link to={"#contact"} className="Menu-link">Contact</Link>{separator}
              <Link className="Menu-link" to="/blog/">Blog</Link>
            </h5>
        </div>
    );
};
