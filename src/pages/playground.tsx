import Layout from "../gatsby/layout";
import React from "react";
import { Card } from "../components/subcomponents/card";
import "./../scss/_playground.scss";

const PlaygroundPage: React.FC = () => {
  return (
    <Layout>
      <div className={"playground"}>
        <h1>Where I test out my <span className={"highlight"}>components</span>.</h1>
        <br />
        <h3>Cards</h3>
        <div className={"playground-cards"}>
          <PlaygroundCard />
          <PlaygroundCard />
        </div>
      </div>
    </Layout>
  );
};

export default PlaygroundPage;

const PlaygroundCard: React.FC = () => {
  return (
    <Card className={"playground-card"}>
      <h4 className={"highlight"}>Hello</h4>
      <p>Here is a bunch of text on the card.</p>
      <p>Here is a bunch more of text on the card.</p>
    </Card>
  );
};
