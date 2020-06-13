import React from "react"
import "../../../scss/portfolio/projects/_projects-list-item.scss"
import { ProjectModel } from "../../../models/project-model"
import { Card } from "../../subcomponents/card"
import { TechItem, TechItemSize } from "../../subcomponents/tech-item"

export interface ProjectsListItemProps {
  project: ProjectModel
  rightHandSide?: boolean
}

export const ProjectsListItem: React.FC<ProjectsListItemProps> = ({ project, rightHandSide, children }) => {
  const description = (
    <div>
      <p>{project.content}</p>
      <div>
        <h4 style={{ textAlign: "center", marginBottom: "12px" }}>Technologies Used</h4>
        <div className={"projects-list-item__technologies"}>
          {project.technologies.map(technology => <TechItem image={technology.image} name={technology.name}
                                                            size={TechItemSize.Small} key={technology.name}/>)}
        </div>
      </div>
    </div>
  )

  return (
    <Card className={"projects-list-item"}>
      <h3>{project.name}</h3>
      <div className={"projects-list-item__details"}>
        {rightHandSide ?
          <>
            <img src={project.image} alt={project.name} className={"projects-list-item__image"}/>
            {description}
          </> :
          <>
            {description}
            <img src={project.image} alt={project.name} className={"projects-list-item__image"}/>
          </>
        }
      </div>
    </Card>
  )
}