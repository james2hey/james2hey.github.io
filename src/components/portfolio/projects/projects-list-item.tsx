import React, { CSSProperties, useState } from "react"
import { ProjectModel } from "../../../models/project-model"
import { Card } from "../../subcomponents/card"

export interface ProjectsListItemProps {
  project: ProjectModel
  rhs?: boolean // display on the right hand side.
}

export const ProjectsListItem: React.FC<ProjectsListItemProps> = ({ project, rhs, children }) => {
  // const style = rhs ? {}

  return (
    <Card style={projectStyle} theme={'light'}>
      <h3>{project.name}</h3>
      <div style={projectContentStyle}>
        {rhs ?
          <>
            <img src={project.image} alt={project.name} style={imageStyle}/>
            <p>{project.content}</p>
          </> :
          <>
            <p>{project.content}</p>
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
  color: "black"
}

export const projectContentStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: ''
}

export const imageStyle: CSSProperties = {

}
