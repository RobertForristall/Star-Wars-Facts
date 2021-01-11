import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
import image from './images/DeathStarTemp.png'

export default class Navbar extends React.Component {
    constructor(props){
        super(props)

        this.filmsClick = this.filmsClick.bind(this)

        this.state = {
            filmsToggle: false
        }
    }

    filmsClick(e) {

        e.preventDefault();
        console.log('button pressed')

        this.setState(state => ({
            filmsToggle: !state.filmsToggle
        }))
    }

    render() {

        let filmsList

        if (this.state.filmsToggle) filmsList = <div className = 'dropdown-container'>
                                        <Link to = '#'>The Phantom Menace</Link>
                                        <Link to = '#'>Attack of the Clones</Link>
                                        <Link to = '#'>Revenge of the Sith</Link>
                                    </div>
                                        

        return(
            <div className = 'sidenav'>
                <div className = 'MainImage'>
                    <img src = {image} alt = "Death Star" width = '200' height = '200'/>
                </div>
                <h3 className = 'WhiteColor'>Main Links:</h3>
                <ul>
                    <li>
                        <Link to = '/'>Home Page</Link>
                    </li>
                    <li>
                        <Link to = '#'>Forms</Link>
                    </li>
                    <li>
                        <Link to = '#'>Recent Changes</Link>
                    </li>
                    <li>
                        <Link to = '#'>News</Link>
                    </li>
                    <li>
                        <Link to ='#'>Random Article</Link>
                    </li>
                    <li>
                        <Link to = '#'>About</Link>
                    </li>
                </ul>

                <button className='dropdown-btn' onClick = {this.filmsClick}>Films
                    <i className = 'fa fa-caret-down'/>
                </button>
                {filmsList}

                
            </div>
        )
    }
}