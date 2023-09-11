import React, {Component} from 'react'
import './CardMovies.css'

class CardMovies extends Component{
    constructor(props){
        super(props);
        this.state = {
            text:'Agregar a favoritos'
        }
    }

    componentDidMount(){
        let recuperoStorage = localStorage.getItem('favorites');
        if (recuperoStorage !== null){
            let favorites = JSON.parse(recuperoStorage);
            if(favorites.includes(this.props.datosMovie.id)){ 
                this.setState({
                    text: 'Quitar de favoritos'
                })
            }
        }
    }

    functionFavs(id){
        let favorites = [];
        let recuperoStorage = localStorage.getItem('favorites');

        if (recuperoStorage !== null){
            favorites = JSON.parse(recuperoStorage);
        }

        if(favorites.includes(id)){
            favorites = favorites.filter( unId => unId !== id)
            this.setState({
                textoBoton : 'Agregar a favoritos'
            })

        } else {
            favorites.push(id);
            this.setState({
                textoBoton: 'Quitar de favoritos'
            })
        }

        //Guardar en localStorage
        let favoritesToString = JSON.stringify(favorites);        
        localStorage.setItem('favorites', favoritesToString);
    }

    render(){
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w300/${this.props.datosMovie.poster_path}`} alt={this.props.datosMovie.original_title} />
                <button onClick={()=>this.functionFavs(this.props.datosMovie.id)} type='button'>{this.state.text}</button>
                <h2>{this.props.datosMovie.title}</h2>
            </div>
        )
    }
}

export default CardMovies;