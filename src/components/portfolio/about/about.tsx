import React from "react"
import "../../../scss/portfolio/about/_about.scss"
import agileImage from "../../../assets/images/icons/agile.svg"
import computerImage from "../../../assets/images/icons/computer.svg"
import pragmaticImage from "../../../assets/images/icons/pragmatic.svg"
import { AboutItem } from "./about-item"
import { Section } from "../section"

export const About: React.FC = () => {
  return (
    <Section className={"about"} id={"about"}>
      <h2 className={"about__title"}>About</h2>
      <p className={"about__description"}>A software engineer with experience across the full
        software development lifecycle. Driven to pragmatically
        deliver software solutions with agility to meet evolving client requirements. Strongly skilled with front end
        technologies and passionate about UX design.</p>
      <h3 className={"about__title"}>My Principles</h3>
      <div className={"about__container"}>
        <AboutItem title={"Pragmatism"}
                   description={`Take realistic approaches to software development to increase deployment and release frequencies.`}
                   image={pragmaticImage}/>
        <AboutItem title={"Agility"}
                   description={`Welcome changing requirements. Software should be flexible and adaptable.`}
                   image={agileImage}/>
        <AboutItem title={"Simplicity"}
                   description={"Less is more. Maximising the work not done increases productivity and decreases wasted time."}
                   image={computerImage}/>
      </div>
    </Section>
  )
}
