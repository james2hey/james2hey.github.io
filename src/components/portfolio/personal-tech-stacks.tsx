import React from 'react';
import { TechStack } from '../subcomponents/tech-stack';
import { Section } from './section';
import { backendDevTechStacks, mobileDevTechStacks, webDevTechStacks } from '../../models/tech-stack-model';

export const PersonalTechStacks: React.FC = () => (
	<Section className='personal-tech-stacks'>
		<h2>Personal Tech Stacks</h2>
		<div className='personal-tech-stacks__list'>
			<TechStack header='Web' techStacks={webDevTechStacks} />
			<TechStack header='Mobile' techStacks={mobileDevTechStacks} />
			<TechStack header='Backend' techStacks={backendDevTechStacks} />
		</div>
	</Section>
);
