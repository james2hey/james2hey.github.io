import React, {Component} from 'react';
import './Experience.css';
import odms from '../assets/img/odms.svg';
import auctions from '../assets/img/auctions.svg';
import snake from '../assets/img/snake.svg';
import pedals from '../assets/img/pedals.svg';
import vista from '../assets/img/vista.svg';
import clubhub from '../assets/img/clubhub.svg';
import matchup from '../assets/img/matchup.png'; //TODO convert this to a png
import blog from '../assets/img/blog.png';
import paper from '../assets/img/paper.svg';
import Nav from "../nav/Nav";
import Project from "../components/Project";
import personasInRe from '../assets/pdf/personas_in_requirements_engineering.pdf';
import securityWithOSS from '../assets/pdf/security_with_oss.pdf'
import circuitStats from '../assets/img/circuit-stats.png';

class Experience extends Component {
    render() {
        return (
            <div className="Project" id={"experience"}>
                <div className="Experience-left">
                    <p className="Experience-header">Experience</p>
                    <Nav />
                </div>
                <div className="Experience-right">
                    <h3>Internships</h3>
                    <div className='White-outline-container'>
                        <div className='White-outline-item'>
                            <h5>Vista</h5>
                            <img src={vista} alt={'vista'} className="White-outline-container-image"/>
                            <p className='White-outline-container-text'>I worked as an intern software developer for Vista over the 2018-19 summer. Initially I worked as an iOS
                                developer where I used Swift and objective C. Secondly, I worked on a new React Native project
                                where I created the client side application that used an existing back-end server. This internship
                                gave me a fantastic experience in a unique and exciting field of work. This also
                                taught me how software development fits into a business model and showed me the importance of continuous
                                delivery.
                            </p>
                        </div>
                        <div className='White-outline-item'>
                            <h5>ClubHub</h5>
                            <img src={clubhub} alt={'clubhub'} className="White-outline-container-image"/>
                            <p className='White-outline-container-text'>My first experience in industry was at ClubHubSSL. I spent my time in web development creating
                                websites for sports clubs. This also involved direct communication with clients to gather requirements
                                and understand customer needs. Having direct contact with clients showed me the importance of
                                designing websites to meet their requirements and helping them with design decisions along the way.
                            </p>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Experience;
