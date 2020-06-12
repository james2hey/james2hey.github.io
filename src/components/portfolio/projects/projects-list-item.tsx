import React, { CSSProperties, useState } from "react"
import { ProjectModel } from "../../../models/project-model"
import { Card } from "../../subcomponents/card"
import { TechItem } from "../../subcomponents/tech-item"

export interface ProjectsListItemProps {
  project: ProjectModel
  rhs?: boolean // display on the right hand side.
}

export const ProjectsListItem: React.FC<ProjectsListItemProps> = ({ project, rhs, children }) => {
  // const style = { ...projectStyle, alignSelf: rhs ? 'flex-end' : 'flex-start' }

  const description = (
    <div style={projectDescriptionStyle}>
      <p>{project.content}</p>
      <div style={technologiesListStyle}>
        {project.technologies.map(technology => <TechItem image={technology.image} name={technology.name} />)}
      </div>
    </div>
  )

  return (
    <Card style={projectStyle}>
      <h3>{project.name}</h3>
      <div style={projectContentStyle}>
        {rhs ?
          <>
            <img src={project.image} alt={project.name} style={imageStyle}/>
            {description}
          </> :
          <>
            {description}
            <img src={project.image} alt={project.name} style={imageStyle}/>
          </>
        }
      </div>
    </Card>
  )
}

export const projectStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // alignSelf: 'flex-start',
  width: '80%',
  maxWidth: '1600px',
  color: "black",
  marginBottom: '48px',
  padding: '12px',
}

export const projectContentStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
}

export const imageStyle: CSSProperties = {
  objectFit: 'cover',
  width: '30vw',
  maxHeight: '400px'
}

export const projectDescriptionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center'
}

export const technologiesListStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}
