import React from "react";
import { Link } from "gatsby";
import "../../scss/subcomponents/_portfolio-nav.scss";

const separator = "  |  ";
const sections = ["#about", "#skills", "#experience", "#project", "#contact", "/blog"];

export const PortfolioNav: React.FC = () => {
  return (
    <div className={"portfolio-nav"}>
      <h6>
        <Link className={"portfolio-nav-link"} to={"#about"}>About</Link>{separator}
        <Link className={"portfolio-nav-link"} to={"#skills"}>Skills</Link>{separator}
        <Link className={"portfolio-nav-link"} to={"#experience"}>Experience</Link>{separator}
        <Link className={"portfolio-nav-link"} to={"#project"}>Projects</Link>{separator}
        <Link className={"portfolio-nav-link"} to={"#contact"}>Contact</Link>{separator}
        <Link className={"portfolio-nav-link"} to="/blog">Blog</Link>
      </h6>
    </div>
  );
};
