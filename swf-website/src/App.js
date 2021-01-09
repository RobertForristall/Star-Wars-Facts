import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Home from './components/Home.component'
import Navbar from './components/Navbar.component'

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return(
      <Router>
        <Navbar/>
        <Route path='/' exact render = {() => <Home/>}/>
      </Router>

    )
  }
}
