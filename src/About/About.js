import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="About" id={"about"}>
                <div className="About-left">
                    <p className="About-header">About</p>
                </div>
                <div className="About-right">
                    <h3>I am a software engineering student at the University of Canterbury</h3>
                    <p>TODO rewrite this</p>
                    <p>Hi, I'm James - a student in my penultimate year of study seeking employment over the 2018/19
                        summer. From studying software engineering and computer science papers, I have become very keen
                        to get into the workforce and apply my knowledge. I'm aiming to pursue a career related to
                        developing either financial or medical software, and am interested to see what software
                        requirements are necessary for these sectors.

                        Throughout my study, I have particularly enjoyed working on team projects where we have been
                        developing software using agile methodologies under the Scrum framework. The challenges we've
                        faced from these projects have been very useful in relation to my problem-solving skills and
                        helping me further enjoying working as a software developer. I am therefore looking for a job
                        where similar techniques are carried out so that I can apply my knowledge effectively and
                        productively.</p>
                </div>
            </div>
        );
    }
}

export default About;
