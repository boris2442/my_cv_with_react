import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>interet</h3>
            <ul>
                <li className='hobby'>
                    <i className="fas fa-running"></i>
                    <span>Course a pied</span>
                </li>
                <li className='hobby'>
                    <i className="fas fa-hiking"></i>
                    <span>Randonées</span>
                </li>
                <li className='hobby'>
                    <i className="fas fa-seedling"></i>
                    <span>Permaculture</span>
                </li>
                <li className='hobby'>
                    <i className="fab fa-bitcoin"></i>
                    <span>crypto- monnaies</span>
                </li>
                <li className='hobby'>
                    <i className="fas fa-rocket"></i>
                    <span>Espace</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;