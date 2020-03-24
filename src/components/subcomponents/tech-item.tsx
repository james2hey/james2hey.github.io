import React from "react";

export interface TechItemProps {
    name: string,
    image: string,
}

export const TechItem: React.FC<TechItemProps> = props => {
    return (
        <div className="Tech-item-container">
            <img src={props.image} alt={'tech image'} className="Tech-image"/>
            <p>{props.name}</p>
        </div>
    )
};
