import React, {Component} from 'react';
import logo from './../logo.svg';
// import './../App.css';
import './Header.css'

class Header extends Component { // header, skills, experience, contact
    render() {
        return (
            <header className="App-header">
                <h3>Software Developer & Design Enthusiast</h3>
                <img src={logo} className="App-logo" alt="logo"/>
                <div className="App-header-nav">
                    <h5>
                    <a href={"#"}>About</a> | <a href={"#"}>Skills</a> | <a
                    href={"#"}>Experience</a> | <a href={"#"}>Contact</a></h5>
                </div>
            </header>

        );
    }
}

export default Header;
