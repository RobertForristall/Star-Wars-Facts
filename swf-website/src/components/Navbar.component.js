import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
import image from './images/DeathStarTemp.png'
import axios from 'axios'

export default class Navbar extends React.Component {
    constructor(props){
        super(props)

        this.filmsClick = this.filmsClick.bind(this)
        this.peopleClick = this.peopleClick.bind(this)
        this.planetsClick = this.planetsClick.bind(this)
        this.speciesClick = this.speciesClick.bind(this)
        this.starshipsClick = this.starshipsClick.bind(this)
        this.vehiclesClick = this.vehiclesClick.bind(this)

        this.state = {
            filmsToggle: false,
            peopleToggle: false,
            planetsToggle: false,
            speciesToggle: false,
            starshipsToggle: false,
            vehiclesToggle: false,
        }
    }

    filmsClick(e) {

        e.preventDefault();
        this.setState(state => ({
            filmsToggle: !state.filmsToggle
        }))
    }

    peopleClick(e) {

        e.preventDefault()
        this.setState(state => ({
            peopleToggle: !state.peopleToggle
        }))
    }

    planetsClick(e) {

        e.preventDefault()
        this.setState(state => ({
            planetsToggle: !state.planetsToggle
        }))
    }

    speciesClick(e) {

        e.preventDefault()
        this.setState(state => ({
            speciesToggle: !state.speciesToggle
        }))
    }

    starshipsClick(e) {

        e.preventDefault()
        this.setState(state => ({
            starshipsToggle: !state.starshipsToggle
        }))
    }

    vehiclesClick(e) {

        e.preventDefault()
        this.setState(state => ({
            vehiclesToggle: !state.vehiclesToggle
        }))
    }

    render() {

        let filmsList, peopleList, planetList, speciesList, starshipList, vehicleList

        if (this.state.filmsToggle) filmsList = <div className = 'dropdown-container'>
                                        <Link to = '#'>The Phantom Menace</Link>
                                        <Link to = '#'>Attack of the Clones</Link>
                                        <Link to = '#'>Revenge of the Sith</Link>
                                        <Link to = '#'>A New Hope</Link>
                                        <Link to = '#'>The Empire Strikes Back</Link>
                                        <Link to = '#'>Return of the Jedi</Link>
                                    </div>
        
        if (this.state.peopleToggle) peopleList = <div className = 'dropdown-container'>
                                        <Link to = '#'>Luke Skywalker</Link>
                                        <Link to = '#'>Darth Vader</Link>
                                        <Link to = '#'>R2-D2</Link>
                                        <Link to = '#'>All Characters</Link>
                                    </div>

        if (this.state.planetsToggle) planetList = <div className = 'dropdown-container'>
                                        <Link to = '#'>Tatooine</Link>
                                        <Link to = '#'>Naboo</Link>
                                        <Link to = '#'>All Planets</Link>
                                    </div>
        
        if (this.state.speciesToggle) speciesList = <div className = 'dropdown-container'>
                                        <Link to = '#'>Human</Link>
                                        <Link to = '#'>Wookie</Link>
                                        <Link to = '#'>Gungan</Link>
                                        <Link to = '#'>All Species</Link>
                                    </div>

        if (this.state.starshipsToggle) starshipList = <div className = 'dropdown-container'>
                                        <Link to = '#'>X-Wing</Link>
                                        <Link to = '#'>Tie Fighter</Link>
                                        <Link to = '#'>Imperial Star Destroyer</Link>
                                        <Link to = '#'>All Starships</Link>
                                    </div>
        
        if (this.state.vehiclesToggle) vehicleList = <div className = 'dropdown-container'>
                                        <Link to = '#'>Snowspeeder</Link>
                                        <Link to = '#'>All Vehicles</Link>
                                    </div>
        
        return(
            <div className = 'sidenav'>
                <div className = 'MainImage'>
                    <img src = {image} alt = "Death Star" width = '150' height = '150'/>
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

                <ul>
                    <li>
                        <button className='dropdown-btn' onClick = {this.filmsClick}>Films
                            <i className = 'fa fa-caret-down'/>
                        </button>
                        {filmsList}
                    </li>
                    <li>
                        <button className='dropdown-btn' onClick = {this.peopleClick}>People
                            <i className = 'fa fa-caret-down'/>
                        </button>
                        {peopleList}
                    </li>
                    <li>
                        <button className = 'dropdown-btn' onClick = {this.planetsClick}>Planets
                            <i className = 'fa fa-caret-down'/>
                        </button>
                        {planetList}
                    </li>
                    <li>
                        <button className = 'dropdown-btn' onClick = {this.speciesClick}>Species
                            <i className = 'fa fa-caret-down'/>
                        </button>
                        {speciesList}
                    </li>
                    <li>
                        <button className = 'dropdown-btn' onClick = {this.starshipsClick}>Starships
                            <i className = 'fa fa-caret-down'/>
                        </button>
                        {starshipList}
                    </li>
                    <li>
                        <button className = 'dropdown-btn' onClick = {this.vehiclesClick}>Vehicles
                            <i className = 'fa fa-caret-down'/>
                        </button>
                        {vehicleList}
                    </li>
                </ul>

                
            </div>
        )
    }
}