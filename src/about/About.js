import React, {Component} from 'react';
import './About.css';
import books from './../assets/img/books.svg';


class About extends Component {
    render() {
        return (
            <div className="About" id={"about"}>
                <div className="About-left">
                    <p className="About-header">About</p>
                </div>
                <div className="About-right">
                    <div className="Card-container">
                        {/*TODO change to a man running after a graduation hat*/}
                        <div className="Card-items">
                            <img src={books} alt={'books'} className="Card-image"/>
                            <div className="Card-right-side-text">
                                <h4>University</h4>
                                <p className="Card-text">I'm currently in my fourth year of a BE(Hons) degree majoring
                                    in software engineering.
                                    Two internships in professional environments have provided me with over 800 hours of
                                    industrial experience.</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="Card-container">
                        <div className="Card-items">

                            <div>
                                <h4>4th Year Student</h4>
                                <p className="Card-text">I'm currently in my fourth year of a BE(Hons) degree majoring
                                    in software engineering.
                                    Two internships in professional environments have provided me with over 800 hours of
                                    industrial experience.</p>
                            </div>
                            <img src={books} alt={'books'} className="Card-image"/>
                        </div>
                    </div>
                    <br/>
                    <div className="Card-container">
                        <div className="Card-items">
                            <img src={books} alt={'books'} className="Card-image"/>
                            <div className="Card-right-side-text">
                                <h4>Design</h4>
                                <p className="Card-text">I'm currently in my fourth year of a BE(Hons) degree majoring
                                    in software engineering.
                                    Two internships in professional environments have provided me with over 800 hours of
                                    industrial experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
