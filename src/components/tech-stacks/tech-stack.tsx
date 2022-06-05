import React from 'react';
import { TechItem } from '../tech-item';
import { TechStackData } from './tech-stack-data';
import { Modal } from '../modal';

export interface TechStackProps {
	header: string;
	techStacks: TechStackData[];
}

export const TechStack: React.FC<TechStackProps> = props => (
	<Modal
		title={props.header}
		trigger={
			<button className='tech-stack-preview'>
				<h3>{props.header}</h3>
				<ul className='tech-stack-preview__list-items'>
					{props.techStacks.map(techStack => (
						<li className='tech-stack-preview__list-item' key={techStack.name}>
							<TechItem image={techStack.image} name={techStack.name} />
						</li>
					))}
				</ul>
			</button>
		}
	>
		<ul className='tech-stack-overview'>
			{props.techStacks.map(techStack => (
				<li className='tech-stack-overview__list-item' key={techStack.name}>
					<TechItem image={techStack.image} name={techStack.name} showName />
					<p className='tech-stack-overview__list-item-description'>{techStack.description}</p>
				</li>
			))}
		</ul>
	</Modal>
);
