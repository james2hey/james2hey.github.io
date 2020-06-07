import reactImage from '../assets/images/react.svg';
import kotlinImage from '../assets/images/kotlin.svg';
import nodeImage from '../assets/images/node.svg';
import pythonImage from '../assets/images/python.svg';
import reactNativeImage from '../assets/images/react-native.svg';
import sqlImage from '../assets/images/sql.svg';

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
export const nodeTechStack: TechStackModel = {
  name: 'Node',
  description: 'sdafasdfasdfads',
  image: nodeImage
}

export const webDevTechStacks: TechStackModel[] = [reactTechStack, nodeTechStack];

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

export const sqlTechStack: TechStackModel = {
  name: 'SQL',
  description: 'sdafasdfasdfads',
  image: sqlImage
}

export const backendDevTechStacks: TechStackModel[] = [sqlTechStack];


export const pythonTechStack: TechStackModel = {
  name: 'Python',
  description: 'sdafasdfasdfads',
  image: pythonImage
}

export const miscTechStacks: TechStackModel[] = [pythonTechStack];


// export const exampleTechStacks: TechStackModal[] = [
//   {name: 'React', description: 'For a few years Ive been using react and yeah its real cool i really like it maybe one day ill like it so much that ill write an actual desciption about it omg yeah that is actually a really good idea ok i shall try that out when i get the time to.', image: react },
//   {name: 'Node', description: 'For a few years Ive been using react and yeah its real cool i really like it maybe one day ill like it so much that ill write an actual desciption about it omg yeah that is actually a really good idea ok i shall try that out when i get the time to.', image: node },
//   {name: 'SQL', description: 'For a few years Ive been using react and yeah its real cool i really like it maybe one day ill like it so much that ill write an actual desciption about it omg yeah that is actually a really good idea ok i shall try that out when i get the time to.', image: sql },
//   {name: 'Python', description: 'For a few years Ive been using react and yeah its real cool i really like it maybe one day ill like it so much that ill write an actual desciption about it omg yeah that is actually a really good idea ok i shall try that out when i get the time to.', image: python },
// ]