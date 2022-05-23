import reactImage from '../assets/images/technologies/react.svg'
import typescriptImage from '../assets/images/technologies/typescript.svg'
import reduxImage from '../assets/images/technologies/redux.svg'
import ionicImage from '../assets/images/technologies/ionic.svg'
import nodeImage from '../assets/images/technologies/node.svg'
import swiftImage from '../assets/images/technologies/swift.svg'
import pythonImage from '../assets/images/technologies/python.svg'
import reactNativeImage from '../assets/images/technologies/react-native.svg'
import sqlImage from '../assets/images/technologies/sql.svg'
import dotNetImage from '../assets/images/technologies/dotnet.svg'
import cPlusPlusImage from '../assets/images/technologies/c-plus-plus.svg'
import cSharpImage from '../assets/images/technologies/c-sharp.svg'
import gatsbyImage from '../assets/images/technologies/gatsby.svg'
import sassImage from '../assets/images/technologies/sass.svg'
import javaImage from '../assets/images/technologies/java.svg'
import googleImage from '../assets/images/technologies/google.svg'

export interface TechStackModel {
  name: string;
  description: string;
  image: string;
}

export const reactTechStack: TechStackModel = {
  name: 'React',
  description: `I began using react in 2018 as part of my internship at Vista. In 2020 I joined the Vista React Tech Council where we discuss best practices about the framework and set company standards. I enjoy using the declarative framework and have built a variety of applications and libraries with it.`,
  image: reactImage,
}

export const typescriptTechStack: TechStackModel = {
  name: 'TypeScript',
  description: `I've also extensively been using TypeScript. Its powerful static type checking has made it a great technology for building large scale applications, and it is a go-to tool for me.`,
  image: typescriptImage,
}

export const sassTechStack: TechStackModel = {
  name: 'Sass',
  description: `As a premier extension of CSS, I've found Sass as a powerful tool for styling. I've been using it for a couple of years and found that it is especially useful for maintaining stylesheets. It is easy enough to style components initially, but maintainable is usually the harder part. Sass makes this a lot easier.`,
  image: sassImage,
}

export const nodeTechStack: TechStackModel = {
  name: 'Node',
  description: `I've used node's npm for most package management when web developing. I've also done studies towards looking at potential vulnerabilities that using such package managers can introduce into codebases.`,
  image: nodeImage,
}

export const reduxTechStack: TechStackModel = {
  description: `When creating large scale applications, I've often used Redux for state management. This has helped produce predictable, centralised state containers which complement frameworks like React and React Native.`,
  name: 'Redux',
  image: reduxImage,
}

export const webDevTechStacks: TechStackModel[] = [reactTechStack, typescriptTechStack, sassTechStack, nodeTechStack]

export const reactNativeTechStack: TechStackModel = {
  name: 'React Native',
  description: `Coming from a strong background in React has made using React Native second nature to me. I've built two mobile applications in production in React Native, and also created some personal projects. During university I also quantitatively researched into React Native in comparision with alternative state of the art cross-platform frameworks.`,
  image: reactNativeImage,
}
export const ionicTechStack: TechStackModel = {
  name: 'Ionic',
  description: `I have used Swift for contributing to a legacy native iOS application at Vista. It`,
  image: ionicImage,
}
export const swiftTechStack: TechStackModel = {
  name: 'Swift',
  description: `I have used Swift for contributing to a legacy native iOS application at Vista. It`,
  image: swiftImage,
}

export const mobileDevTechStacks: TechStackModel[] = [swiftTechStack, reactNativeTechStack, ionicTechStack]

export const dotNetTechStack: TechStackModel = {
  name: '.NET',
  description: `Most of my experience with .NET has been using the ASP.NET extension. I've mainly used the MVC architecture pattern with stored procedures on the data facing level.`,
  image: dotNetImage,
}

export const cSharpTechStack: TechStackModel = {
  name: 'C#',
  description: `Coming from a Java background allowed me to quickly pick up C# due to its similar syntax. I've used it at Vista when helping build a content management system for our front end apps.`,
  image: cSharpImage,
}

export const sqlTechStack: TechStackModel = {
  name: 'SQL',
  description: `I've been involved with multiple projects requiring traditional relational databases. This has involved full database design - from EER diagrams to performing subroutines like stored procedures.`,
  image: sqlImage,
}

export const backendDevTechStacks: TechStackModel[] = [dotNetTechStack, cSharpTechStack, sqlTechStack]

// Consider removing the below:
export const pythonTechStack: TechStackModel = {
  name: 'Python',
  description: `As the first language I learnt, Python has been my go to scripting language ever since. Some examples of what I've used Python for are: building a compiler, creating Machine Learning Models (using PyTorch), used TCP sockets to communicate over the socket interface.`,
  image: pythonImage,
}
export const pyTorchTechStack: TechStackModel = {
  name: 'PyTorch',
  description: `TODO`,
  image: pythonImage,
}
export const javaTechStack: TechStackModel = {
  name: 'Java',
  description: `In University Java was the main language I used for my projects. Projects involved using backend Java frameworks like Spring Boot, creating frontend apps with JavaFX, etc.`,
  image: javaImage,
}
export const cPlusPlusTechStack: TechStackModel = {
  name: 'C++',
  description: `In computer graphics courses I used C++ to crete ray tracing algorithms, use memory allocation, create mesh models, and much more! Learning a lower level language like this taught me a lot about data structures and how to write robust programs.`,
  image: cPlusPlusImage,
}
export const googleAnalytics: TechStackModel = {
  name: 'Analytics',
  description: `TODO`,
  image: googleImage,
}
export const gatsbyTechStack: TechStackModel = {
  name: 'Gatsby',
  description: `TODO`,
  image: gatsbyImage,
}
