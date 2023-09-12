import React, {Component} from 'react';
import './Favorites.css';
import CardMovies from '../../components/CardMovies/CardMovies';

class Favorites extends Component {
    constructor() {
      super();
      this.state = {
      };
    }  
  
    componentDidMount() {
      let favorites = []
      let recuperoStorage = localStorage.getItem('favorites');

      if (recuperoStorage !== null){
        favorites = JSON.parse(recuperoStorage);
      }

      favorites.forEach(id => {
        
      });

      fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a3c55e0abc72e6abaa573f83ee40635f&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) =>{
          this.setState({
            upcoming : data.results
          })
        })
        .catch((error) => console.log(error));
      }
  
    render() {
      return(
        <React.Fragment> 
          <main>
            <h2>PELICULAS FAVORITAS</h2>
            
          </main>
        </React.Fragment>

      )
    }
  }

export default Favorites;