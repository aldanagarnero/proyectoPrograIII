import React, {Component} from 'react';
import './SearchResults.css';

class SearchResults extends Component {
    constructor(){
        super()
        this.state = {
            populares: [],
            cartelera: []
        }
    }

    componentDidMount(){
        fetch('')
            .then((response) => response.json())
            .then((data) => this.setState(
                {populares: data.results} 
            ))
            .catch((error) => console.log(error));
    }
    render(){
        return
    }
}


export default SearchResults;