import React, {Component} from 'react';
import './SearchResults.css';

class SearchResults extends Component {
    constructor(){
        super()
        this.state = {results: ''}
    }

    evitarSubmit(event){
        event.preventDefault();
    }

    controlarCambios(event){
        this.setState({results: event.target.value})
    }

    render(){
        return(
        <form onSubmit={(event) => this.evitarSubmit(event)}>
            <label>Nombre: </label>
            <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
            <input type="submit" value="Submit"/>
            <button className = "boton_busqueda" value="send" type="submit">Buscar</button>
        </form>
    )}
}


export default SearchResults;