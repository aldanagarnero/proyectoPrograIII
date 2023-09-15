import React, { Component } from 'react';
import './ViewAll.css';
import CardMovies from '../../components/CardMovies/CardMovies';
import Filter from '../../components/Filter/Filter';

class ViewAllUpcoming extends Component {
    constructor(props) {
        super(props)
        this.state = {
            upcoming: [],
            page: 2
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

    movieFilter(text){
        let filtered = this.state.upcoming.filter((movie) => movie.title.includes(text))
        this.setState({
            upcoming: filtered
        })
    }

    showMore(){
        let number = this.state.page;
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=${number}`)
          .then((response) => response.json())
          .then((data) => this.setState(
            { upcoming : data.results.concat(this.state.upcoming),
              page: number + 1})
          )
          .catch((error) => console.log(error));
    }    

    render() {
        console.log(this.state)
        return (
            <main>
                <section className='body_home'>
                    <Filter filtering={(text)=> this.movieFilter(text)}/>
                    <h1 className='tituloViewAll'>Todas las películas próximas</h1>
                    <button onClick={() => this.showMore()} className="buttonMore"><strong>Ver más películas</strong></button>
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