import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <section>
            <div className='contact'>
                <Navigation />
                <div className="contactContent">
                    <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez moi</h1>
                        <ul>

                            <li><i className="fas fa-map-marker-alt "></i>
                                <span>Bafoussam - Yaounde -Cameroon</span>
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
                            <a href="https://www.linkedin.com/in/boris-aubin-simo-26b9a0369" target="_blank" rel="noopener noreferrer">
                                <h4>Linkedin</h4>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/boris2442" target="_blank" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.freecodecamp.org/fcc-bf9070d4-2429-4658-bf7d-70da5396e1d1" target="_blank" rel="noopener noreferrer">
                                <h4>FreeCodeCamp</h4>
                                <i className="fab fa-free-code-camp"></i>
                            </a>
                            <a href="https://codepen.io/Aubin-Boris-Simo-Tsebo" target="_blank" rel="noopener noreferrer">
                                <h4>codepen</h4>
                                <i className="fab fa-codepen"></i>
                            </a>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;