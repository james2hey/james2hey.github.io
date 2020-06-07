import React, { CSSProperties, useState } from "react"
import { Card } from "./card"
import { TechItem } from "./tech-item"
import "../../scss/subcomponents/_tech-stack.scss"
import { Cross } from "./cross"
import { TechDescription } from "./tech-description"
import { TechStackModel } from "../../models/tech-stack-model"

export interface TechStackProps {
  header: string;
  techStacks: TechStackModel[];
}


export const TechStack: React.FC<TechStackProps> = ({ header, techStacks }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleOnClick = () => setIsExpanded(!isExpanded);
  const style = isExpanded ? modalStyle : {}
  const techStackItemsCss = isExpanded ? modalTechStackItemsStyle : {}
  return (
    <div style={style}>
      <Card style={isExpanded ? stickyStyle : {}} className={"tech-stack"} onClick={handleOnClick}>
        <h3>{header}</h3>
        <div style={crossStyle}><Cross isOpen={isExpanded} /></div>
        {isExpanded ? (
          <div>
            {techStacks.map(techStack => <TechDescription {...techStack}/>)}
          </div>
        ) :
          <div style={techStackItemsCss} className={"tech-stack__items"}>
            {techStacks.map(techStack => <TechItem image={techStack.image}/>)}
          </div>
        }

      </Card>
    </div>
  )
}

const modalStyle: CSSProperties = {
  // position: 'absolute',
  // zIndex: 10000,
}


const stickyStyle: CSSProperties = {
  position: '-webkit-sticky',
  // @ts-ignore
  position: 'sticky',
  top: 0,
  bottom: 0,
  maxWidth: '1000px',
  // maxHeight: '800px',
  // height: '90vh',
  width: '90vw',
}

const modalTechStackItemsStyle: CSSProperties = {
  flexDirection: 'column'
}

const crossStyle: CSSProperties = {
  position: "absolute",
  top: '0',
  right: '0'
}