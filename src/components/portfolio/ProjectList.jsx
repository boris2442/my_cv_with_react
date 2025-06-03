import React, { Component } from 'react'
import Project from './project';
import { portfolioData } from '../data/PortfolioData';
class ProjectList extends Component {
    state = {
        projects: portfolioData
    };


    render() {
        let {projects}=this.state;
        return (
            <div className='portfolioContent'>
                <ul className="radioDisplay">

                </ul>
                <div className="projects">
                    {
                      
                        projects.map(item=>{
                            return(
                                <Project
                                key={item.id}
                                item={item}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ProjectList