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
    let favoritesMovies = [];
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
            console.log(favoritesMovies)
          })
          .catch((error) => console.log(error));
      })
    }
  }

  render() {
    return (
      <main>
        <section>
          <h1 className='titulos'>Favoritos</h1>
          <div>
            {this.state.favorites.length > 0 ?
                this.state.favorites.map((favoritesMovies) => 
                  <CardMovies movieData={favoritesMovies} />)
                : <h3>No seleccionaste películas favoritas</h3>
            }
          </div>
        </section>
      </main>
    )
  }
}

export default Favorites;