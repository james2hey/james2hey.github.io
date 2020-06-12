import reactImage from '../assets/images/technologies/react.svg'
import typescriptImage from '../assets/images/technologies/typescript.svg'
import reduxImage from '../assets/images/technologies/redux.svg'
import kotlinImage from '../assets/images/technologies/kotlin.svg'
import nodeImage from '../assets/images/technologies/node.svg'
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
  description: 'adsfasdfadsfasd',
  image: reactImage
}

export const typescriptTechStack: TechStackModel = {
  name: 'TypeScript',
  description: 'asdfasdfasdf',
  image: typescriptImage
}

export const nodeTechStack: TechStackModel = {
  name: 'Node',
  description: 'sdafasdfasdfads',
  image: nodeImage
}

export const sassTechStack: TechStackModel = {
  name: 'Sass',
  description: 'asdfasdf',
  image: sassImage,
}

export const reduxTechStack: TechStackModel = {
  name: 'Redux',
  description: 'asdfasdf',
  image: reduxImage,
}

export const webDevTechStacks: TechStackModel[] = [reactTechStack, typescriptTechStack, sassTechStack, nodeTechStack];

export const reactNativeTechStack: TechStackModel = {
  name: 'React Native',
  description: 'sdafasdfasdfads',
  image: reactNativeImage
}
export const kotlinTechStack: TechStackModel = {
  name: 'Kotlin',
  description: 'sdafasdfasdfads',
  image: kotlinImage
}

export const mobileDevTechStacks: TechStackModel[] = [reactNativeTechStack, kotlinTechStack]

export const dotNetTechStack: TechStackModel = {
  name: '.NET',
  description: 'asdfas',
  image: dotNetImage,
}

export const cSharpTechStack: TechStackModel = {
  name: 'C#',
  description: 'asdf',
  image: cSharpImage,
}

export const sqlTechStack: TechStackModel = {
  name: 'SQL',
  description: 'sdafasdfasdfads',
  image: sqlImage
}

export const backendDevTechStacks: TechStackModel[] = [dotNetTechStack, cSharpTechStack, sqlTechStack];


export const pythonTechStack: TechStackModel = {
  name: 'Python',
  description: 'sdafasdfasdfads',
  image: pythonImage,
}

export const javaTechStack: TechStackModel = {
  name: 'Java',
  description: 'asdfasdf',
  image: javaImage,
}

export const cPlusPlusTechStack: TechStackModel = {
  name: 'C++',
  description: 'adsfasdfasdf',
  image: cPlusPlusImage,
}

export const googleAnalytics: TechStackModel = {
  name: 'Analytics',
  description: 'asdfadsf',
  image: googleImage,
}

export const gatsbyTechStack: TechStackModel = {
  name: 'Gatsby',
  description: '',
  image: gatsbyImage,
}

export const miscTechStacks: TechStackModel[] = [pythonTechStack, javaTechStack, cPlusPlusTechStack];