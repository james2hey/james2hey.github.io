import React, {Component} from 'react';
import './Contact.css';
import mail from '../assets/img/mail.svg';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import Nav from "../nav/Nav";

class Contact extends Component {
    render() {
        return (
            <div className="Contact-container" id={"contact"}>
                <div className="Left-container">
                    <p className="Left-header">Contact</p>
                    <Nav />
                </div>
                <div className="Right-container">
                    <div className="Right-contents-container">
                        <div className='Brief-container'>
                            <h3>Let's talk</h3>
                            <p>I'm available for full time work from November 2019 onwards, or part time work throughout the year.</p>
                            <h5 className='Highlight-blue'>James Toohey</h5>
                            <p>+64 021 265 9668</p>
                        </div>
                        {/*<a href="mailto:jamestoohey97@gmail.com">jamestoohey97@gmail.com</a>*/}
                        {/*<p>+64 021 265 9668</p>*/}
                        {/*<br /><br />*/}
                        <div className="Social-container">
                            <div className='Social-item-container'> <a href="mailto:jamestoohey97@gmail.com"><img src={mail} alt={'mail'} className="Social-image"/></a> </div>
                            <div className='Social-item-container'> <a href="https://linkedin.com/in/james-toohey-01997"><img src={linkedin} alt={'linkedin'} className="Social-image"/></a> </div>
                            <div className='Social-item-container'> <a href="https://github.com/james2hey"><img src={github} alt={'github'} className="Social-image"/></a> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
