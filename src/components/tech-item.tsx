import React from 'react';
import { Icon } from './icon';

export interface TechItemProps {
    name: string;
    iconName: string;
    showName?: boolean;
}

export const TechItem: React.FC<TechItemProps> = props => {
    const { name, iconName, showName } = props;
    const className = showName ? 'tech-item tech-item--show-name' : 'tech-item';
    return (
        <div className={className}>
            <Icon name={iconName} className='tech-item__icon' />
            {showName && <p className='tech-item__text'>{name}</p>}
        </div>
    );
};
