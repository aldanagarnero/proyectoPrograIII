import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Home(){
    return(
    <section>
        <Header/>
        class Home extends Component {
            constructor(props){
                super(props)
                this.state = {
                    datos:''
                }
         }
         componentDidMount(){
         fetch('https://dh-movies.com/movies')
             .then( response => response.json() )
             .then( data => this.setState(
         {datos: data.image_url}
         ))
             .catch( error => console.log(error) );
         }
           render(){
        return(
            <div>
         { this.state.datos === '' ?
         <h3>Cargando...</h3> :
         <h3>{this.state.datos}></h3> }
                <p> Hola Mundo </p>
            </div>
              ) 
              }
            }
        <Footer/>
    </section>
    )
}
export default Home