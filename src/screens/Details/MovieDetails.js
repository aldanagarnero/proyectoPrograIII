import React, { Component } from 'react';
import './Details.css';

class MovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            clase: "fa-solid fa-heart",
        }
    }

    componentDidMount() {
        let favorites = []
        let recuperoStorage = localStorage.getItem('favoritesMovies');
        if (recuperoStorage !== null) {

            favorites = JSON.parse(recuperoStorage);

            if (favorites.includes(this.props.match.params.id)) {
                this.setState({
                    clase: "fa-solid fa-heart enFav"
                })
            }
        }

        let id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) =>
                this.setState(
                    { movies: data }
                ))
            .catch((error) => console.log(error));
    }

    functionFavs(id) {
        let favorites = []
        let recuperoStorage = localStorage.getItem('favoritesMovies');

        if (recuperoStorage !== null) {
            favorites = JSON.parse(recuperoStorage);
        }

        if (favorites.includes(id)) {
            favorites = favorites.filter(unId => unId !== id);
            this.setState({
                clase: "fa-solid fa-heart",
            })

        } else {
            favorites.push(id);
            this.setState({
                clase: "fa-solid fa-heart enFav"
            })
        }

        //Guardarlo en localStorage
        let favoritesToString = JSON.stringify(favorites);
        localStorage.setItem('favoritesMovies', favoritesToString);
    }

    render() {
        return (
            <React.Fragment>
            <main>
                {this.state.movies.length !== 0 ?
                (<section>
                    <h2 className='titulodetails'>{this.state.movies.title}</h2>
                    <section className='contenedordetail'>            
                        <div className='contenedorimagendetails'>
                            <img className='imagendetails' src={`https://image.tmdb.org/t/p/w300/${this.state.movies.poster_path}`} alt={this.state.movies.title}/>
                        </div>

                        <div className="infoDetail">
                            <ul className="listaDetail">
                                <li className='datos'><p>Fecha de estreno: {this.state.movies.release_date}</p></li>
                                <li className='datos'><p>Duración: {this.state.movies.vote_average}</p></li>
                                <li className='datos'><p>Calificación: {this.state.movies.vote_average}</p></li>
                                <li className='datos'><p>Genero: {this.state.movies.genres.map((genre) => `${genre.name} | `)}</p></li> 
                                <li className='sinopsis'><p>Sinopsis: {this.state.movies.overview}</p></li>
                            </ul>
                        </div>

                        <div className='contenedorFav'>
                            <a className='buttonFav' onClick={()=> this.functionFavs(this.props.match.params.id)} type='button'><i className={this.state.clase}/></a>
                        </div>
                    </section>
                </section>)
                
                : (<img src='/img/gif-carga.gif' alt="Cargando..." />)
                }
            </main>
            </React.Fragment>
        )
    }
}

export default MovieDetails;
