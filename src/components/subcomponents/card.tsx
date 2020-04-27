import React from 'react';
import './../../scss/subcomponents/_card.scss'

export interface CardProps {
  link?: string;
}


export const Card: React.FC<CardProps & React.HTMLProps<HTMLDivElement>> = props => {
  const { link } = props;
  const classes = !link ? `card ${props.className}` : `card--fancy ${props.className}`;
  const handleOnMouseEnter = (event: React.MouseEvent) => {
    const div = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - div.left;
    const y = event.clientY - div.top;
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
  };

  if (!link) return <div {...props} className={classes}>{props.children}</div>;

  return (
    <div {...props} className={classes} onMouseMove={handleOnMouseEnter}>{props.children}</div>
  );
};
