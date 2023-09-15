import React, { Component } from 'react';
import './Home.css';
import CardMovies from '../../components/CardMovies/CardMovies';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            popular: [],
            upcoming: [],
        }
    }

    componentDidMount() {
        //POPULARES
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => this.setState(
                { popular: data.results }
            ))
            .catch((error) => console.log(error));

        //PRÓXIMAS
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => this.setState(
                { upcoming: data.results }
            ))
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <main>
                {/* BUSCADOR */}
                <SearchBar />
                <section>
                    <Link to={'/popular'}><h1 className='tituloPop'>Peliculas populares</h1></Link>
                    <div className="seccion_pop">
                        {this.state.popular.length > 0 ? 
                            this.state.popular.slice(0, 5).map((movie) =>  
                               <CardMovies movieData={movie} />)
                            : (<img src='/img/gif-carga.gif' alt="Cargando..." />) 
                        }
                    </div>
                    
                    <Link to={'/upcoming'}><h1 className='tituloUp'>Peliculas próximas</h1></Link>
                    <div className="seccion_up">
                        {this.state.upcoming.length > 0 ? 
                            this.state.upcoming.slice(0, 5).map((movie) =>  
                               <CardMovies movieData={movie} />)
                            : (<img src='/img/gif-carga.gif' alt="Cargando..." />) 
                        }
                    </div>
                </section>
            </main>
        )
    }
}

export default Home;