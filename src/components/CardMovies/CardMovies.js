import React, { Component } from 'react';
import './CardMovies.css';
import { Link } from 'react-router-dom';

class CardMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clase: "fa-solid fa-heart",
            showInfo: 'Mostrar más',
        }
    }

    componentDidMount() {
        let favorites = []
        let recuperoStorage = localStorage.getItem('favorites');
        if (recuperoStorage !== null) {

            favorites = JSON.parse(recuperoStorage);

            if (favorites.includes(this.props.movieData.id)) {
                this.setState({
                    clase: "fa-solid fa-heart enFav"
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
        localStorage.setItem('favorites', favoritesToString);
    }

    functionShowInfo(){
        if(this.state.showInfo === 'Mostrar más'){
            this.setState({
                showInfo: 'Mostrar menos'
            })
        } else{
            this.setState({
                showInfo: 'Mostrar más'
            })
        }
    }

    render() {
        return (
            <section className='characterCard'>
                <Link to={`/moviedetails/id/${this.props.movieData.id}`}>
                    <img className='poster' src={`https://image.tmdb.org/t/p/w300/${this.props.movieData.poster_path}`} alt={this.props.movieData.original_title} />
                </Link>

                <Link to={`/moviedetails/id/${this.props.movieData.id}`}>
                    <h2 className='titulo_peli'>{this.props.movieData.title}</h2>
                </Link>

            <div>
                <button className='buttonInfo' onClick={() => this.functionShowInfo()} type='button'> {this.state.showInfo}</button>
                <a className='buttonFav' onClick={()=> this.functionFavs(this.props.movieData.id)} type='button'> <i className={this.state.clase}/></a>
                {this.state.showInfo === 'Mostrar más' ?  false : <p>{this.props.movieData.overview}</p>}
            </div>
            </section>
        )
    }
}

export default CardMovies;