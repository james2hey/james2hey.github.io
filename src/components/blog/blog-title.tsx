import React from 'react'
import { Link } from 'gatsby'
import { ProfilePicture, ProfilePictureSize } from '../subcomponents/profile-picture'

export const BlogTitle = () => {
  return (
    <div className={'blog-title'}>
      <div className={'blog-title__left'}>
        <h1>
          <Link to={'/'} className={'blog-title__heading'}>
            James Toohey</Link> - <span className={'highlight'}>Blog</span>
        </h1>
        <h4 className={'blog-title__subheading'}>A Software Engineer from New Zealand</h4>
      </div>
      <ProfilePicture size={ProfilePictureSize.SMALL}/>
    </div>
  )
}
