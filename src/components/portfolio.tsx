import React from "react";
import "../scss/_app.scss";
import { Header } from "./header";
import { About } from "./about";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Contact } from "./contact";
import { Skills } from "./skills";
import { Link } from "gatsby";
import { Nav } from "./subcomponents/nav";

export const Portfolio: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;
