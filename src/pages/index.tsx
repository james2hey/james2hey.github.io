import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Intro } from "../components/portfolio/intro";
import { About } from "../components/portfolio/about";
import { Skills } from "../components/portfolio/skills";
import { Experience } from "../components/portfolio/experience";
import { Projects } from "../components/portfolio/projects";
import { Contact } from "../components/portfolio/contact";

const IndexPage: React.FC = () => {
  return (
    <Layout hideFooter={true}>
      <SEO title="Portfolio" />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
