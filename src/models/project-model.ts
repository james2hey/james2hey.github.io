import { reactNativeTechStack, reactTechStack, sqlTechStack, TechStackModel } from "./tech-stack-model"
import jamesTooheyImage from "../assets/images/jamestoohey.svg"

export interface ProjectModel {
  name: string;
  image: string;
  content: string;
  technologies: TechStackModel[]
}

export const archiesProject: ProjectModel = {
  name: 'Archies Pizzeria',
  image: jamesTooheyImage,
  technologies: [reactTechStack],
  content: 'This project was created to help design a resturant website for the Archies Pizzeria team in Newmarket, New Zealand. I worked on this projet using Gastby for server side rendering a React project. This was hosted on Netlify.',
}

export const pipProject: ProjectModel = {
  name: 'PiP IoT',
  image: jamesTooheyImage,
  technologies: [reactNativeTechStack, sqlTechStack],
  content: 'This project was created to help design a resturant website for the Archies Pizzeria team in Newmarket, New Zealand. I worked on this projet using Gastby for server side rendering a React project. This was hosted on Netlify.',
}

export const circuitStatsProject: ProjectModel = {
  name: 'Circuit Stats',
  image: jamesTooheyImage,
  technologies: [reactNativeTechStack, sqlTechStack],
  content: 'This project was created to help design a resturant website for the Archies Pizzeria team in Newmarket, New Zealand. I worked on this projet using Gastby for server side rendering a React project. This was hosted on Netlify.',
}

export const allProjects: ProjectModel[] = [
  archiesProject,
  pipProject,
  circuitStatsProject,
  circuitStatsProject,
  circuitStatsProject,
  circuitStatsProject,
]