import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p style={{ textDecoration: 'underline' }}>&copy;  {new Date().getFullYear()} <a href="mailto:aubinborissimotsebo@gmail.com" target="_blank" rel="noopener noreferrer"> Boris Aubin SIMO TSEBO.</a> Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;