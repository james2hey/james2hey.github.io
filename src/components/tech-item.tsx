import React from 'react';

export interface TechItemProps {
	name: string;
	image: string;
	showName?: boolean;
}

export const TechItem: React.FC<TechItemProps> = props => {
	const { name, image, showName } = props;
	const className = showName ? 'tech-item tech-item--show-name' : 'tech-item';
	return (
		<div className={className}>
			<img src={image} alt={name} className='tech-item__icon' />
			{showName && <p className='tech-item__text'>{name}</p>}
		</div>
	);
};
