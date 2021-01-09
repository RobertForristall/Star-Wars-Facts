import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'

export default class Navbar extends React.Component {
    constructor(props){
        super(props)


    }

    render() {
        return(
            <div>
                <div classname = 'MainImage'>
                    <img src='../images/DeathStarTemp.png' width = '250' height = '250'/>
                </div>
            </div>
        )
    }
}