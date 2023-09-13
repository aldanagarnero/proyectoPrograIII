import React, { Component } from 'react';
import './Favorites.css';
import CardMovies from '../../components/CardMovies/CardMovies';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
    //Recupero el storage
    let favoritesMovies = []
    let recuperoStorage = localStorage.getItem('favorites');

    if (recuperoStorage !== null) {
      favoritesMovies = JSON.parse(recuperoStorage);
      let array = [];

      favoritesMovies.forEach((id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US`)
          .then((response) => response.json())
          .then((favoritesMovies) => {
            array.push(favoritesMovies);
            this.setState({
              favorites: array
            })
          })
          .catch((error) => console.log(error));

      })
    };
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <h2>PELICULAS FAVORITAS</h2>
          {this.state.favorites.length > 0 ? <CardMovies favorites={this.state.favorites} /> : <h3>No seleccionaste películas favoritas</h3>}
        </main>
      </React.Fragment>
    )
  }
}

export default Favorites;