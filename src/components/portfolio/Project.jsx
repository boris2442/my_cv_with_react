import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
class Project extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    handleExit = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const { name, languagesIcons, source, info, picture } = this.props.item

        return (
            <div className='project' project>

                <div className="icons">
                    {
                        languagesIcons.map(icon =>

                            <i className={icon} key={icon}></i>
                        )
                    }
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="image du projet {name}" onClick={this.handleInfo} />
                <span className='infos' onClick={this.handleInfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>{
                    this.state.showInfo && (
                        <div className="showInfo">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} className="button" rel="noopener noreferrer" target='_blank'>code / source</a>
                                    </div>
                                </div>
                                <p className="">{info}</p>
                                <div className="button return" onClick={this.handleInfo}>
                                    <button className="">Retourner sur la page</button> </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Project