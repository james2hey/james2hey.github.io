import {
  cSharpTechStack,
  dotNetTechStack,
  gatsbyTechStack,
  googleAnalytics,
  reactNativeTechStack,
  reactTechStack, reduxTechStack,
  sqlTechStack,
  TechStackModel, typescriptTechStack,
} from "./tech-stack-model"
import archiesPizzeriaImage from "../assets/images/projects/archies-pizzeria-project.png"
import pipImage from "../assets/images/projects/pip-project.png"
import circuitStatsImage from "../assets/images/projects/circuit-stats-project.png"

export interface ProjectModel {
  name: string;
  image: string;
  content: string;
  technologies: TechStackModel[]
}

export const archiesProject: ProjectModel = {
  name: 'Archies Pizzeria Website',
  image: archiesPizzeriaImage,
  technologies: [reactTechStack, typescriptTechStack, gatsbyTechStack, googleAnalytics],
  content: 'This projects was created to help design a restaurant website for the Archies Pizzeria team in Newmarket, New Zealand. I worked on this projet using Gastby for server side rendering a React projects. This was hosted on Netlify.',
}

export const pipProject: ProjectModel = {
  name: 'PiP IoT Mobile App',
  image: pipImage,
  technologies: [reactNativeTechStack, typescriptTechStack, dotNetTechStack, cSharpTechStack, sqlTechStack],
  content: 'This projects was created to help design a resturant website for the Archies Pizzeria team in Newmarket, New Zealand. I worked on this projet using Gastby for server side rendering a React projects. This was hosted on Netlify.',
}

export const circuitStatsProject: ProjectModel = {
  name: 'Circuit Stats Mobile App',
  image: circuitStatsImage,
  technologies: [reactNativeTechStack, reduxTechStack, typescriptTechStack],
  content: 'This projects was created to help design a resturant website for the Archies Pizzeria team in Newmarket, New Zealand. I worked on this projet using Gastby for server side rendering a React projects. This was hosted on Netlify.',
}

export const allProjects: ProjectModel[] = [
  archiesProject,
  pipProject,
  circuitStatsProject,
]