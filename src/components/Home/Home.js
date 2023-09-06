import React, {Component} from 'react';
import './Home.css';


class Home extends Component{
    constructor(){
        super()
        this.state = {
            datos: [],
        }
    }

    componentDidMount(){
        //POPULARES
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.setState(
                {datos: data.results} 
            ))
            .catch(error => console.log(error));

        //EN CARTEL
        //fetch(`https://api.themoviedb.org/3/movie/now_playing`)
          //  .then(response => response.json())
            //.then(data => this.setState(
           //     {datos: data}
            //))
           // .catch(error => console.log(error));
    }
    render(){
        console.log(this.state)
        return(     
             <body>
                  <article className="buscador">
                     <form action="resultados.html" method="GET"> 
                         <input className="inputBusqueda" type="text" name="buscador" value="" placeholder="Escriba aqui..."/>
                         <button className = "boton_busqueda" type="submit">Buscar</button>
                     </form>
                     <p className="errorForm"></p>
                 </article>
             </body>
                //USAR MAP
        )
    }
}

export default Home;