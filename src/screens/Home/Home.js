import React, {Component} from 'react';
import TarjetaPeliculas from '../../components/CardMovies/CardMovies';
import './Home.css';

class Home extends Component{
    constructor(){
        super()
        this.state = {
            populares: [],
            cartelera: [],
            results: ''
        }
    }

    componentDidMount(){
        //POPULARES
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => this.setState(
                {populares: data.results} 
            ))
            .catch((error) => console.log(error));

        //EN CARTEL
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then((response) => response.json())
            .then((data) => this.setState(
                {cartelera: data.results}
            ))
           .catch((error) => console.log(error));
    }

    evitarSubmit(event){
        event.preventDefault();
        return true
    }

    guardarData(event){
        this.setState({
            results: event.target.value
        }, () => this.props.filter(this.state.results))
        return true
    }

    filtrarMovies(textoAFiltrar){
        let filterMovie = this.state.personajes.filter(function(unPersonaje){
            return unPersonaje.name.includes(textoAFiltrar) //includes retorna TRUE o FALSE
        })

        this.setState({
            movies: filterMovie,
        })

    }

    render(){
        console.log(this.state)
        return(     
            <main>
                <section className='body_home'>
                    
                    <h1 className='titulos'>Peliculas Populares</h1>
                    <div className="pelis_pop">
                        {
                            this.state.populares.slice(0, 5).map(function(unaPeli){
                                return <TarjetaPeliculas key={ unaPeli.id } datosMovie={ unaPeli }/>
                            })
                        }
                        
                    </div>
                    <h1 className='titulos'>Peliculas Cartelera</h1>
                    <div className="pelis_cartelera">
                    {
                            this.state.cartelera.slice(0, 5).map(function(unaPeli){
                                return <TarjetaPeliculas key={ unaPeli.id } datosMovie={ unaPeli }/>
                            })
                        }
                    </div>
                </section>
             </main>
        )
    }
}

export default Home;