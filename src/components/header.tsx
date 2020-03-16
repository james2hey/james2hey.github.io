import React from 'react';
import '../scss/_header.scss'
import jamestoohey from '../assets/img/jamestoohey.svg';
import { Nav } from './nav';

export const Header: React.FC = () => {
    return (
        <header className="App-header">
            <h3>Software Engineer & UX Enthusiast</h3>
            <img src={jamestoohey} className="My-name" alt="logo" />
            <Nav />
        </header>
    );
};
