import Layout from "../components/layout"
import React from "react"
import { Card } from "../components/subcomponents/card"
import "./../scss/_playground.scss"
import { Button } from "../components/subcomponents/button"
import { PortfolioNav } from "../components/portfolio/portfolio-nav"
import SEO from "../components/seo"
import { Code } from "../components/subcomponents/code"
import react from "./../assets/images/react.svg"
import python from "./../assets/images/python.svg"
import kotlin from "./../assets/images/kotlin.svg"
import { TechItem } from "../components/subcomponents/tech-item"
import { Bar } from "../components/subcomponents/bar"
import { ProfilePicture, ProfilePictureSize } from "../components/subcomponents/profile-picture"
import { Project } from "../components/subcomponents/project"
import milk from '../assets/images/milk.png';

const PlaygroundPage: React.FC = () => {
  const handleOnClick = () => alert('Hey, congrats');

  return (
    <Layout>
      <SEO title="Playground" />
      <div className={"playground"}>
        <h1>Where I test out my <span className={"highlight"}>components</span>.</h1>
        <PlaygroundSection title={'Cards'}>
          <div className={"playground-cards"}>
            <Card className={"playground-card"}>
              <h4 className={"highlight"}>Normal Card</h4>
              <p>Here is a bunch of text on the card.</p>
              <p>Here is a bunch more of text on the card.</p>
            </Card>
            <Card className={"playground-card"} link={'hello'} onClick={handleOnClick}>
              <h4 className={"highlight"}>Hover Card</h4>
              <p>Here is a bunch of text on the card.</p>
              <p>Here is a bunch more of text on the card.</p>
            </Card>
          </div>
        </PlaygroundSection>
        <PlaygroundSection title={'Buttons'}>
          <Button kind={"primary"} onClick={handleOnClick}>Primary</Button>
          <Button kind={"secondary"} onClick={handleOnClick}>Secondary</Button>
        </PlaygroundSection>
        <PlaygroundSection title={'Bar'}>
          <Bar level={6} />
        </PlaygroundSection>
        <PlaygroundSection title={'Navigation'}>
          <PortfolioNav />
        </PlaygroundSection>
        <PlaygroundSection title={'Code'}>
          <Code>
            playground.components.forEach(component => console.log(`lookin good!`);
          </Code>
          <br/>
        </PlaygroundSection>
        <PlaygroundSection title={'Tech Item'}>
          <div className={"playground-cards"}>
            <TechItem name={'React'} image={react}/>
            <TechItem name={'Python'} image={python}/>
            <TechItem name={'Kotlin'} image={kotlin}/>
          </div>
        </PlaygroundSection>
        <PlaygroundSection title={'Profile Picture'}>
          {Object.values(ProfilePictureSize).map(size => <ProfilePicture size={size}/>)}
        </PlaygroundSection>
        <PlaygroundSection title={'Project'}>
          <Project image={milk} header={'Milk'} link={'https://google.com'} body={'this is a project called milk'} />
        </PlaygroundSection>
      </div>
    </Layout>
  );
};

export default PlaygroundPage;

interface PlaygroundSectionProps {
  title: string;
}

const PlaygroundSection: React.FC<PlaygroundSectionProps> = props => {
  const { title, children } = props;
  return (
    <div className={'playground__section'}>
      <h3>{title}</h3>
      {children}
    </div>
  )
};
