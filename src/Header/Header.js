import React, {Component} from 'react';
import logo from './../logo.svg';
// import './../App.css';
import './Header.css'

class Header extends Component { // Header, skills, experience, contact
    render() {
        return (
            <header className="App-header">
                <p className="App-header-text-title">Software Developer & Design Enthusiast</p>
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="App-header-nav">
                    <p className="App-header-nav-text">
                    <a href={"#"}>About</a> | <a href={"#"}>Skills</a> | <a
                    href={"#"}>Experience</a> | <a href={"#"}>Contact</a></p>
                </div>
            </header>

        );
    }
}

export default Header;
