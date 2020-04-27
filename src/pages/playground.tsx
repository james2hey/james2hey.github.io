import Layout from "../components/layout";
import React from "react";
import { Card } from "../components/subcomponents/card";
import "./../scss/_playground.scss";
import { Button } from "../components/subcomponents/button";
import { Nav } from "../components/subcomponents/nav";
import SEO from "../components/seo";
import { Code } from "../components/subcomponents/code";
import react from './../assets/images/react.svg';
import python from './../assets/images/python.svg';
import kotlin from './../assets/images/kotlin.svg';
import { TechItem } from "../components/subcomponents/tech-item";
import { Bar } from "../components/subcomponents/bar";

const PlaygroundPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Playground" />
      <div className={"playground"}>
        <h1>Where I test out my <span className={"highlight"}>components</span>.</h1>
        <br />
        <PlaygroundSection title={'Cards'}>
          <div className={"playground-cards"}>
            <PlaygroundCard />
            <PlaygroundCard />
          </div>
        </PlaygroundSection>
        <PlaygroundSection title={'Buttons'}>
          <Button kind={"primary"}>Primary</Button>
          <Button kind={"secondary"}>Secondary</Button>
        </PlaygroundSection>
        <PlaygroundSection title={'Bar'}>
          <Bar level={6} />
        </PlaygroundSection>
        <PlaygroundSection title={'Navigation'}>
          <Nav />
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
    <>
      <h3>{title}</h3>
      {children}
      <br />
    </>
  )
};

const PlaygroundCard: React.FC = () => {
  return (
    <Card className={"playground-card"}>
      <h4 className={"highlight"}>Hello</h4>
      <p>Here is a bunch of text on the card.</p>
      <p>Here is a bunch more of text on the card.</p>
    </Card>
  );
};
