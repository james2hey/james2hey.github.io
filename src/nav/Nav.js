import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="App-header-nav">
                <h5>
                    <a href={"#about"} className="Menu-link">About</a> | <a href={"#skills"}  className="Menu-link">Skills</a> | <a href={"#experience"}  className="Menu-link">Experience</a> | <a href={"#project"} className={"Menu-link"}>Projects</a> | <a href={"#contact"} className="Menu-link">Contact</a>
                </h5>
            </div>
        );
    }
}

export default Nav;
