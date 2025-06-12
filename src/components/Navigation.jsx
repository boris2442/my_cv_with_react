import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <aside>
            <div className="sidebar">
                <div className="id">
                    <div className="idContent">
                        <img src="./media/boriscode.jpg" alt="profil de boris code" />
                        <h3>Boris Code</h3>
                    </div>
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/' activeClasssName='navActive'>
                                    <i className="fas fa-home"></i>
                                    <span>Accueil</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/competences' activeClasssName='navActive'>
                                    <i className="fas fa-mountain"></i>
                                    <span>competences</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/portfolio' activeClasssName='navActive'>
                                    <i className="fas fa-images"></i>
                                    <span>Portfolio</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' activeClasssName='navActive'>
                                    <i className="fas fa-address-book"></i>
                                    <span>Contact</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/boris-aubin-simo-26b9a0369" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/boris2442" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.freecodecamp.org/fcc-bf9070d4-2429-4658-bf7d-70da5396e1d1" target="_blank" rel="noopener noreferrer">

                                <i className="fab fa-free-code-camp"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/Aubin-Boris-Simo-Tsebo" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-codepen"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="signature">
                        <p>Boris Code - {new Date().getFullYear()}</p>
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default Navigation;