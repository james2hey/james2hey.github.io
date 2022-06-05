import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Intro } from '../components/intro';
import { About } from '../components/about/about';
import { Projects } from '../components/projects/projects';
import { Contact } from '../components/contact';
import { TechStackSection } from '../components/tech-stacks/tech-stack-section';

const IndexPage: React.FC = () => (
    <Layout>
        <SEO title='Portfolio' />
        <Intro />
        <main>
            <About />
            <TechStackSection />
            {/* TODO <Interests /> */}
            <Projects />
            <Contact />
        </main>
    </Layout>
);

export default IndexPage;
