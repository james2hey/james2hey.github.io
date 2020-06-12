import React, { CSSProperties } from "react"
import agileImage from "../../../assets/images/icons/agile.svg"
import computerImage from "../../../assets/images/icons/computer.svg"
import pragmaticImage from "../../../assets/images/icons/pragmatic.svg"
import { AboutItem } from "./about-item"
import { boxShadow } from "../../../utils/styles"
import { Section } from "../section"

export const About: React.FC = () => {
  return (
    <Section style={aboutStyle} id={"about"}>
      <h2 style={{ color: "black" }}>About</h2>
      <p style={{ color: "black", width: '90%', maxWidth: '900px' }}>A software engineer with experience across the full software development lifecycle. Driven to pragmatically
        deliver software solutions with agility to meet evolving client requirements. Strongly skilled with front end
        technologies and passionate about UX design.</p>
      <div style={aboutContainer}>
        <AboutItem title={"Pragmatic"}
                   description={"Investigations being pragmatic blah blah asdff asdf asdf asdf asdf asdf a sdfasd fasd f."}
                   image={pragmaticImage}/>
        <AboutItem title={"Agile"}
                   description={"Ive always has a passion for UX design when creating websites and really want to make sure they look good."}
                   image={agileImage}/>
        <AboutItem title={"Designer"}
                   description={"My passion for UX design drives Ive always has a passion for UX design when creating websites and really want to make sure they look good."}
                   image={computerImage}/>
      </div>
    </Section>
  )
}


const aboutStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  background: "white",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: "32px",
  ...boxShadow,
}

const aboutContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}
