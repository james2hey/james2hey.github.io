import React from 'react';
import '../scss/_skills.scss';
import angular from '../assets/images/angular.svg';
import c from '../assets/images/c.svg';
import java from '../assets/images/java.svg';
import kotlin from '../assets/images/kotlin.svg';
import node from '../assets/images/node.svg';
import python from '../assets/images/python.svg';
import react from '../assets/images/react.svg';
import reactNative from '../assets/images/react-native.svg';
import sql from '../assets/images/sql.svg';
import swift from '../assets/images/swift.svg';
import vue from '../assets/images/vue.svg';
import agile from '../assets/images/agile.svg';
import waterfall from '../assets/images/waterfall.svg'
import { Nav } from './nav';
import { TechItem } from './subcomponents/tech-item';

export const Skills: React.FC = () => {
    return (
        <div className="Skills" id={"skills"}>
            <div className="Skills-left">
                <p className="Skills-header">Skills</p>
                <Nav />
            </div>
            <div className="Skills-right">
                <h3>Personal Tech Stack</h3>
                <div className="Tech-container">
                    <TechItem
                        image={reactNative}
                        name={'React Native'}
                    />
                    <TechItem
                        image={swift}
                        name={'Swift'}
                    />
                    <TechItem
                        image={kotlin}
                        name={'Kotlin'}
                    />
                    <TechItem
                        image={vue}
                        name={'Vue'}
                    />
                    <TechItem
                        image={angular}
                        name={'Angular'}
                    />
                    <TechItem
                        image={react}
                        name={'React (web)'}
                    />
                    <TechItem
                        image={java}
                        name={'Java'}
                    />
                    <TechItem
                        image={python}
                        name={'Python'}
                    />
                    <TechItem
                        image={node}
                        name={'Node'}
                    />
                    <TechItem
                        image={c}
                        name={'C++'}
                    />
                    <TechItem
                        image={sql}
                        name={'SQL'}
                    />
                </div>
                <h3>Development Processes</h3>
                <div className='White-outline-container'>
                    <div className='White-outline-item'>
                        <h5>Agile (Scrum)</h5>
                        <img src={agile} alt={'agile'} className="White-outline-container-image" />
                        <p className='White-outline-container-text'>During university I have been part of a course that
                            involved a year long project
                            under agile development. We used the scrum framework and worked in large teams of 8. Generic
                            scrum meetings were taken
                            including sprint plannings, stand ups, retrospectives, and product reviews.
                            <br /><br />
                            During my last internship we also used the scrum framework when developing our product.
                        </p>
                    </div>
                    <div className='White-outline-item'>
                        <h5>Waterfall</h5>
                        <img src={waterfall} alt={'waterfall'} className="White-outline-container-image" />
                        <p className='White-outline-container-text'>The first software team project I worked in used the
                            waterfall development model. This taught me both the pros and cons of such a model and
                            showed me how it can be applied to developing software products.
                            <br /><br />
                            This traditional model was a good entry point into software development and taught me
                            how this type of process can be effective for particular projects.
                        </p>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
};
