import React, {Component} from 'react';
import CardMovies from '../../components/CardMovies/CardMovies';
import './Home.css';
import {Link} from 'react-router-dom';

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

                    <Link to={'/popular'}><h1 className='titulos'>Peliculas Populares</h1></Link>
                    <div className="pelis_pop">
                        {this.state.popular.slice(0, 5).map(function(movie){
                            return <CardMovies key={movie.id} movieData={movie}/>
                        })}
                        
                    </div>
                    <Link to={'/upcoming'}><h1 className='titulos'>Peliculas En Cartelera</h1></Link>
                    <div className="pelis_cartelera">
                        {this.state.upcoming.slice(0, 5).map(function(movie){
                                return <CardMovies key={movie.id} movieData={movie}/>
                        })}
                    </div>
                </section>
             </main>
        )
    }
}

export default Home;