import React, {Component} from 'react';
import './ViewAll.css';
import CardMovies from '../../components/CardMovies/CardMovies';

class ViewAll extends Component{
    constructor(props){
        super(props)
        this.state = {
            popular: []
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
    }

    render(){
        console.log(this.state)
        return(     
            <main>
                <section className='body_home'>
                    <h1 className='titulos'>Todas las películas populares</h1>
                    <div className="pelis_pop">
                        {this.state.popular.map(function(movie){
                            return <CardMovies key={movie.id} datosMovie={movie}/>
                        })}   
                    </div>
                </section>
            </main>
        )
    }
}

export default ViewAll;