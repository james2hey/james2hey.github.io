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


class Skills extends Component {
    render() {
        return (
            <div className="Skills" id={"Skills"}>
                <div className="Skills-left">
                    <p className="Skills-header">Skills</p>
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
                    <p>Talk about processes </p>
                </div>
            </div>
        );
    }
}

export default Skills;
