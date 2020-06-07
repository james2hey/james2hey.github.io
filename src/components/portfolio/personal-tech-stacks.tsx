import React from 'react';
import '../../scss/portfolio/_personal-tech-stacks.scss';
import c from '../../assets/images/c.svg';
import java from '../../assets/images/java.svg';
import kotlin from '../../assets/images/kotlin.svg';
import node from '../../assets/images/node.svg';
import python from '../../assets/images/python.svg';
import react from '../../assets/images/react.svg';
import reactNative from '../../assets/images/react-native.svg';
import sql from '../../assets/images/sql.svg';
import { TechItem } from "../subcomponents/tech-item";
import { TechStack} from "../subcomponents/tech-stack"
import { Section } from "./section"
import {
  backendDevTechStacks, miscTechStacks,
  mobileDevTechStacks,
  webDevTechStacks,
} from "../../models/tech-stack-model"

export const PersonalTechStacks: React.FC = () => {
  return (
    <Section className={'personal-tech-stacks'}>
      <h2>Personal Tech Stacks</h2>
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

      <br/><br/><br/><br/><br/><br/>
    </Section>
  );
};