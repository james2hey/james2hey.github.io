import React, {Component} from 'react';
import './Experience.css';
import odms from '../assets/img/odms.svg';
import auctions from '../assets/img/auctions.svg';
import funkit from '../assets/img/funkit.png';
import pedals from '../assets/img/pedals.PNG';
import vista from '../assets/img/vista.svg';
import clubhub from '../assets/img/clubhub.svg';

class Experience extends Component {
    render() {
        return (
            <div className="Experience" id={"Experience"}>
                <div className="Experience-left">
                    <p className="Experience-header">Experience</p>
                </div>
                <div className="Experience-right">
                    <h3>Projects</h3>{/*TODO load each one in a modal on click*/}
                    <div className='Project-container'>
                        {/*<a href={'https://github.com/UCNZ-SENG302-2018-Donaco/OrgaNZ'} target="_blank" rel="noopener noreferrer">*/}
                        <div className='Project-item'>
                            <img src={odms} alt={'odms'} className="Project-image"/>
                            <div className='Project-body'>
                                <h5>ODMS</h5>
                                <p>A project focused on creating an organ donation management system to support the deceased number in organ donors in New Zealand in the recent years.
                                    We created a tabletop touch screen application for multiple clinicians to collaborate and use simultaneously. A demonstration can be found
                                    <a href={'https://www.youtube.com/watch?v=mG5o0Ly3CCo&feature=youtu.be'} target="_blank" rel="noopener noreferrer"> here</a>
                                </p>
                            </div>
                        </div>
                        <div className='Project-item'>
                            <img src={funkit} alt={'funkit'} className="Project-image"/>
                            <div className='Project-body'>
                                <h5>Racey Snakey</h5>
                                <p>A two player game based on the classic Nokia game snake. This was a program written in C
                                    to be used with two microcontrollers. Players each controlled a snake on a 7x5 LED matrix
                                    and had to avoid touching the other snakes tail.
                                </p>
                            </div>
                        </div>

                        <div className='Project-item'>
                            <img src={auctions} alt={'auctions'} className="Project-image"/>
                            <div className='Project-body'>
                                <h5>Auctions 365</h5>
                                <p>My first project with a client-server architecture. The web application provides an auction website where
                                    users can create posts, make bids, and win auctions. This was a very fun project to introduce
                                    myself into how client-server architectures work, and had an awesome outcome.
                                </p>
                            </div>
                        </div>
                        <div className='Project-item'>
                            <div className='Project-image-container'>
                                <img src={pedals} alt={'pedals'} className="Project-image"/>
                            </div>
                            <div className='Project-body'>
                                <h5>Pedals</h5>
                                <p>A Java desktop application targeted for Bike Mapping and Anaysis for cyclists in New York.
                                    Basic route data from Citi Bike was used to base our application on and allowed us to provide
                                    insightful data for users to plan routes and see existing statistics.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3>Internships</h3>
                    <div className='White-outline-container'>
                        <div className='White-outline-item'>
                            <h5>Vista</h5>
                            <img src={vista} alt={'vista'} className="White-outline-container-image"/>
                            <p className='White-outline-container-text'>I worked as an intern software developer for the 2018-19 summer. Initially I worked as an iOS
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
                                websites for sports teams. This also involved directly talking to clients to gather requirements
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
