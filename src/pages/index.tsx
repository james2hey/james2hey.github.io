import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Intro} from "../components/portfolio/intro";
import {About} from "../components/portfolio/about/about";
import {Projects} from "../components/portfolio/projects/projects";
import {Contact} from "../components/portfolio/contact";
import {PersonalTechStacks} from "../components/portfolio/personal-tech-stacks"
import {Interests} from "../components/interests";

const IndexPage: React.FC = () => {
    return (
        <Layout hideFooter={true} hideNav={true}>
            <SEO title="Portfolio" />
            <Intro />
            <About />
            <PersonalTechStacks />
            {/*<Interests />*/}
            <Projects />
            <Contact />
        </Layout>
    );
};

export default IndexPage;
