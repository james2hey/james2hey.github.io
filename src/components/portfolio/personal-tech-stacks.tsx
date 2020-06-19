import React from 'react'
import '../../scss/portfolio/_personal-tech-stacks.scss'
import { TechStack } from '../subcomponents/tech-stack'
import { Section } from './section'
import {
  backendDevTechStacks,
  miscTechStacks,
  mobileDevTechStacks,
  webDevTechStacks,
} from '../../models/tech-stack-model'

export const PersonalTechStacks: React.FC = () => {
  return (
    <Section className={'personal-tech-stacks'}>
      <h2>Personal Tech Stacks</h2>
      <h4 className={'personal-tech-stacks__hint'}>(Click to expand)</h4>
      <div className={'personal-tech-stacks__list'} style={{ maxWidth: '1200px'}}>
        <TechStack
          key={'web'}
          header={'Web Dev'}
          techStacks={webDevTechStacks}
        />
        <TechStack
          key={'backend'}
          header={'Backend'}
          techStacks={backendDevTechStacks}
        />
        <TechStack
          key={'mobile'}
          header={'Mobile'}
          techStacks={mobileDevTechStacks}
        />
        <TechStack
          key={'misc'}
          header={'Misc'}
          techStacks={miscTechStacks}
        />
      </div>
    </Section>
  );
};
