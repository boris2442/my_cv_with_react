import React, { Component } from 'react'
import ProgressBar from './ProgressBar'
class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: 'Javascript', xp: '1' },
            { id: 2, value: 'Css', xp: '1.5' },
            { id: 3, value: 'Php', xp: '1.8' }
            // { id: 4, value: 'Python', xp: '0.4' }

        ],
        frameworks: [
            { id: 1, value: 'React', xp: '1.4' },
            { id: 2, value: 'Tailwind Css', xp: '1.5' },
            { id: 3, value: 'Laravel', xp: '1.5' },
            { id: 3, value: 'Wordpress', xp: '0.5' },
            { id: 4, value: 'Express', xp: '0.6' }
        ]

    }

    render() {
        let { languages, frameworks } = this.state

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className='languagesDisplay'
                    title='languages'
                />
                <ProgressBar
                    languages={frameworks}
                    title='frameworks & bibliotheques'
                    className='frameworksDisplay'
                />
            </div>
        )
    }
}

export default Languages