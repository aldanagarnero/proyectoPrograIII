import React, { Component } from 'react';
import './SearchResults.css';
import CardMovies from "../../components/CardMovies/CardMovies";

class SearchResults extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => this.setState(
                { movies: data.results }
            ))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <main>
                <h1 className='titulos'>Resultados para {this.props.match.params.query}</h1>
                <div className='seccion'>
                    {this.state.movies.length > 0 ? 
                        this.state.movies.map((movies) =>
                            <CardMovies movieData={movies} />)
                    : <h3>La búsqueda de {this.props.match.params.query} no arrojó coincidencias</h3>
                    }
                </div>
            </main>
        )
    }
}

export default SearchResults;