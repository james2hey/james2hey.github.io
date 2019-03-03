import React, {Component} from 'react';
import logo from './../logo.svg';
// import './../App.css';
import './Header.css'
import jamestoohey from '../assets/img/jamestoohey.svg';

class Header extends Component { // header, skills, experience, contact
    render() {
        return (
            <header className="App-header">
                <h3>Software Developer & Design Enthusiast</h3>
                <img src={jamestoohey} className="My-name" alt="logo"/>
                {/*<img src={logo} className="App-logo" alt="logo"/>*/}

                <div className="App-header-nav">
                    <h5>
                    <a href={"#about"}>About</a> | <a href={"#skills"}>Skills</a> | <a
                    href={"#experience"}>Experience</a> | <a href={"#contact"}>Contact</a></h5>
                </div>
            </header>

        );
    }
}

export default Header;
