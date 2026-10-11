import type { ImageMetadata } from 'astro';
import lumosMobileImage from '../assets/images/projects/lumos-mobile.png';
import archiesPizzeriaImage from '../assets/images/projects/archies-pizzeria-project.png';
import circuitStatsImage from '../assets/images/projects/circuit-stats-project.png';
import pipImage from '../assets/images/projects/pip-project.png';

export interface ProjectData {
    name: string;
    image: ImageMetadata;
    content: string;
    technologies: string[];
}

export const archiesProjectData: ProjectData = {
    name: "Archie's Pizzeria",
    image: archiesPizzeriaImage,
    technologies: ['React', 'TypeScript', 'Sass'],
    content:
        "A website I built for a local pizzeria during New Zealand's COVID-19 lockdown, putting their menu online. It became their main website."
};

export const lumosMobileProjectData: ProjectData = {
    name: 'Lumos Mobile',
    image: lumosMobileImage,
    technologies: ['React', 'Ionic', 'TypeScript'],
    content:
        "Vista's mobile app for moviegoers to buy tickets and concessions and manage their loyalty accounts. I played a key role in building it."
};

export const circuitStatsProjectData: ProjectData = {
    name: 'Circuit Stats',
    image: circuitStatsImage,
    technologies: ['React Native', 'TypeScript', 'Redux'],
    content: 'A mobile app giving cinema executives real-time key statistics for each of their cinemas.'
};

export const pipProjectData: ProjectData = {
    name: 'PiP IoT App',
    image: pipImage,
    technologies: ['React Native', 'ASP.NET', 'C#', 'SQL'],
    content: 'An ASP.NET backend for IoT device events and a mobile app showing their data in real time.'
};

export const allProjectData: ProjectData[] = [
    archiesProjectData,
    lumosMobileProjectData,
    circuitStatsProjectData,
    pipProjectData
];
