import {
	cSharpTechStack,
	dotNetTechStack,
	ionicTechStack,
	reactNativeTechStack,
	reactTechStack,
	reduxTechStack,
	sassTechStack,
	sqlTechStack,
	TechStackModel,
	typescriptTechStack
} from './tech-stack-model';
import archiesPizzeriaImage from '../assets/images/projects/archies-pizzeria-project.png';
import lumosMobileImage from '../assets/images/projects/lumos-mobile.png';
import pipImage from '../assets/images/projects/pip-project.png';
import circuitStatsImage from '../assets/images/projects/circuit-stats-project.png';

export interface ProjectModel {
	name: string;
	image: string;
	content: string;
	technologies: TechStackModel[];
}

export const lumosMobileProject: ProjectModel = {
	name: 'Lumos Mobile',
	image: lumosMobileImage,
	technologies: [reactTechStack, ionicTechStack, typescriptTechStack, sassTechStack],
	content:
		"I played a key role in createing a new mobile app for moviegoers to purchase tickets, concessions, and manage their loyalty accounts. This was a part of Vista's newest self-service sales channel offering, and will be going into production for multiple cinemas in 2022."
};

export const archiesProject: ProjectModel = {
	name: 'Archies Pizzeria',
	image: archiesPizzeriaImage,
	technologies: [reactTechStack, typescriptTechStack, sassTechStack],
	content:
		"During the New Zealand lock down due to COVID-19, I created this website for Archie's Pizzeria to give them a source of web traffic. By providing the menus online, customers could find what they wanted to eat without entering the store to maintain social distancing. It is now used as their full time website at archiespizzeria.co.nz."
};

export const circuitStatsProject: ProjectModel = {
	name: 'Circuit Stats',
	image: circuitStatsImage,
	technologies: [reactNativeTechStack, typescriptTechStack, reduxTechStack],
	content:
		'This project involved creating a mobile app to present cinema executives with realtime key statistics for their circuits. This provides easy access for insight into key performance indicators for each cinema and the ability to drill down into specific metrics.'
};

export const pipProject: ProjectModel = {
	name: 'PiP IoT App',
	image: pipImage,
	technologies: [reactNativeTechStack, typescriptTechStack, dotNetTechStack, cSharpTechStack, sqlTechStack],
	content:
		'PiP manufacture IoT devices and required a system to installations and management. I played a key role in developing the full stack of software. This included developing an ASP.NET backend for consuming IoT device event data and writing it to a database. I also created a mobile app to render real-time client specific data of the IoT devices.'
};

export const allProjects: ProjectModel[] = [lumosMobileProject, circuitStatsProject, archiesProject, pipProject];
