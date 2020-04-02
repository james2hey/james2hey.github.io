import React from 'react';
import '../scss/_projects.scss';
import odms from '../assets/images/odms.svg';
import auctions from '../assets/images/auctions.svg';
import snake from '../assets/images/snake.svg';
import pedals from '../assets/images/pedals.svg';
import milk from '../assets/images/milk.png';
import pip from '../assets/images/pip.svg';
import matchup from '../assets/images/matchup.png'; //TODO convert this to a png
import blog from '../assets/images/blog.png';
import paper from '../assets/images/paper.svg';
import circuitStats from '../assets/images/circuit-stats.png';
import { Nav } from './nav';
import { Project } from './subcomponents/project';
import personasInRe from '../assets/pdfs/personas_in_requirements_engineering.pdf';
import securityWithOSS from '../assets/pdfs/security_with_oss.pdf';

export const Projects: React.FC = () => {
    return (
        <div className="Project" id={"project"}>
            <div className="Project-left">
                <p className="Project-header">Projects</p>
            </div>
            <div className="Project-right">
                <div className='Project-container'>
                    <h3>Projects</h3>
                    <Project
                        header={'ODMS'}
                        image={odms}
                        link={'https://www.youtube.com/watch?v=mG5o0Ly3CCo&feature=youtu.be'}
                        body={'A project focused on creating an organ donation management system to support the decreasing number of organ donors in New Zealand. ' +
                        'We created a tabletop touch screen application for multiple clinicians to collaborate and use simultaneously.'}
                    />
                    <Project
                        header={'PiP IoT Mobile App'}
                        image={pip}
                        link={'https://www.pipiot.com/'}
                        body={'In my final year project for university I worked with a startup company called PiP IoT. They manufacture IoT ' +
                        'sensor devices for measuring rubbish bin fill levels, foot traffic, and geolocation. I created a mobile app for the company ' +
                        'as an on-field tool for device installation and management.'}
                    />
                    <Project
                        header={'Cicuit Stats'}
                        image={circuitStats}
                        link={'https://play.google.com/store/apps/details?id=nz.co.vista.cinemastats'}
                        body={'A cross platform application that managers of cinema chains can use to track their key performance ' +
                        'indicators. I helped write this application with three other interns during my time at Vista and it ' +
                        'was then published to the App Store and Google Play.'}
                    />
                    <Project
                        header={'Milk'}
                        image={milk}
                        link={'https://play.google.com/store/apps/details?id=me.jscones.milk'}
                        body={'Milk is an android game where the aim is to not spill the milk. Users aim to hit targets on the side of the cup ' +
                        'to get on the highscore board. This was made in collaboration with my friend Josh and we released Milk to the Google Play Store.'}
                    />
                    <Project
                        header={'matchup'}
                        image={matchup}
                        link={'https://github.com/james2hey/matchup'}
                        body={'Matchup is an android application that can be used to manage and generate sports tournaments. I wrote this to get more familiar with the Kotlin programming language while also creating a useful application that volunteer sports organisers can use to help generate random tournaments.'}
                    />
                    <Project
                        header={'Pedals'}
                        image={pedals}
                        link={'https://github.com/james2hey/seng202-team10-project'}
                        body={'A Java desktop application targeted for bike mapping and analysis for cyclists in New York. Basic route data from Citi Bike was used to base our application on and allowed us to provide insightful data for users to plan routes and see existing statistics.'}
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
                        body={'My first project with a client-server architecture. The web application provides an auction website where users can create posts, make bids, and win auctions. This was a great introduction into the client-server architecture and had an awesome outcome.'}
                    />
                    <br />
                    <h3>Research</h3>
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
                </div>
            </div>

        </div>
    );
};
