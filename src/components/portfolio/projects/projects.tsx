import React from 'react'

import { Section } from '../section'
import { ProjectList } from './project-list'
import { allProjects } from '../../../models/project-model'

export const Projects: React.FC = () => {
  return (
    <Section id={'projects'} className={'projects'}>
      <h2>Recent Projects</h2>
      <ProjectList projects={allProjects} initialVisibleProjectCount={3}/>
    </Section>
  )
}
