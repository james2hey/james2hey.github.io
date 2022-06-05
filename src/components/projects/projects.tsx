import React from 'react';
import { Section } from '../section';
import { ProjectList } from './project-list';
import { allProjectData } from './project-data';

export const Projects: React.FC = () => (
	<Section id='projects' className='projects'>
		<h2>Recent Projects</h2>
		<ProjectList projects={allProjectData} initialVisibleProjectCount={3} />
	</Section>
);
