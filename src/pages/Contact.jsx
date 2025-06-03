import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez moi</h1>
                    <ul>
                        <li><i className="fas fa-mobile-alt"></i>
                            Bafoussam
                        </li>


                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <CopyToClipboard text="679135177">
                                <span
                                    className="clickInput"
                                    onClick={() => { alert('telephone copier') }}
                                >
                                    679135177
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="aubinborissimotsebo@gmail.com">
                                <span
                                    className="clickInput"
                                    onClick={() => { alert('E-mail copié') }}
                                >
                                    aubinborissimotsebo@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>

                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                            <h4>Linkedin</h4>
                            <i className="fab fa-twiter"></i>
                        </a>
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                            <h4>codepen</h4>
                            <i className="fab fa-codepen"></i>
                        </a>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Contact;