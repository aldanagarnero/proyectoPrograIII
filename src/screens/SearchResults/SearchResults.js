import React, {Component} from 'react';
import TarjetaPelicula from "../../components/CardMovies/CardMovies"
import './SearchResults.css';

class SearchResults extends Component {
    constructor(){
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1&include_adult=false`) 
        .then(response => response.json())
        .then( data => this.setState({
            movies: data.results
        }))
        .catch(error => console.log(error))
    }

        render(){
            return(
                <div className='body-home'>
                    {this.state.movies.length > 0 ?(
                        this.state.movies.slice(0, 5).map((movies)=> {
                            return(
                                <TarjetaPelicula key={movies.id} movieData={ movies }/>
                            )
                        })
                    ):(
                        <p>Cargando</p>
                    )}
                </div>
            )
        }
}

export default SearchResults;

