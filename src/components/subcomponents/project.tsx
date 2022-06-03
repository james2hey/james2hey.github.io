import React from 'react';
import { Card } from './card';

export interface ProjectProps {
	image: string;
	header: string;
	link: string;
	body: string;
}

export const Project: React.FC<ProjectProps> = props => {
	const { image, body, header } = props;
	return (
		<Card className='project'>
			<img src={image} alt='projects image' className='project--image' />
			<div className='project--details'>
				<br />
				<h4>{header}</h4>
				<p>{body}</p>
			</div>
		</Card>
	);
};
