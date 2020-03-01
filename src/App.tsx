import React from 'react';
import './App.css';
import { Header } from './header/Header';
import { About } from './about/About';
import { Skills } from './skills/Skills';
import { Experience } from './experience/Experience';
import { Projects } from './projects/Projects';
import { Contact } from './contact/Contact';

export const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
