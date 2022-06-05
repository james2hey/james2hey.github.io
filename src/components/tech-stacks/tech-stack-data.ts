import reactImage from '../../assets/images/technologies/react.svg';
import typescriptImage from '../../assets/images/technologies/typescript.svg';
import reduxImage from '../../assets/images/technologies/redux.svg';
import ionicImage from '../../assets/images/technologies/ionic.svg';
import nodeImage from '../../assets/images/technologies/node.svg';
import jestImage from '../../assets/images/technologies/jest.svg';
import swiftImage from '../../assets/images/technologies/swift.svg';
import reactNativeImage from '../../assets/images/technologies/react-native.svg';
import sqlImage from '../../assets/images/technologies/sql.svg';
import dotNetImage from '../../assets/images/technologies/dotnet.svg';
import cSharpImage from '../../assets/images/technologies/c-sharp.svg';
import sassImage from '../../assets/images/technologies/sass.svg';

export interface TechStackData {
	name: string;
	description: string;
	image: string;
}

export const reactTechStack: TechStackData = {
	name: 'React',
	description:
		'I began using react in 2018 as part of my internship at Vista. In 2020 I joined the Vista React Tech Council where we discuss best practices about the framework and set company standards. I enjoy using the declarative framework and have built a variety of applications and libraries with it.',
	image: reactImage
};

export const typescriptTechStack: TechStackData = {
	name: 'TypeScript',
	description:
		"I've also extensively been using TypeScript. Its powerful static type checking has made it a go-to technology for me, especially when building large scale applications.",
	image: typescriptImage
};

export const sassTechStack: TechStackData = {
	name: 'Sass',
	description:
		"I've used Sass as a primary way to style web based applications for a few years and believe it is a great option for managing CSS. Alongside BEM methodologies it can ease the maintenance of styling significantly.",
	image: sassImage
};

export const nodeTechStack: TechStackData = {
	name: 'Node',
	description:
		"Node and NPM underpin these web tools I have experience with. I have a very strong understanding of Node and have used it for over four years now. I've also done research studies investigation potential vulnerabilities that using NPM can introduce.",
	image: nodeImage
};

export const jestTechStack: TechStackData = {
	name: 'Jest',
	description:
		"When testing React based applications I've been using Jest as the primary testing framework. Its proven a useful tool and great when used with libraries such as the React Testing Library.",
	image: jestImage
};

export const webDevTechStacks: TechStackData[] = [
	reactTechStack,
	typescriptTechStack,
	sassTechStack,
	nodeTechStack,
	jestTechStack
];

export const swiftTechStack: TechStackData = {
	name: 'Swift',
	description:
		"I've worked on a native iOS application at Vista for a couple of years. This was primarily using the SwiftUI framework. I enjoy learning about the lower level details of how the native code performs vs web cross platform frameworks, and have found it useful for applying optimisations to web based mobile apps.",
	image: swiftImage
};
export const ionicTechStack: TechStackData = {
	name: 'Ionic',
	description:
		'I created a new mobile app from the ground up at Vista using React, Ionic and Capacitor. This took us just over a year, and the product is now used by multiple customers. These were powerful tools that helped us rapidly create a product that could be built on both iOS and Android platforms.',
	image: ionicImage
};
export const reactNativeTechStack: TechStackData = {
	name: 'React Native',
	description:
		"I've got a strong background in React, making React Native fairly second nature to me. I've built two mobile applications in production using React Native, and also created some personal projects. During university I quantitatively researched into React Native in comparision with alternative cross-platform frameworks (Flutter, Xamarin, etc).",
	image: reactNativeImage
};

export const mobileDevTechStacks: TechStackData[] = [swiftTechStack, ionicTechStack, reactNativeTechStack];

export const dotNetTechStack: TechStackData = {
	name: '.NET',
	description:
		"Most of my experience with .NET has been using the ASP.NET extension. I've been involved with using the standard MVC architecture patterns including stored procedures on the data facing level.",
	image: dotNetImage
};

export const cSharpTechStack: TechStackData = {
	name: 'C#',
	description:
		"Coming from a Java background allowed me to quickly pick up C# due to its similar syntax. I've used it at Vista when helping build a content management system API for our front-end applications.",
	image: cSharpImage
};

export const sqlTechStack: TechStackData = {
	name: 'SQL',
	description:
		"I've been involved with a few projects requiring SQL relational databases. This has involved full database design - from EER diagrams to performing subroutines like stored procedures. I aim to improve my knowledge in this area further as I keep developing my skill set.",
	image: sqlImage
};

export const backendDevTechStacks: TechStackData[] = [dotNetTechStack, cSharpTechStack, sqlTechStack];

export const reduxTechStack: TechStackData = {
	description:
		"When creating large scale applications, I've often used Redux for state management. This has helped produce predictable, centralised state containers which complement frameworks like React and React Native.",
	name: 'Redux',
	image: reduxImage
};
