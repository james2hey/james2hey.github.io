import React from 'react';
import '../scss/_intro.scss'
import { Button } from "./subcomponents/button";
import agile from '../assets/images/agile.svg';
import { navigate } from "gatsby";

export const Intro = () => {
  const handleOnClick = () => navigate('#about');
    return (
        <header className={'intro'}>
          <div />
          <div>
            <h2>Hello, I'm <span className={'highlight'}>James Toohey</span>.</h2>
            <h2>I'm a Software Engineer from NZ.</h2>
          </div>
          <Button kind={'secondary'} onClick={handleOnClick}>About Me</Button>
        </header>
    );
};
