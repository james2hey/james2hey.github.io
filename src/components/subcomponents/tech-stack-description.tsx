import React, { CSSProperties } from "react"
import { TechItem } from "./tech-item"

export interface TechDescriptionProps {
  name: string;
  description: string;
  image: string;
}

export const TechStackDescription: React.FC<TechDescriptionProps> = ({ name, description, image }) => {
  return (
    <div style={style}>
      <div style={techItemStyle}>
        <TechItem image={image} name={name}/>
      </div>
      <p style={textStyle}>{description}</p>
    </div>
  )
}

const style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
}

const techItemStyle: CSSProperties = {
  marginRight: 24,
}

const textStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  // alignItems: 'center',
}

