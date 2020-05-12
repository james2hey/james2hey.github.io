import React from "react";
import "../../scss/portfolio/_contact.scss";
import mail from "../../assets/images/mail.svg";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";

export const Contact: React.FC = () => {
    return (
        <div className="Contact-container" id={"contact"}>
            <div className='Brief-container'>
                <h3>Let's talk</h3>
                <p>Got a question about my projects? Want to hear more about me? I'd love to have a chat.
                    Feel free to email me or add me on LinkedIn!</p>
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
    );
};
