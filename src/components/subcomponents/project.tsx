import React from "react";
import '../../scss/subcomponents/project.scss';

export interface ProjectProps {
    image: string;
    header: string;
    link: string;
    body: string;
}

export const Project: React.FC<ProjectProps> = props => {
    const { image, link, body, header } = props;
    return (
        <div className='Project-item'>
            <div className='Project-image-container'>
                <img src={image} alt={'project image'} className="Project-image"/>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className='Project-body'>
                    <h5>{header}</h5>
                    <p>{body}</p>
                </div>
            </a>
        </div>
    )
};