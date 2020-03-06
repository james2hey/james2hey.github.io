import React from 'react';
import '../scss/header.scss'
import jamestoohey from '../assets/img/jamestoohey.svg';
import portrait from '../assets/img/portrait.jpg';
import { Nav } from './nav';

export const Header: React.FC = () => {
    return (
        <header className="App-header">
            {/*<img src={portrait} />*/}
            <h3>Software Engineer & UX Enthusiast</h3>
            <img src={jamestoohey} className="My-name" alt="logo" />
            {/*<img src={logo} className="App-logo" alt="logo"/>*/}

            <Nav />
        </header>
    );
};
