import React from 'react';

export interface BackgroundProps {
    header: string;
    reversed: boolean;
    body: JSX.Element;
    image: string;
}

export const Background: React.FC<BackgroundProps> = props => {
    const { header, body, image } = props;
    return props.reversed ? (
            <div className='Project-item'>
                <div className='Project-body'>
                    <h4>{header}</h4>
                    {body}
                </div>
                <div className='Background-image-container'>
                    <img src={image} alt={'project image'} className="Project-image"/>
                </div>
            </div>
    )
        : (
            <div className='Project-item'>
                <div className='Project-image-container'>
                    <img src={image} alt={'project image'} className="Project-image"/>
                </div>
                <div className='Project-body'>
                    <h4>{header}</h4>
                    <p>{body}</p>
                </div>
            </div>
        )
};