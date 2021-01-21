import React from 'react'
import '../css/Search.css'

export default class Search extends React.Component {
    constructor(props){
        super(props);

        this.handleSearch = this.handleSearch.bind(this)
        this.search = this.search.bind(this)
        this.input = React.createRef()

        this.state = {
            searchString: ""
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
        return(
            <div className = 'search-bar'>
                <label>Search:
                <input type = 'text' ref = {this.input} onKeyUp = {this.handleSearch}/>
                </label>
            </div>
        )
    }
}