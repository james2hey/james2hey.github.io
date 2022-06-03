import React, { useCallback } from 'react';
import { navigate } from 'gatsby';
import { Button, ButtonColor } from '../subcomponents/button';
import { ProfilePicture } from '../subcomponents/profile-picture';

export const Intro = () => {
	const handleOnClick = useCallback(() => navigate('#about'), []);

	return (
		<header className='intro'>
			<div className='intro__container'>
				<ProfilePicture />
				<h1 className='intro__main-heading'>
					{"Kia ora, I'm "}
					<span className='highlight'>James Toohey</span>.
				</h1>
				<h2>
					{"I'm a Software Engineer from New Zealand"}
					<span className='intro__flag'>🇳🇿</span>
				</h2>
			</div>
			<Button color={ButtonColor.Secondary} onClick={handleOnClick}>
				About Me
			</Button>
		</header>
	);
};
