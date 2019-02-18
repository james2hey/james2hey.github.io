import React, {Component} from 'react';
import './App.css';
import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";

class App extends Component { // about, skills, experience, contact
    render() {
        return (
            <div className="App">
                <Header/>
                <About/>
                <Skills/>
                <Experience/>
                <Contact/>
            </div>

        );
    }
}

export default App;
