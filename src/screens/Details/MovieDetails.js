import React, {Component} from 'react';
import './Details.css';

class MovieDetails extends Component{
    constructor(){
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/movie_id?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.setState(
                {movies: data.results} 
            ))
            .catch(e => console.log(e));
    }
    render(){
        console.log(this.state)
        return(
            <section>
                
            </section>
        );
    };
}

export default MovieDetails
