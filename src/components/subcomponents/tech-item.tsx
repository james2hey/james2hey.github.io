import React from 'react'

export interface TechItemProps {
    name: string,
    image: string,
}

export const TechItem: React.FC<TechItemProps> = props => {
    const { name, image } = props
    return (
        <div className="tech-item">
            <img src={image} alt={name} className="tech-item__icon" />
            {/*{name != null && <p className={'tech-item__text'}>{name}</p>}*/}
        </div>
    )
}
