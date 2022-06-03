import React from 'react';

export enum ButtonColor {
	Primary = 'primary',
	Secondary = 'secondary'
}

export interface ButtonProps {
	color: ButtonColor;
	className?: string;
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
	const classes = `button--color-${props.color} ${props.className}`;
	return (
		<button {...props} className={classes}>
			{props.children}
		</button>
	);
};
