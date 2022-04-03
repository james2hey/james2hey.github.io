import React from 'react'

export enum TechItemSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface TechItemProps {
  name?: string,
  image: string,
  size?: TechItemSize,
}

export const TechItem: React.FC<TechItemProps> = props => {
  const { name, image, size } = props
  const imageModifier = size ? `--${size}` : ``
  return (
    <div className="tech-item">
      <img src={image} alt={`${name} image`} className={`tech-item__image${imageModifier}`}/>
      {name != null && <p className={'tech-item__text'}>{name}</p>}
    </div>
  )
}
