import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = () => {
    return (
        <section>
            <div className='portfolio'>
                <Navigation />
                <ProjectList />
            </div>
        </section>
    );
};

export default Portfolio;