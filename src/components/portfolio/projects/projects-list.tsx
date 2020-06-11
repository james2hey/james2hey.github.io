import React, { CSSProperties, useState } from "react"
import { ProjectModel } from "../../../models/project-model"
import { ProjectsListItem } from "./projects-list-item"
import { Button } from "../../subcomponents/button"

export interface ProjectsListProps {
  projects: ProjectModel[]
  initialVisibleProjectCount: number
}

const increment = 2;

export const ProjectsList: React.FC<ProjectsListProps> = props => {
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(props.initialVisibleProjectCount)
  const visibleProjects = props.projects.slice(0, visibleProjectsCount);

  const makeMoreProjectsVisible = () => {
    if (visibleProjects < props.projects) setVisibleProjectsCount(visibleProjectsCount + increment);
  }

  // todo change to ul li.
  return (
    <div style={projectsListStyle}>
      {visibleProjects.map((project, i) =>
        <ProjectsListItem project={project} rhs={(i%2 === 1)} />
      )}
      {visibleProjects < props.projects && <Button kind={"secondary"} onClick={makeMoreProjectsVisible}>View More</Button>}
    </div>
  )
}

const projectsListStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // width: '100%'
}
