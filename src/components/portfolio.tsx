import React from "react";
import "../scss/_app.scss";
import { Intro } from "./intro";
import { About } from "./about";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Contact } from "./contact";
import { Skills } from "./skills";
import { Nav } from "./subcomponents/nav";

export const Portfolio: React.FC = () => {
  return (
    <>
      <Intro />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Portfolio;
