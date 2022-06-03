import React from 'react';

export interface CodeProps {}

export const Code: React.FC<CodeProps & React.HTMLProps<HTMLElement>> = props => (
	<code {...props} className='code'>
		{props.children}
	</code>
);
