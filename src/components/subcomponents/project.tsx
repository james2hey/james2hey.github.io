import React from "react";
import '../../scss/subcomponents/project.scss';
import { Card } from "./card";

export interface ProjectProps {
    image: string;
    header: string;
    link: string;
    body: string;
}

export const Project: React.FC<ProjectProps> = props => {
    const { image, link, body, header } = props;
    return (
      <Card className={'project'} link={link}>
        <img src={image} alt={'project image'} className="project--image"/>
        <div className='project--details'>
          <br/>
            <h4>{header}</h4>
            <p>{body}</p>
        </div>
      </Card>
    )
};
