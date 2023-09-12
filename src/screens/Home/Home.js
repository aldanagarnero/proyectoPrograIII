import React, {Component} from 'react';
import CardMovies from '../../components/CardMovies/CardMovies';
import './Home.css';

class Home extends Component{
    constructor(){
        super()
        this.state = {
            popular: [],
            upcoming: [],
        }
    }

    componentDidMount(){
        //POPULARES
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => this.setState(
                {popular: data.results} 
            ))
            .catch((error) => console.log(error));

        //EN CARTEL
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => this.setState(
                {upcoming: data.results}
            ))
           .catch((error) => console.log(error));
    }

    render(){
        console.log(this.state)
        return(     
            <main>
                <section className='body_home'>
                    
                    <h1 className='titulos'>Peliculas Populares</h1>
                    <div className="pelis_pop">
                        {this.state.popular.slice(0, 5).map(function(movie){
                            return <CardMovies key={movie.id} datosMovie={movie}/>
                        })}
                        
                    </div>
                    <h1 className='titulos'>Peliculas En Cartelera</h1>
                    <div className="pelis_cartelera">
                        {this.state.upcoming.slice(0, 5).map(function(movie){
                                return <CardMovies key={movie.id} datosMovie={movie}/>
                        })}
                    </div>
                </section>
             </main>
        )
    }
}

export default Home;