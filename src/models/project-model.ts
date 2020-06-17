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
  content: "During the New Zealand lock down due to COVID-19, I created this website for Archie's Pizzeria to give them a source of web traffic. By providing the menus online, customers could find what they wanted to eat without entering the store to maintain social distancing. It is now used as their full time website at archiespizzeria.co.nz.",
};

export const pipProject: ProjectModel = {
  name: "PiP IoT Mobile App",
  image: pipImage,
  technologies: [reactNativeTechStack, typescriptTechStack, dotNetTechStack, cSharpTechStack, sqlTechStack],
  content: "PiP manufacture IoT devices and required a system to installations and management. I played a key role in developing the full stack of software. This included developing an ASP.NET backend for consuming IoT device event data and writing it to a database. I also created a mobile app to render real-time client specific data of the IoT devices.",
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
