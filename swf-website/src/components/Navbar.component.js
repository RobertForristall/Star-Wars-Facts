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
            <div classname = 'sidenav'>
                <div classname = 'MainImage'>
                    <img src = {image} alt = "Death Star" width = '200' height = '200'/>
                </div>
                <Link to = '/'>Main Page</Link>
                <Link to = '#'>Films</Link>
                <Link to = '#'>Characters</Link>
            </div>
        )
    }
}