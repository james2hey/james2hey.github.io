import React from 'react'
import {TechItem} from './tech-item'
import {TechStackModel} from '../../models/tech-stack-model'
import {Modal} from "./modal";

export interface TechStackProps {
    header: string;
    techStacks: TechStackModel[];
}

export const TechStack: React.FC<TechStackProps> = props => {
    return (
        <Modal title={props.header} trigger={
            <button className="tech-stack-preview">
                <h3>{props.header}</h3>
                <ul className="tech-stack-preview__list-items">
                    {props.techStacks.map(techStack =>
                        <li className="tech-stack-preview__list-item">
                            <TechItem image={techStack.image} key={techStack.name} name={techStack.name} />
                        </li>)}
                </ul>
            </button>
        }>
            <ul className="tech-stack-overview">
                {props.techStacks.map(techStack =>
                    <li className="tech-stack-overview__list-item">
                        <TechItem image={techStack.image} key={techStack.name} name={techStack.name} />
                        <p className="tech-stack-overview__list-item-description">{techStack.description}</p>
                    </li>
                )}
            </ul>
        </Modal>
    )
}
