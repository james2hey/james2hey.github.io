import React, {Component} from 'react';

class Nav extends Component { // header, skills, experience, contact
    render() {
        return (
            <div className="App-header-nav">
                <h5>
                    <a href={"#about"}>About</a> | <a href={"#skills"}>Skills</a> | <a
                    href={"#experience"}>Experience</a> | <a href={"#contact"}>Contact</a></h5>
            </div>
        );
    }
}

export default Nav;
