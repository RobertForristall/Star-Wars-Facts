import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Search.css'

export default class Search extends React.Component {
    constructor(props){
        super(props);

        this.handleSearch = this.handleSearch.bind(this)
        this.search = this.search.bind(this)
        this.input = React.createRef()

        this.state = {
            searchString: "",
            buttonSelected: 0
        }

    }

    handleSearch(e) {
        e.preventDefault()
        if(e.key === 'Enter') this.search()
    }

    search() {
        console.log(this.input.current.value)
    }

    render() {

        let page_class, form_topic_class

        if (this.state.buttonSelected == 0) page_class = 'activated-btn'
        else page_class = 'deactivated-btn'

        return(
            <div className = 'search-bar'>
                <input type = 'text' placeholder='Search' ref = {this.input} onKeyUp = {this.handleSearch}/>
            </div>
        )
    }
}