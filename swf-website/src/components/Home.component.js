import React from 'react'
import '../css/Home.css'

export default class Home extends React.Component{
    constructor(props){
        super(props)


    }

    render() {
        return(
            <div className = 'HomePage'>
                <h1 className = 'home-title'>
                    Star Wars Facts
                </h1>
                <hr/>
                <div className = 'main-description'>
                    <h3>Intro to Star Wars Facts</h3>
                    <hr/>
                    <p>
                        Star Wars is a massive franchise with countless people, planets, starships. etc.
                    </p>
                    <p>
                        Star Wars Facts was made to help present all of the information about these aspects of the franchise
                        in a simple and digestable way.
                    </p>
                    <p>
                        Begin exploring by searching for a page or selecting one of the links on the side-bar
                    </p>
                </div>
            </div>
        )
    }
}