import React, { CSSProperties } from "react"
import books from "../../../assets/images/books.svg";
import agile from "../../../assets/images/agile.svg";
import computer from "../../../assets/images/computer.svg";
import { AboutItem } from "./about-item"
import { boxShadow } from "../../../utils/styles"
import { Section } from "../section"

export const About: React.FC = () => {
  return (
    <Section style={aboutStyle}>
        <h2 style={{color: 'black'}}>About</h2>
          <div style={aboutContainer}>
          <AboutItem title={'Pragmatic'} description={'Investigations being pragmatic blah blah asdff asdf asdf asdf asdf asdf a sdfasd fasd f.'} image={computer} />
          <AboutItem title={'Agile'} description={'Ive always has a passion for UX design when creating websites and really want to make sure they look good.'} image={agile} />
          <AboutItem title={'UX'} description={'Ive always has a passion for UX design when creating websites and really want to make sure they look good.'} image={books} />
          </div>
    </Section>
  );
};



const aboutStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '32px',
  ...boxShadow
}

const aboutContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}
