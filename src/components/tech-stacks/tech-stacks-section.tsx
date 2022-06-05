import React from 'react';
import { TechStack } from './tech-stack';
import { Section } from '../section';
import { backendDevTechStacks, mobileDevTechStacks, webDevTechStacks } from './tech-stack-data';

export const TechStacksSection: React.FC = () => (
	<Section className='tech-stack-section'>
		<h2>Personal Tech Stacks</h2>
		<div className='tech-stack-section__list'>
			<TechStack header='Web' techStacks={webDevTechStacks} />
			<TechStack header='Mobile' techStacks={mobileDevTechStacks} />
			<TechStack header='Backend' techStacks={backendDevTechStacks} />
		</div>
	</Section>
);
