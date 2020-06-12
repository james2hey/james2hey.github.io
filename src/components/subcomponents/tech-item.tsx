import React from "react"
import "../../scss/subcomponents/_tech-item.scss"

export interface TechItemProps {
    name?: string,
    image: string,
}

export const TechItem: React.FC<TechItemProps> = props => {
    return (
        <div className="tech-item">
            <img src={props.image} alt={`${props.name} image`} className="tech-item__image"/>
          {name != null && <p className={"tech-item__text"}>{props.name}</p>}
        </div>
    )
};
