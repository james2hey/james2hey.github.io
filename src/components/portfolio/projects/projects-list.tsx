import React, { useState } from "react"
import "../../../scss/portfolio/projects/_projects-list.scss"
import { ProjectModel } from "../../../models/project-model"
import { ProjectsListItem } from "./projects-list-item"
import { Button } from "../../subcomponents/button"

export interface ProjectsListProps {
  projects: ProjectModel[]
  initialVisibleProjectCount: number
}

const increment = 2
const isOdd = (num: number) => num % 2 === 1

export const ProjectsList: React.FC<ProjectsListProps> = props => {
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(props.initialVisibleProjectCount)
  const visibleProjects = props.projects.slice(0, visibleProjectsCount);

  const makeMoreProjectsVisible = () => {
    if (visibleProjects < props.projects) setVisibleProjectsCount(visibleProjectsCount + increment);
  }

  // todo change to ul li.
  return (
    <div className={"projects-list"}>
      {visibleProjects.map((project, i) =>
        <ProjectsListItem key={project.name} project={project} rightHandSide={isOdd(i)}/>,
      )}
      {visibleProjects < props.projects &&
      <Button kind={"secondary"} onClick={makeMoreProjectsVisible}>View More</Button>}
    </div>
  )
}
