import React, { CSSProperties } from "react"
import { boxShadow } from "../../../utils/styles"
import { Card } from "../../subcomponents/card"

export interface AboutItemProps {
  title: string;
  description: string;
  image: string;
}

export const AboutItem: React.FC<AboutItemProps> = ({ title, description, image }) => {
  return (
    <Card style={aboutItem}>
      <img src={image} alt={`${title}`} style={imageStyle}/>
      <h3 style={headerStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </Card>
  )
}

const aboutItem: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '300px',
  margin: '12px',
  padding: '12px',
  background: 'whitesmoke',
  // ...boxShadow,
}

const imageStyle: CSSProperties = {
  height: '80px',
  width: '80px',
}

const headerStyle: CSSProperties = {
  color: 'black',
}

const descriptionStyle: CSSProperties = {
  color: 'black',
}