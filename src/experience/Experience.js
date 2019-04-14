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

class Experience extends Component {
    render() {
        return (
            <div className="Experience" id={"experience"}>
                <div className="Experience-left">
                    <p className="Experience-header">Experience</p>
                    <Nav />
                </div>
                <div className="Experience-right">
                    <h3>Projects</h3>
                    <div className='Project-container'>
                        <Project
                            header={'ODMS'}
                            image={odms}
                            link={'https://www.youtube.com/watch?v=mG5o0Ly3CCo&feature=youtu.be'}
                            body={'A project focused on creating an organ donation management system to support the deceased number in organ donors in New Zealand in the recent years. ' +
                            'We created a tabletop touch screen application for multiple clinicians to collaborate and use simultaneously.'}
                        />
                        <Project
                            header={'matchup'}
                            image={matchup}
                            link={'https://github.com/james2hey/matchup'}
                            body={'Matchup is an android application that can be used to manage and generate sports tournaments. I wrote this to become more familiar using Kotlin while also creating a useful application that volunteer sports organisers can use to help generate random tournaments.'}
                        />
                        <Project
                            header={'Persona\'s in RE Blog'}
                            image={blog}
                            link={personasInRe}
                            body={'In this project I researched into how persona\'s can be used to fit into Requirements Engineering activities. My teammate and I wrote a blog to elaborate on their usefulness how how they can be integrated to fit into the typical activities.'}
                        />
                        <Project
                            header={'Security Vulnerabilities with Open Source Software'}
                            image={paper}
                            link={securityWithOSS}
                            body={'Package managers like NPM and PiP are widely used in software development to manage open source software dependencies. This paper analyses security issues that can arise from using such tools and looks into mitigation techniques to prevent attackers from exploiting OSS.'}
                        />
                        <Project
                            header={'Racey Snakey'}
                            image={snake}
                            link={'https://github.com/james2hey/racey-snakey'}
                            body={'A two player game based on the classic Nokia game snake. This was a program written in C to be used with two microcontrollers. Players each controlled a snake on a 7x5 LED matrix and had to avoid touching the other snakes tail.'}
                        />
                        <Project
                            header={'Auctions 365'}
                            image={auctions}
                            link={'https://github.com/james2hey/auctions-client'} //todo add this to live site
                            body={'My first project with a client-server architecture. The web application provides an auction website where users can create posts, make bids, and win auctions. This was a very fun project to introduce myself into how client-server architectures work, and had an awesome outcome.'}
                        />
                        <Project
                            header={'Pedals'}
                            image={pedals}
                            link={'https://github.com/james2hey/seng202-team10-project'}
                            body={'A Java desktop application targeted for bike mapping and analysis for cyclists in New York. Basic route data from Citi Bike was used to base our application on and allowed us to provide insightful data for users to plan routes and see existing statistics.'}
                        />
                    </div>
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
