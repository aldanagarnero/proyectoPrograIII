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
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&include_adult=false&api_key=45a63508e52C71549188d480ab5f1a32&language=en-US&page=1`) //falta url
        .then(response => response.json())
        .then( data => this.setState({
            movies: data.results,
        }))
        .catch(error => console.log(error))
    }

        render(){
            console.log(this.props.match.params.query)
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

