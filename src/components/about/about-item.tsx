import React from 'react';
import { Icon } from '../icon';

export interface AboutItemProps {
    title: string;
    description: string;
    iconName: string;
}

export const AboutItem: React.FC<AboutItemProps> = ({ title, description, iconName }) => (
    <div className='about-item'>
        <Icon className='about-item__image' name={iconName} />
        <h3 className='about-item__heading'>{title}</h3>
        <p className='about-item__description'>{description}</p>
    </div>
);
