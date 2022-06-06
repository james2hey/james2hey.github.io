import React from 'react';
import { Section } from './section';
import { Icon } from './icon';

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
                        <Icon name='mail' className='contact__external-link-image' />
                    </a>
                </div>
                <div className='contact__external-link-wrapper'>
                    <a href='https://linkedin.com/in/james-toohey-01997'>
                        <Icon name='linkedin' className='contact__external-link-image' />
                    </a>
                </div>
                <div className='contact__external-link-wrapper'>
                    <a href='https://github.com/james2hey'>
                        <Icon name='github' className='contact__external-link-image' />
                    </a>
                </div>
            </div>
        </address>
    </Section>
);
