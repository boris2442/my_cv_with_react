import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';  // N'oublie pas le CSS !
import MyTooltip from '../components/tooltip/MyTooltip'; // Assure-toi que le chemin est correct


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

                            <li
                                data-tooltip-id="locationTip"
                                data-tooltip-content="Ou nous trouver ?"
                                data-tooltip-place="top"
                                data-tooltip-delay-show={50}
                                data-tooltip-delay-hide={100}
                                className="custom-tooltip"
                            >
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Yaoundé - Bafoussam - Cameroon</span>

                                <MyTooltip
                                    id="locationTip"

                                />
                            </li>

                            <li

                                data-tooltip-id="phoneTip"
                                data-tooltip-content="Mes contacts Téléphoniques cliquez pour copier!"
                                data-tooltip-place="top"
                                data-tooltip-delay-show={50}
                                data-tooltip-delay-hide={100}
                                className="custom-tooltip"

                            >

                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text=" (+237)679135177 / (+237) 694223503">
                                    <span
                                        className="clickInput"
                                        onClick={() => { alert('telephone copier') }}
                                    >
                                        (+237)679135177 / (+237) 694223503
                                    </span>
                                </CopyToClipboard>
                                <MyTooltip
                                    id="phoneTip"

                                />
                            </li>
                            <li
                                data-tooltip-id="emailTip"
                                data-tooltip-content="Mon adresse E-mail cliquez pour copier!"
                                data-tooltip-place="top"
                                data-tooltip-delay-show={50}
                                data-tooltip-delay-hide={100}
                                className="custom-tooltip"
                            >
                                <i className="far fa-envelope"></i>
                                <CopyToClipboard text="aubinborissimotsebo@gmail.com">
                                    <span
                                        className="clickInput"
                                        onClick={() => { alert('E-mail copié') }}
                                    >
                                        aubinborissimotsebo@gmail.com
                                    </span>
                                </CopyToClipboard>
                                <MyTooltip
                                    id="emailTip"

                                />
                            </li>

                        </ul>
                    </div>

                    <div className="socialNetwork">
                        <ul>
                            <a
                                data-tooltip-id='linkedinTip'
                                data-tooltip-content='Mon profil Linkedin'
                                data-tooltip-place='left !important'
                                data-tooltip-delay-show={50}
                                data-tooltip-delay-hide={100}
                                className="custom-tooltip"

                                href="https://www.linkedin.com/in/boris-aubin-simo-26b9a0369" target="_blank" rel="noopener noreferrer">
                                <h4>Linkedin</h4>
                                <i className="fab fa-linkedin"></i>
                                <MyTooltip
                                    id="linkedinTip"

                                />
                            </a>
                            <a
                                data-tooltip-id='githubTip'
                                data-tooltip-content='Mon profil github'
                                data-tooltip-place='left !important'
                                data-tooltip-delay-show={50}
                                data-tooltip-delay-hide={100}
                                className="custom-tooltip"

                                href="https://github.com/boris2442" target="_blank" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className="fab fa-github"></i>
                                <MyTooltip
                                    id="githubTip"

                                />
                            </a>
                            <a
                                data-tooltip-id='freecodecampTip'
                                data-tooltip-content='Mon profil freecodecamp'
                                data-tooltip-place='left !important'
                                data-tooltip-delay-show={50}
                                data-tooltip-delay-hide={100}
                                className="custom-tooltip"
                                href="https://www.freecodecamp.org/fcc-bf9070d4-2429-4658-bf7d-70da5396e1d1" target="_blank" rel="noopener noreferrer">
                                <h4>FreeCodeCamp</h4>
                                <i className="fab fa-free-code-camp"></i>
                                <MyTooltip
                                    id="freecodecampTip"

                                />
                            </a>
                            <a
                                data-tooltip-id='codepenTip'
                                data-tooltip-content='Mon profil codepen'
                                data-tooltip-place='left !important'
                                data-tooltip-delay-show={50}
                                data-tooltip-delay-hide={100}
                                className="custom-tooltip"
                                href="https://codepen.io/Aubin-Boris-Simo-Tsebo" target="_blank" rel="noopener noreferrer">
                                <h4>codepen</h4>
                                <i className="fab fa-codepen"></i>
                                <MyTooltip
                                    id="codepenTip"
                                />
                            </a>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;