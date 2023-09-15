import React, { Component } from 'react';
import './ViewAll.css';
import CardMovies from '../../components/CardMovies/CardMovies';
import Filter from '../../components/Filter/Filter';

class ViewAllPopular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popular: [],
            page: 2
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

    movieFilter(text){
        let filtered = this.state.popular.filter((movie)=>movie.title.includes(text))
        this.setState({
            popular: filtered
        })
    }

    showMore(){
        let number = this.state.page;
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=${number}`)
          .then((response) => response.json())
          .then((data) => this.setState(
            { popular: data.results.concat(this.state.popular),
              page: number + 1})
          )
          .catch((error) => console.log(error));
    }

    render() {
        return (
            <main>
                <section>
                    <Filter filtering={(text)=> this.movieFilter(text)}/>
                    <h1 className='tituloViewAll'>Todas las películas populares</h1>
                    <button onClick={() => this.showMore()} className="buttonMore"><strong>Ver más películas</strong></button>
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