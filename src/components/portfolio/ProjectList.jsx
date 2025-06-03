import React, { Component } from 'react'
import Project from './project';
import { portfolioData } from '../data/PortfolioData';
class ProjectList extends Component {
    state = {
        projects: portfolioData,
        radios: [
            { id: 1, value: "javascript" },
            { id: 2, value: "css" },
            { id: 3, value: "react" },
            { id: 4, value: "php" }


        ],
        selectedRadio: 'javascript'
    };
    handleRadio = (event) => {
        console.log(event.target.value)
        let radio = event.target.value;
        this.setState({ selectedRadio: radio })

    }

    render() {
        let { projects, radios, selectedRadio } = this.state;
        return (
            <div className='portfolioContent'>
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            <li key={radio.id}>
                                <input type="radio" name="" id={radio.value} checked={radio.value === selectedRadio} value={radio.value} onChange={this.handleRadio} />
                                <label htmlFor={radio.value} >{radio.value}</label>
                            </li>
                        })
                    }
                </ul>
                <div className="projects">
                    {

                        projects
                            .filter(item => item.languages.includes(selectedRadio)).map(item => {
                                return (
                                    <Project
                                        key={item.id}
                                        item={item} />
                                )
                            })
                    }
                </div>
            </div>
        )
    }
}

export default ProjectList