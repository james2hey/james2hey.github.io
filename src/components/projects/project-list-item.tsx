import React from 'react';
import { TechItem } from '../tech-item';
import { ProjectData } from './project-data';

export interface ProjectListItemProps {
    project: ProjectData;
}

export const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }) => {
    return (
        <article className='project-list-item'>
            <div className='project-list-item__brief'>
                <h3>{project.name}</h3>
                <img className='project-list-item__image' src={project.image} alt={project.name} />
            </div>
            <div className='project-list-item__details'>
                <p className='project-list-item__details-content'>{project.content}</p>
                <div className='project-list-item__technologies'>
                    <h4 className='project-list-item__technologies-heading'>Tech Stack</h4>
                    <div className='project-list-item__technology-item-list'>
                        {project.technologies.map(technology => (
                            <TechItem iconName={technology.iconName} name={technology.name} key={technology.name} />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};
