import React, { Component } from 'react';
import './CardMovies.css';
import { Link } from 'react-router-dom';

class CardMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Agregar a favoritos',
        }
    }

    componentDidMount() {
        let favorites = []
        let recuperoStorage = localStorage.getItem('favorites');
        if (recuperoStorage !== null) {

            favorites = JSON.parse(recuperoStorage);

            if (favorites.includes(this.props.movieData.id)) {
                this.setState({
                    text: 'Quitar de favoritos'
                })
            }
        }
    }

    functionFavs(id) {
        let favorites = []
        let recuperoStorage = localStorage.getItem('favorites');

        if (recuperoStorage !== null) {
            favorites = JSON.parse(recuperoStorage);
        }

        if (favorites.includes(id)) {
            favorites = favorites.filter(unId => unId !== id);
            this.setState({
                text: 'Agregar a favoritos'
            })

        } else {
            favorites.push(id);
            this.setState({
                text: 'Quitar de favoritos'
            })
        }

        //Guardar en localStorage
        let favoritesToString = JSON.stringify(favorites);
        localStorage.setItem('favorites', favoritesToString);
    }

    render() {
        return (
            <div className='characterCard'>
                <Link to={`/moviedetails/id/${this.props.movieData.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w300/${this.props.movieData.poster_path}`} alt={this.props.movieData.original_title} />
                </Link>

                <Link to={`/moviedetails/id/${this.props.movieData.id}`}>
                    <h2>{this.props.movieData.title}</h2>
                </Link>

                <button onClick={() => this.functionFavs(this.props.movieData.id)} type='button'>{this.state.text}</button>

            </div>
        )
    }
}

export default CardMovies;