import React from 'react'
import { Card } from '../../subcomponents/card'

export interface AboutItemProps {
  title: string;
  description: string;
  image: string;
}

export const AboutItem: React.FC<AboutItemProps> = ({ title, description, image }) => {
  return (
    <Card className="about-item">
      <img className="about-item__image" src={image} alt={`${title}`} />
      <h3 className="about-item__heading">{title}</h3>
      <p className="about-item__description">{description}</p>
    </Card>
  );
};
