import React, { Component } from 'react';
import './ViewAll.css';
import CardMovies from '../../components/CardMovies/CardMovies';
import Filter from '../../components/Filter/Filter';

class ViewAllUpcoming extends Component {
    constructor(props) {
        super(props)
        this.state = {
            upcoming: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => this.setState(
                { upcoming: data.results }
            ))
            .catch((error) => console.log(error));
    }

    movieFilter(m){
        let filtered = this.state.upcoming.filter((movie)=>movie.title.includes(m))
        this.setState({
            upcoming: filtered
        })
    }

    render() {
        console.log(this.state)
        return (
            <main>
                <section className='body_home'>
                    <h1 className='titulos'>Todas las películas próximas</h1>
                    <Filter filtering={(m)=> this.movieFilter(m)}/>
                    <div className="seccion_up">
                        {this.state.upcoming.length === 0 ? (<img src='/img/gif-carga.gif' alt="Cargando..." />) : (
                            this.state.upcoming.map(function (movie) {
                                return <CardMovies movieData={movie} />
                            }))}
                    </div>
                </section>
            </main>
        )
    }
}

export default ViewAllUpcoming;