import React from 'react'
import '../../../scss/portfolio/projects/_projects.scss'

import { Section } from '../section'
import { ProjectsList } from './projects-list'
import { allProjects } from '../../../models/project-model'

export const Projects: React.FC = () => {
  return (
    <Section id={'projects'} className={'projects'}>
      <h2>Recent Projects</h2>
      <ProjectsList projects={allProjects} initialVisibleProjectCount={3}/>
    </Section>
  )
}
