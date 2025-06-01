import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/boriscode.jpg" alt="profil de boris code" />
                    <h3>Boris Code</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <NavLink to='/' activeClasssName='navActive'>
                        <i className="fas fa-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;