import React, { CSSProperties, useState } from 'react'
import { Card } from './card'
import { TechItem } from './tech-item'
import { Cross } from './cross'
import { TechStackDescription } from './tech-stack-description'
import { TechStackModel } from '../../models/tech-stack-model'

export interface TechStackProps {
  header: string;
  techStacks: TechStackModel[];
}

export const TechStack: React.FC<TechStackProps> = ({ header, techStacks }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleOnClick = () => setIsExpanded(!isExpanded)
    const techStackItemsCss = isExpanded ? modalTechStackItemsStyle : {}
    return (
      <Card style={isExpanded ? stickyStyle : {}} className={`tech-stack${isExpanded ? '--expanded' : ''}`} onClick={handleOnClick} hover={true}>
        <h3>{header}</h3>
        {isExpanded && <div style={crossStyle}><Cross isOpen={isExpanded}/></div>}
        {isExpanded ? (
            <div>
              {techStacks.map(techStack => <TechStackDescription {...techStack} key={techStack.name}/>)}
            </div>
          ) :
          <div style={techStackItemsCss} className={'tech-stack__items'}>
            {techStacks.map(techStack => <TechItem image={techStack.image} key={techStack.name}/>)}
          </div>
        }

      </Card>
    )
}

const stickyStyle: CSSProperties = {
  position: '-webkit-sticky',
  // @ts-ignore
  position: 'sticky',
  top: 0,
  bottom: 0,
  maxWidth: '1000px',
  width: '90vw',
}

const modalTechStackItemsStyle: CSSProperties = {
  flexDirection: 'column',
}

const crossStyle: CSSProperties = {
  position: 'absolute',
  top: 12,
  right: 12,
}
