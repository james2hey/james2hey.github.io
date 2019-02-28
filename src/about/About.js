import React, {Component} from 'react';
import './About.css';
import books from './../assets/img/books.svg';
import pencil from './../assets/img/pencil.svg';
import computer from './../assets/img/computer.svg';
import windowSize from 'react-window-size';

class About extends Component {

    render() {
        console.log(this.props.windowWidth);
        return (
                <div className="About-large" id={"about"}>
                    <div className="About-left">
                        <p className="About-header">About</p>
                    </div>
                    <div className="About-right">
                        <div className="Card-container">
                            {/*TODO change to a man running after a graduation hat*/}
                            <div className="Card-items">
                                <img src={books} alt={'books'} className="Card-image"/>
                                <div className="Card-right-side-text">
                                    <h4>Education</h4>
                                    <p className="Card-text">I'm currently in my fourth year of a BE(Hons) degree
                                        majoring
                                        in software engineering.
                                        Two internships in professional environments have provided me with over 800
                                        hours of
                                        industrial experience.</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="Card-container">
                            <div className="Card-items">
                                <div>
                                    <h4>Why I Chose Software Development?</h4>
                                    <p className="Card-text">
                                        <ul>
                                            <li><span className="Highlight-blue">Continuous Leaning</span> - New challenges I encounter daily add to my problem
                                                solving skills and help me grow as a programmer
                                            </li>
                                            <li><span className="Highlight-pink">Teamwork</span> - The social aspect is awesome! I've learned and taught so much
                                                off my teammates throughout the years
                                            </li>
                                            <li><span className="Highlight-blue">Creativity</span> - I think creating products that have never existed is very
                                                exciting. Outside of the box thinking is a must for this
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                                <img src={computer} alt={'computer'} className="Card-image"/>
                            </div>
                        </div>
                        <br/>
                        <div className="Card-container">
                            <div className="Card-items">
                                <img src={pencil} alt={'pencil'} className="Card-image"/>
                                <div className="Card-right-side-text">
                                    <h4>Design</h4>
                                    <p className="Card-text">During my time as a software developer I have become
                                        very passionate about putting time and effort into product design. Visually
                                        appealing
                                        software is something I strive to create and love to show.</p>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            );
    }
}

export default windowSize(About);
