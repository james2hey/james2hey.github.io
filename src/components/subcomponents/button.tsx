import React from 'react';

export interface ButtonProps {
  kind: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  const classes = `button--${props.kind} ${props.className}`;
  return <button {...props} className={classes}>{props.children}</button>;
};
