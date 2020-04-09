import React from "react";
import "../../scss/subcomponents/_tech-item.scss"

export interface TechItemProps {
    name: string,
    image: string,
}

export const TechItem: React.FC<TechItemProps> = props => {
    return (
        <div className="tech-item">
            <img src={props.image} alt={`${props.name} image`} className="tech-item_image"/>
            <p>{props.name}</p>
        </div>
    )
};
