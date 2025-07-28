import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';  // N'oublie pas le CSS !
import MyTooltip from '../components/tooltip/MyTooltip'; // Assure-toi que le chemin est correct
const Navigation = () => {
    return (

        <aside>
            <div className="sidebar">
                <div className="id">
                    <div className="idContent">
                        <img src="./media/boris-code-237.jpg" alt=" boris aubin Simo Tsebo" /><br />
                        <h3>AUBIN SIMO</h3>
                    </div>
                </div>
                <div className="navigation">
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to='/'

                                        className={({ isActive }) => isActive ? 'navActive' : ''}
                                    >
                                        <i className="fas fa-home"></i>
                                        <span>Accueil</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/competences'

                                        className={({ isActive }) => isActive ? 'navActive' : ''}
                                    >
                                        <i className="fas fa-mountain"></i>
                                        <span>competences</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/portfolio'

                                        className={({ isActive }) => isActive ? 'navActive' : ''}
                                    >
                                        <i className="fas fa-images"></i>
                                        <span>Portfolio</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact'
                                        className={({ isActive }) => isActive ? 'navActive' : ''}
                                    >
                                        <i className="fas fa-address-book"></i>
                                        <span>Contact</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a
                                data-tooltip-id="linkedinTip"
                                data-tooltip-content="Mon profil linkedin "
                                data-tooltip-place="top"
                                data-tooltip-delay-show={50}
                                data-tooltip-delay-hide={100}
                                className="custom-tooltip"
                                href="https://www.linkedin.com/in/boris-aubin-simo-26b9a0369" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                                <MyTooltip
                                    id="linkedinTip"

                                />
                            </a>
                        </li>
                        <li>
                            <a
                                data-tooltip-id="githubTip"
                                data-tooltip-content="Mon profil github "
                                data-tooltip-place="top"
                                data-tooltip-delay-show={50}
                                data-tooltip-delay-hide={100}
                                className="custom-tooltip"
                                href="https://github.com/boris2442" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                                <MyTooltip
                                    id="githubTip"

                                />
                            </a>
                        </li>
                        <li>
                            <a
                                data-tooltip-id="freecodecampTip"
                                data-tooltip-content="Mon profil freecodecamp "
                                data-tooltip-place="top"
                                data-tooltip-delay-show={50}
                                data-tooltip-delay-hide={100}
                                className="custom-tooltip"
                                href="https://www.freecodecamp.org/fcc-bf9070d4-2429-4658-bf7d-70da5396e1d1" target="_blank" rel="noopener noreferrer">

                                <i className="fab fa-free-code-camp"></i>
                                <MyTooltip
                                    id="freecodecampTip"

                                />
                            </a>
                        </li>
                        <li>
                            <a
                                data-tooltip-id="codepenTip"
                                data-tooltip-content="Mon profil codepen "
                                data-tooltip-place="top"
                                data-tooltip-delay-show={50}
                                data-tooltip-delay-hide={100}
                                className="custom-tooltip"
                                href="https://codepen.io/Aubin-Boris-Simo-Tsebo" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-codepen"></i>
                                <MyTooltip
                                    id="codepenTip"
                                />
                            </a>
                        </li>
                    </ul>
                    <div className="signature">
                        <p>AUBIN SIMO - {new Date().getFullYear()}</p>
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default Navigation;