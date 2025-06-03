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
                       
                        <li><i className="fas fa-map-marker-alt "></i>
                           <span>Bafoussam</span>  
                        </li>


                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text=" (+237)679135177 / (+237) 694223503">
                                <span
                                    className="clickInput"
                                    onClick={() => { alert('telephone copier') }}
                                >
                                    (+237)679135177 / (+237) 694223503
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
                        <a href="https://github.com/boris2442" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://codepen.io/Aubin-Boris-Simo-Tsebo" target="_blank" rel="noopener noreferrer">
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