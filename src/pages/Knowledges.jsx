import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/knowledges/Languages';
import Hobbies from '../components/knowledges/Hobbies';
import Experience from '../components/knowledges/Experience';
import OtherSkills from '../components/knowledges/OtherSkills';

const Knowledges = () => {
    return (
        <section>
            <div className='knowledges'>
                <Navigation />
                <div className="knowledgesContent">
              
                    <Languages />
                    <Experience />
                    <OtherSkills />
                    <Hobbies />

                </div>
            </div>
        </section>
    );
};

export default Knowledges;