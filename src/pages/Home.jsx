import React from 'react';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <section>

            <div className='home'>
                <Navigation />
                <div className="homeContent">
                    <img className="responsive-img" src="../media/boriscode.jpg" alt="boris code" style={{
                        height: '200px',
                        width: '200px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: '30%',
                        bottom: '30px',
                    }} />
                    <div className="content"><br /><br /><br /><br />
                        <h1 >Boris Simo </h1>
                        {/* <h1>Boris code</h1> */}
                        <h2>Developpeur web</h2><br />
                        <div className="pdf">
                            <a href="./media/CV2_complet_boris.pdf" download target='_blank '>Telecharger cv</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;