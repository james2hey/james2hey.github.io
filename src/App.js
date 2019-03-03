import React, {Component} from 'react';
import './App.css';
import About from "./about/About";
import Contact from "./contact/Contact";
import Header from "./header/Header";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";

class App extends Component {
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
