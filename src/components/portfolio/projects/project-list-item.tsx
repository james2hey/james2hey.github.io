import React from 'react'
import { ProjectModel } from '../../../models/project-model'
import { TechItem, TechItemSize } from '../../subcomponents/tech-item'

export interface ProjectListItemProps {
  project: ProjectModel
  rightHandSide?: boolean
}

export const ProjectListItem: React.FC<ProjectListItemProps> = ({ project, rightHandSide, children }) => {
  return (
    <li className="project-list-item">
      <div className="project-list-item__brief">
        <h3>{project.name}</h3>
        <img className="project-list-item__image" src={project.image} alt={project.name} />
      </div>
      <div className="project-list-item__details">
          <p>{project.content}</p>
          <div className="project-list-item__technologies">
            <h4 className="project-list-item__technologies-heading">Technologies Used</h4>
            <div className="project-list-item__technology-item-list">
              {project.technologies.map(
                technology => <TechItem image={technology.image}
                                        name={technology.name}
                                        size={TechItemSize.Small}
                                        key={technology.name} />)}
            </div>
          </div>
      </div>
    </li>
  )
}
