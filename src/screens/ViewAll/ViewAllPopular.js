import React, { Component } from 'react';
import './ViewAll.css';
import CardMovies from '../../components/CardMovies/CardMovies';
import Filter from '../../components/Filter/Filter';

class ViewAllPopular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popular: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => this.setState(
                { popular: data.results }
            ))
            .catch((error) => console.log(error));
    }
    movieFilter(m){
        let filtered = this.state.popular.filter((movie)=>movie.title.includes(m))
        this.setState({
            popular: filtered
        })
    }
    render() {
        return (
            <main>
                <section>
                    <h1 className='titulos'>Todas las películas populares</h1>
                    <Filter filtering={(m)=> this.movieFilter(m)}/>
                    <div className="seccion_pop">
                        {this.state.popular.length > 0 ? 
                            this.state.popular.map((movie) =>  
                               <CardMovies movieData={movie} />)
                            : (<img src='/img/gif-carga.gif' alt="Cargando..." />)
                        }
                    </div>
                </section>
            </main>
        )  
    }
}

export default ViewAllPopular;