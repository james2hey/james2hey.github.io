import React from "react";
import '../../scss/subcomponents/_profile-picture.scss'
import profileImage from "../../assets/images/portrait.jpg";


export enum ProfilePictureSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface ProfilePictureProps {
  size: ProfilePictureSize;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ size }) => {
  return <img
    src={profileImage} alt={`profile picture`}
    className={`profile-picture profile-picture--${size.toString()}`} />
};
