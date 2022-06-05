import React from 'react';
import mail from '../assets/images/links/mail.svg';
import linkedin from '../assets/images/links/linkedin.svg';
import github from '../assets/images/links/github.svg';
import { Section } from './section';

export const Contact: React.FC = () => (
    <Section className='contact' id='contact'>
        <address className='contact__details'>
            <div className='contact__brief'>
                <h3>{"Let's talk!"}</h3>
                <p>
                    {'Got a question about my projects? Want to hear more about me? ' +
                        "I'd love to have a chat. Feel free to connect with me on LinkedIn or send an email!"}
                </p>
            </div>
            <div className='contact__external-links'>
                <div className='contact__external-link-wrapper'>
                    <a href='mailto:james@toohey.dev'>
                        <img src={mail} alt='E-mail' className='contact__external-link-image' />
                    </a>
                </div>
                <div className='contact__external-link-wrapper'>
                    <a href='https://linkedin.com/in/james-toohey-01997'>
                        <img src={linkedin} alt='LinkedIn' className='contact__external-link-image' />
                    </a>
                </div>
                <div className='contact__external-link-wrapper'>
                    <a href='https://github.com/james2hey'>
                        <img src={github} alt='GitHub' className='contact__external-link-image' />
                    </a>
                </div>
            </div>
        </address>
    </Section>
);
