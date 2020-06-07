import React, { CSSProperties } from "react"
import { TechItem } from "./tech-item"

export interface TechDescriptionProps {
  name: string;
  description: string;
  image: string;
}

export const TechDescription: React.FC<TechDescriptionProps> = ({ name, description, image }) => {
  return (
    <div style={style}>
      <TechItem image={image} name={name} />
      <p>{description}</p>
    </div>
  )
}

const style: CSSProperties = {
  display: "flex",
  flexDirection: 'row'
}