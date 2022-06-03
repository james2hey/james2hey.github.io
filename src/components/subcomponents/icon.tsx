import React from 'react';

export interface IconProps {
	src: string;
	alt: string;
	className?: string;
}

export const Icon: React.FC<IconProps> = props => {
	const { src, alt, className } = props;
	return <img src={src} alt={alt} className={`icon ${className}`} />;
};
