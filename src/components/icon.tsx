import React from 'react';
import sprite from './../assets/icons/sprite.svg';

export interface IconProps {
    name: string;
    className?: string;
}

export const Icon: React.FC<IconProps> = props => {
    const { name, className } = props;
    const svgClassName = className ? `icon icon__${name} ${className}` : `icon__${name}`;
    return (
        <svg name={name} className={svgClassName}>
            <use href={sprite + `#${name}`} />
        </svg>
    );
};
