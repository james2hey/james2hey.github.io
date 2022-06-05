import React from 'react';
import agileImage from '../../assets/images/icons/agile.svg';
import computerImage from '../../assets/images/icons/computer.svg';
import pragmaticImage from '../../assets/images/icons/pragmatic.svg';
import { AboutItem } from './about-item';
import { Section } from '../section';

export const About: React.FC = () => (
	<Section className='about' id='about'>
		<h2 className='about__title'>About</h2>
		<p className='about__description'>
			A software engineer with experience across the full software development lifecycle. Driven to pragmatically
			deliver software solutions with agility to meet evolving client requirements. Strongly skilled with front
			end technologies and passionate about UX design.
		</p>
		<h3 className='about__title'>Software Passions</h3>
		<div className='about__container'>
			<AboutItem
				title='Agility'
				description='Welcoming new requirements. Software should be flexible and adaptable.'
				image={agileImage}
			/>
			<AboutItem
				title='High quality tests'
				description='Using tests to drive the implementation of software based on user experience.'
				image={pragmaticImage}
			/>
			<AboutItem
				title='Accessibility'
				description='Creating front-end applications that are inclusive for everyone to use.'
				image={computerImage}
			/>
		</div>
	</Section>
);
