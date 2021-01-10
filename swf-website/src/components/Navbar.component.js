import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
import image from './images/DeathStarTemp.png'

export default class Navbar extends React.Component {
    constructor(props){
        super(props)


    }

    render() {
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

                <button className='dropdown-btn'>Films
                    <i className = 'fa fa-caret-down'/>
                </button>
                <div className = 'dropdown-container'>
                    <Link to = '#'>The Phantom Menace</Link>
                    <Link to = '#'>Attack of the Clones</Link>
                    <Link to = '#'>Revenge of the Sith</Link>
                </div>

                
            </div>
        )
    }
}