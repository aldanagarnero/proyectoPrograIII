import React, {Component} from 'react';
import TarjetaPeliculas from '../TarjetaPeliculas/TarjetaPeliculas';
import './Home.css';


class Home extends Component{
    constructor(){
        super()
        this.state = {
            populares: [],
            cartelera: []
        }
    }

    componentDidMount(){
        //POPULARES
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.setState(
                {populares: data.results} 
            ))
            .catch(e => console.log(e));

        //EN CARTEL
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.setState(
                {cartelera: data.results}
            ))
           .catch(error => console.log(error));
    }
    render(){
        console.log(this.state)
        return(     
             <section>
                 <div className="buscador">
                     <form action="resultados.html" method="GET"> 
                         <input className="inputBusqueda" type="text" name="buscador" value="" placeholder="Escriba aqui..."/>
                         <button className = "boton_busqueda" type="submit">Buscar</button>
                     </form>
                     <p className="errorForm"></p>
                 </div>
                 <div className="pelis_pop">
                    {
                        this.state.populares.slice(0.5).map(function(unaPeli){
                            return <TarjetaPeliculas key={ unaPeli.id } datosPeli={ unaPeli }/>
                        })
                    }
                    
                 </div>
                 <div className="body-home">
                 {
                        this.state.cartelera.slice(0.5).map(function(unaPeli){
                            return <TarjetaPeliculas key={ unaPeli.id } datosPeli={ unaPeli }/>
                        })
                    }
                 </div>
             </section>
        )
    }
}

export default Home;