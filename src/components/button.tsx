import React from 'react';

export enum ButtonColor {
	Primary = 'primary',
	Secondary = 'secondary'
}

export interface ButtonProps {
	color: ButtonColor;
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
	return (
		<button {...props} className={`button button--color-${props.color}`}>
			{props.children}
		</button>
	);
};
