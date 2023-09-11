import React, {Component} from 'react';
import './SearchResults.css';

class SearchResults extends Component {
    constructor(){
        super()
        this.state = {
            results: ''
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
        .then(response => response.json())
        .then( data => this.setState({
            results: data.results,
        }))
        .catch(error => console.log(error))
    }

    filtrado(element){
            let filtrado = this.state.results.filter(function(pelicula){
                return pelicula.name.includes(element)
            })
            this.setState({
                results: filtrado,
            })
    
        }

        render(){
            return(
                <section>
            
                </section>
            )
        }
}

export default SearchResults;

