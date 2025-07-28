import React from 'react';
import Navigation from '../components/Navigation';
// import Contact from '../pages/Contact';
// import Portfolio from '../pages/Portfolio';
// import Knowledges from '../pages/Knowledges';
// import NotFound from '../pages/NotFound';

const Home = () => {
    return (
        <section>

            <div className='home'>
                <Navigation /><br />
                <div className="homeContent">
                    <img className="responsive-img" src="../media/boris-code-237.jpg" alt="boris simo aubin tsebo" style={{
                        height: '200px',
                        width: '200px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: '30%',
                        bottom: '30px',
                    }} />
                    <div className="content"><br /><br /><br /><br /><br /><br /><br />
                        <h1 >AUBIN Simo </h1>
                        {/* <h1>Boris code</h1> */}
                        <h2>Developpeur web</h2><br />
                        <div className="pdf">
                            <a href="./media/CV2_complet_boris.pdf" download target='_blank '>Telecharger cv</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Knowledges />
            <Portfolio />
            <Contact /> */}

        </section>

    );
};

export default Home;