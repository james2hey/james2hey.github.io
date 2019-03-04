import React, {Component} from 'react';
import './Skills.css';
import angular from '../assets/img/angular.svg';
import c from '../assets/img/c.svg';
import java from '../assets/img/java.svg';
import kotlin from '../assets/img/kotlin.svg';
import node from '../assets/img/node.svg';
import python from '../assets/img/python.svg';
import react from '../assets/img/react.svg';
import reactNative from '../assets/img/react-native.svg';
import sql from '../assets/img/sql.svg';
import swift from '../assets/img/swift.svg';
import vue from '../assets/img/vue.svg';
import agile from '../assets/img/agile.svg';
import waterfall from '../assets/img/waterfall.svg'
import Nav from "../nav/Nav";


class Skills extends Component {
    render() {
        return (
            <div className="Skills" id={"skills"}>
                <div className="Skills-left">
                    <p className="Skills-header">Skills</p>
                    <Nav />
                </div>
                <div className="Skills-right">
                    <h3>Personal Tech Stack</h3>
                    <div className="Tech-container">
                        <div className="Tech-item-container">
                            <img src={reactNative} alt={'React Native'} className="Tech-image"/>
                            <p>React Native</p>
                        </div>
                        <div className="Tech-item-container">
                            <img src={swift} alt={'Swift'} className="Tech-image"/>
                            <p>Swift</p>
                        </div>
                        <div className="Tech-item-container">
                            <img src={kotlin} alt={'Kotlin'} className="Tech-image"/>
                            <p>Kotlin</p>
                        </div>
                        <div className="Tech-item-container">
                            <img src={vue} alt={'Vue'} className="Tech-image"/>
                            <p>Vue</p>
                        </div>
                        <div className="Tech-item-container">
                            <img src={angular} alt={'Angular'}  className="Tech-image"/>
                            <p>Angular</p>
                        </div>
                        <div className="Tech-item-container">
                            <img src={react} alt={'React'} className="Tech-image"/>
                            <p>React (web)</p>
                        </div>
                        <div className="Tech-item-container">
                            <img src={java} alt={'Java'} className="Tech-image" />
                            <p>Java</p>
                        </div>
                        <div className="Tech-item-container">
                            <img src={python} alt={'Python'} className="Tech-image"/>
                            <p>Python</p>
                        </div>
                        <div className="Tech-item-container">
                            <img src={node} alt={'Node.js'} className="Tech-image"/>
                            <p>Node.js</p>
                        </div>
                        <div className="Tech-item-container">
                            <img src={c} alt={'C++'} className="Tech-image"/>
                            <p>C++</p>
                        </div>
                        <div className="Tech-item-container">
                            <img src={sql} alt={'SQL'} className="Tech-image"/>
                            <p>SQL</p>
                        </div>
                    </div>
                    <h3>Development Processes</h3>
                    <div className='White-outline-container'>
                        <div className='White-outline-item'>
                            <h5>Agile (Scrum)</h5>
                            <img src={agile} alt={'agile'} className="White-outline-container-image"/>
                            <p className='White-outline-container-text'>During university I have been part of a course that involved a year long project
                            under an agile development. We used the scrum framework in teams of 8. We undertook the generic
                            scum meetings including sprint plannings, stand ups, retrospectives, and reviews.
                            <br/><br/>
                            I also was involved in using agile processes in an industry environment during my last internship,
                            having the same principles in mind.</p>
                        </div>
                        <div className='White-outline-item'>
                            <h5>Waterfall</h5>
                            <img src={waterfall} alt={'waterfall'} className="White-outline-container-image"/>
                            <p className='White-outline-container-text'>I have been a part of a team who used the waterfall model for
                                our project. This taught
                                me both the pros and cons of such a model and helped me have exposoure to a variaty of
                                process types. The traditional
                                model also helped me learn how to use agile processes and was a good entry point into
                                software development in
                                a team environment.
                            </p>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Skills;
