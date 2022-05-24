import React from 'react'
import profileImage from '../../assets/images/portrait.jpg'


export enum ProfilePictureSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface ProfilePictureProps {
  size: ProfilePictureSize;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ size }) => {
  return (
      <div className="profile-picture">
        <img
            src={profileImage}
            alt={`profile picture`}
            className="profile-picture__image"
        />
      </div>
  )
}
