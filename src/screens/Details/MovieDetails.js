import React, {Component} from 'react';
import './Details.css';

class MovieDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        let id= this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => this.setState(
                {movies: data} 
            ))
            .catch((error) => console.log(error));
    }
    render(){
        console.log(this.state.movies.genres.map((genre)=>genre.name))
        return(
            <main>
                 {this.state.movies.length === 0 ?
                    (<img src='proyectoPrograIII\public\img\gif-carga.gif' alt="Cargando..." />) : 
                    (
                    <React.Fragment>
                        <section>
                            <img src={this.state.movies.poster_path} alt={this.state.movies.title} />
                            <h2>{this.state.movies.title}</h2>
                            <p>Calificación: {this.state.movies.vote_average}</p>
                            <p>Fecha de estreno: {this.state.movies.release_date}</p>
                            <p>Duracion: {this.state.movies.vote_average}</p>
                            <p>Sinopsis: {this.state.movies.overview}</p>
                            <p>Genero: {this.state.movies.genres.map((genre)=>genre.name)}</p>
                        </section>
                    </React.Fragment>
                    )}
            </main>
        );
    };
}

export default MovieDetails
