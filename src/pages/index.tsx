import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Intro } from '../components/portfolio/intro';
import { About } from '../components/portfolio/about/about';
import { Projects } from '../components/portfolio/projects/projects';
import { Contact } from '../components/portfolio/contact';
import { PersonalTechStacks } from '../components/portfolio/personal-tech-stacks';

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title='Portfolio' />
		<Intro />
		<main>
			<About />
			<PersonalTechStacks />
			{/* <Interests /> */}
			<Projects />
			<Contact />
		</main>
	</Layout>
);

export default IndexPage;
