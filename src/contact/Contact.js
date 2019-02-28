import React, {Component} from 'react';
import './Contact.css';
import { SocialIcon } from 'react-social-icons';
import mail from '../assets/img/mail.svg';
import linkedin from '../assets/img/linkedin.svg';
import github from './github.svg';

class Contact extends Component {
    render() {
        return (
            <div className="Contact-container" id={"Contact"}>
                <div className="Left-container">
                    <p className="Left-header">Contact</p>
                </div>
                <div className="Right-container">
                    <div className="Right-contents-container">
                        <div className='Brief-container'>
                            <h3>Lets talk</h3>
                            <p>I'm available for full time work from November 2019 onwards, or part time throughout the year.</p>
                            <h2>James Toohey</h2>
                            <p>Software Engineering Student</p>
                        </div>
                        {/*<a href="mailto:jamestoohey97@gmail.com">jamestoohey97@gmail.com</a>*/}
                        {/*<p>+64 021 265 9668</p>*/}
                        {/*<br /><br />*/}
                        <div className="Social-container">
                            <div className='Social-item-container'> <img src={mail} alt={'mail'} className="Social-image"/> </div>
                            <div className='Social-item-container'> <img src={linkedin} alt={'linkedin'} className="Social-image"/> </div>
                            <div className='Social-item-container'> <img src={github} alt={'github'} className="Social-image"/> </div>
                            {/*<SocialIcon className="Social-item" url="mailto:jamestoohey97@gmail.comt" />*/}
                            {/*<SocialIcon className="Social-item" url="https://linkedin.com/in/james-toohey-01997" />*/}
                            {/*<SocialIcon className="Social-item" url="https://github.com/james2hey" />*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
