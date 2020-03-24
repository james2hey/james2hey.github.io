import React from 'react';
import '../scss/_about.scss';
import books from '../assets/images/books.svg';
import ux from '../assets/images/ux.svg';
import computer from '../assets/images/computer.svg';
import { Nav } from './nav';
// import windowSize from 'react-window-size'; // TODO do this with the DOM instead

export const About: React.FC = () => {
    return (
        <div className="About-large" id={"about"}>
            <div className="About-left">
                <p className="About-header">About</p>
                <Nav/>
            </div>
            <div className="About-right">
                <br/>

                <div className="Card-container">
                    <div>
                        <img src={books} alt={'books'} className="Card-image"/>
                    </div>
                    <div>
                        <h4>Education</h4>
                        <p>I've recently finished my fourth year of a BE(Hons) degree
                            majoring in software engineering at the University of Canterbury, New Zealand.
                            I have also completed two internships in professional environments which have
                            provided me with over 800 hours of industrial experience.</p>
                    </div>
                </div>

                <br/>
                <div className="Card-container">
                    <div>
                        <h4>Why I Chose Software Development?</h4>
                        <p className="Card-text">
                            <ul>
                                <li><span className="Highlight-blue">Continuous Learning</span> - New challenges
                                    I encounter daily add to my problem
                                    solving skills and help me grow as a software engineer.
                                </li>
                                <li><span className="Highlight-pink">Teamwork</span> - The social aspect is
                                    awesome! I thrive in team environments and love working in teams to create
                                    great products.
                                </li>
                                <li><span className="Highlight-blue">Creativity</span> - Crafting products that
                                    have never existed is very
                                    exciting and I love the challenge of coming up with solutions to clients
                                    problems.
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className={'Background-image-container'}>
                        <img src={computer} alt={'computer'} className="Card-image"/>
                    </div>
                </div>
                <br/>
                <div className="Card-container">
                    <div>
                        <img src={ux} alt={'ux'} className="Card-image"/>
                    </div>
                    <div className="Card-right-side-text">
                        <h4>Design</h4>
                        <p className="Card-text">During my time as a software developer I have become
                            very passionate about putting time and effort into product design. Visually
                            appealing software is something I strive to create and love to show off. I think
                            software design is a huge part of development as this is the part of the system
                            end users actually interact with</p>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    );
};
