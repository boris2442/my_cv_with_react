import React from 'react';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Boris code</h1>
                    <h2>Developpeur full stack</h2><br /><b><br /></b>
                    <div className="pdf">
                        <a href="./media/CV2_complet_boris.pdf" target='_blank '>Telecharger cv</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;