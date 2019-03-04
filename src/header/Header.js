import React, {Component} from 'react';
import logo from './../logo.svg';

import './Header.css'
import jamestoohey from '../assets/img/jamestoohey.svg';
import Nav from "../nav/Nav";

class Header extends Component { // header, skills, experience, contact
    render() {
        return (
            <header className="App-header">
                <h3>Software Developer & Design Enthusiast</h3>
                <img src={jamestoohey} className="My-name" alt="logo"/>
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}

                <Nav />
            </header>

        );
    }
}

export default Header;
