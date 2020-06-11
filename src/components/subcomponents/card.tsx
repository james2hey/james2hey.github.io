import React from 'react';
import './../../scss/subcomponents/_card.scss'

export interface CardProps {
  link?: string;
  notFancy?: string;
  theme?: 'light' | 'dark'
}


export const Card: React.FC<CardProps & React.HTMLProps<HTMLDivElement>> = props => {
  const { link, notFancy, theme } = props;
  const classes = !link ? `card--fancy ${props.className}` : `card--fancy ${props.className}`;

  if (!link && notFancy) return <div {...props} className={`card--fancy`}>{props.children}</div>;

  // const handleOnClick = () => window.open(link);

  // const handleOnMouseEnter = (event: React.MouseEvent) => {
  //   const div = event.currentTarget.getBoundingClientRect();
  //   const x = event.clientX - div.left;
  //   const y = event.clientY - div.top;
  //   document.documentElement.style.setProperty('--mouse-x', `${x}px`);
  //   document.documentElement.style.setProperty('--mouse-y', `${y}px`);
  // };

  return (
    <div {...props} className={classes}>{props.children}</div>
  );
};
