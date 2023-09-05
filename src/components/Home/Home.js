import React, {Component} from 'react';
import './Home.css';


class Home extends Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        //PELÍCULAS
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=bc6a66de00e3debea99fdcf92ffc0ab7&language=en-US`)
            .then(response => response.json())
            .then(data => this.setState(
                {datos: data.image_url}
            ))
            .catch(error => console.log(error));

        //SERIES
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=bc6a66de00e3debea99fdcf92ffc0ab7&language=en-US`)
            .then(response => response.json())
            .then(data => this.setState(
                {datos: data.image_url}
            ))
            .catch(error => console.log(error));
    }
    render(){
        return(     
            <section>
                 <article className="buscador">
                    <form action="resultados.html" method="GET"> 
                        <input className="inputBusqueda" type="text" name="buscador" value="" placeholder="Escriba aqui..."/>
                        <button className = "boton_busqueda" type="submit">Buscar</button>
                    </form>
                    <p className="errorForm"></p>
                </article>
            </section>
        )
    }
}

export default Home;