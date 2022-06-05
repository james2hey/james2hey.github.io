import React, { useState } from 'react';
import { ProjectListItem } from './project-list-item';
import { Button, ButtonColor } from '../button';
import { ProjectData } from './project-data';

export interface ProjectsListProps {
	projects: ProjectData[];
	initialVisibleProjectCount: number;
}

const increment = 2;

export const ProjectList: React.FC<ProjectsListProps> = props => {
	const [visibleProjectsCount, setVisibleProjectsCount] = useState(props.initialVisibleProjectCount);
	const visibleProjects = props.projects.slice(0, visibleProjectsCount);

	const makeMoreProjectsVisible = () => {
		if (visibleProjects < props.projects) setVisibleProjectsCount(visibleProjectsCount + increment);
	};

	return (
		<div className='project-list'>
			<ul className='project-list__items'>
				{visibleProjects.map((project, index) => (
					<li key={index}>
						<ProjectListItem key={project.name} project={project} />
					</li>
				))}
			</ul>
			{visibleProjects < props.projects && (
				<Button color={ButtonColor.Secondary} onClick={makeMoreProjectsVisible}>
					View More
				</Button>
			)}
		</div>
	);
};
