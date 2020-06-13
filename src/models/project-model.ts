import {
  cSharpTechStack,
  dotNetTechStack,
  gatsbyTechStack,
  googleAnalytics,
  reactNativeTechStack,
  reactTechStack,
  reduxTechStack,
  sqlTechStack,
  TechStackModel,
  typescriptTechStack,
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
  name: "Archies Pizzeria Website",
  image: archiesPizzeriaImage,
  technologies: [reactTechStack, typescriptTechStack, gatsbyTechStack, googleAnalytics],
  content: "During the New Zealand lock down due to COVID-19, I created this website for Archie's Pizzeria to provide them with a source of web traffic. Proving online access to their menus allowed people to safely purchase food while keeping socially distant. It is now used as their full time website at archiespizzeria.co.nz.",
}

export const pipProject: ProjectModel = {
  name: "PiP IoT Mobile App",
  image: pipImage,
  technologies: [reactNativeTechStack, typescriptTechStack, dotNetTechStack, cSharpTechStack, sqlTechStack],
  content: "PiP manufacture IoT devices and required software to manage device installations. I played a key role in developing the full stack of software from server side to the mobile app to be used as an on field tool for installations.",
}

export const circuitStatsProject: ProjectModel = {
  name: "Circuit Stats Mobile App",
  image: circuitStatsImage,
  technologies: [reactNativeTechStack, reduxTechStack, typescriptTechStack],
  content: "This project involved creating a mobile app to present Cinema executives with realtime key statistics for their circuits. This provides easy access for insight into key performance indicators for each cinema and the ability to drill down into specific metrics.",
}

export const allProjects: ProjectModel[] = [
  archiesProject,
  pipProject,
  circuitStatsProject,
]
