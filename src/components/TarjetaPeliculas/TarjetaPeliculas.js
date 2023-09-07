import React, {Component} from 'react'
import './TarjetaPeliculas.css'

class TarjetaPeliculas extends Component{

    constructor(Props){
        super(Props);
        this.state = {
           textoBoton:'Agregar a favoritos',
        }
    }

    componentDidMount(){
        //Chequear si el id está en el array de favoritos
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            let favoritos = JSON.parse(recuperoStorage);
    
            //si está el id, cambiar el texto del botón
            if(favoritos.includes(this.props.datosPeli.id)){ 
                this.setState({
                    textoBoton: "Quitar de favoritos"
                })
            }

        }
    }

    agergarYSacarDeFavs(id){
        //Guardar un id en un array y luego en localStorage
        let favoritos = [];
        favoritos.push(id);

        //Guardar en localStorage
        let favoritosToString = JSON.stringify(favoritos);        
        localStorage.setItem('favoritos', favoritosToString);

        this.setState({
            textoBoton: "Quitar de favoritos",
        })

    }


    render(){
        return (
            <article className='character-card'>
                { <img src={"https://image.tmdb.org/t/p/w300/" + this.props.datosPeli.poster_path} alt={this.props.datosPeli.original_title} />}
                <button onClick={()=>this.agergarYSacarDeFavs(this.props.datosPeli.id)} type='button'>{this.state.textoBoton}</button>
                <h2>{this.props.datosPeli.title}</h2>
                <p>{this.props.datosPeli.overview}</p>
            </article>
        )
    }
    
}

export default TarjetaPeliculas;