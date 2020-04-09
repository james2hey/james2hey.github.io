import React from 'react';
import '../scss/_contact.scss';
import mail from '../assets/images/mail.svg';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';
import { Nav } from './subcomponents/nav';

export const Contact: React.FC = () => {
    return (
        <div className="Contact-container" id={"contact"}>
            <div className="Left-container">
                <p className="Left-header">Contact</p>
            </div>
            <div className="Right-container">
                <div className="Right-contents-container">
                    <div className='Brief-container'>
                        <h3>Let's talk</h3>
                        <p>Got a question about any of my projects? Want to hear more about me? I'd love to have a chat.
                            Feel free to get in touch through my email or LinkedIn!</p>
                        <h5 className='Highlight-pink'>James Toohey</h5>
                        <p>+64 021 265 9668</p>
                    </div>
                    <div className="Social-container">
                        <div className='Social-item-container'><a href="mailto:jamestoohey97@gmail.com"><img src={mail}
                                                                                                             alt={'mail'}
                                                                                                             className="Social-image" /></a>
                        </div>
                        <div className='Social-item-container'><a href="https://linkedin.com/in/james-toohey-01997"><img
                            src={linkedin} alt={'linkedin'} className="Social-image" /></a></div>
                        <div className='Social-item-container'><a href="https://github.com/james2hey"><img src={github}
                                                                                                           alt={'github'}
                                                                                                           className="Social-image" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
