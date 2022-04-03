import React from 'react'
import { navigate } from 'gatsby'
import { Button } from '../subcomponents/button'
import { ProfilePicture, ProfilePictureSize } from '../subcomponents/profile-picture'

export const Intro = () => {
  const handleOnClick = () => navigate('#about')
  return (
    <header className={'intro'}>
      <div className={'intro__container'}>
        <ProfilePicture size={ProfilePictureSize.MEDIUM}/>
        <br/>
        <br/>
        <h2>Hello, I'm <span className={'highlight'}>James Toohey</span>.</h2>
        <h2>I'm a Software Engineer from NZ.</h2>
      </div>
      <Button kind={'secondary'} onClick={handleOnClick}>About Me</Button>
    </header>
  )
}
