import React, {Component} from 'react';
import './Details.css';

class SeriesDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            series: []
        }
    }

    componentDidMount(){
        let id= this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => this.setState(
                {series: data.results} 
            ))
            .catch(error => console.log(error));
    }
    render(){
        console.log(this.state)
        return(
            <main>
                {this.state.series.length === 0 ?
                    (<img src='proyectoPrograIII\public\img\gif-carga.gif' alt="Cargando..." />) : 
                    (
                    <React.Fragment>
                        <section>
                            <img src={this.state.series.poster_path} alt={this.state.series.title} />
                            <h2>{this.state.series.name}</h2>
                            <p>Calificación: {this.state.series.vote_average}</p>
                            <p>Fecha de estreno: {this.state.series.first_air_date}</p>
                            <p>Sinopsis: {this.state.series.overview}</p>
                            <p>Genero: {this.state.series.genres.map((genre)=>genre.name)}</p>
                        </section>
                    </React.Fragment>
                    )}
            </main>
        );
    };
}

export default SeriesDetails