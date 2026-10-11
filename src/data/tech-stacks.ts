export interface TechStackData {
    name: string;
    description: string;
    iconName: string;
}

// Frontend

export const typescriptTechStack: TechStackData = {
    name: 'TypeScript',
    description: 'My main language day to day, across product code, platform tooling and the pipelines that ship it.',
    iconName: 'typescript'
};

export const reactTechStack: TechStackData = {
    name: 'React',
    description:
        "Where I started, back in a 2018 internship at Vista. I've built apps and component libraries with it, and React components were my first work at Twilio.",
    iconName: 'react'
};

export const javascriptTechStack: TechStackData = {
    name: 'JavaScript',
    description: 'Underneath everything on the frontend, and still the glue in plenty of build and pipeline tooling.',
    iconName: 'javascript'
};

export const frontendTechStacks: TechStackData[] = [typescriptTechStack, reactTechStack, javascriptTechStack];

// Platform

export const buildkiteTechStack: TechStackData = {
    name: 'Buildkite',
    description:
        'The CI/CD pipelines product engineers at Twilio ship through: PR validation, deploys to staging and gradual production rollouts they can cancel or roll back.',
    iconName: 'buildkite'
};

export const playwrightTechStack: TechStackData = {
    name: 'Playwright',
    description:
        'End-to-end tests that teams write for their own features, run against every change in PRs and again in staging before it reaches production.',
    iconName: 'playwright'
};

export const awsTechStack: TechStackData = {
    name: 'AWS',
    description: 'S3, IAM, secrets storage and EC2 images for storing and deploying build artifacts and services.',
    iconName: 'aws'
};

export const platformTechStacks: TechStackData[] = [buildkiteTechStack, playwrightTechStack, awsTechStack];

// Backend

export const javaTechStack: TechStackData = {
    name: 'Java',
    description:
        'The backend services I worked on at Twilio from 2023 to 2024, and something I expect to come back to.',
    iconName: 'java'
};

export const dockerTechStack: TechStackData = {
    name: 'Docker',
    description: 'Containers for backend services, and for running end-to-end test suites in our pipelines.',
    iconName: 'docker'
};

export const kubernetesTechStack: TechStackData = {
    name: 'Kubernetes',
    description: 'Running those containers in pods, for services and for orchestrating test runs.',
    iconName: 'kubernetes'
};

export const backendTechStacks: TechStackData[] = [javaTechStack, dockerTechStack, kubernetesTechStack];

// Shown as a single line under the cards rather than with their own icons.
export const earlierTechnologies = ['React Native', 'Swift', 'Ionic', 'C#', '.NET', 'SQL'];
