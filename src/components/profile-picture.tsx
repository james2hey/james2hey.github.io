import React from 'react';
import profileImage from '../assets/images/portrait.jpg';

export const ProfilePicture: React.FC = () => (
    <div className='profile-picture'>
        <img src={profileImage} alt='Profile picture' className='profile-picture__image' />
    </div>
);
