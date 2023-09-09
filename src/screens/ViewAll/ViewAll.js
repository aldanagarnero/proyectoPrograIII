import React, {Component} from 'react';
import './ViewAll.css';

class ViewAll extends Component{
    constructor(){
        super()
        this.state = {
            populares: [],
            cartelera: []
        }
    }

    componentDidMount(){
        fetch('')
            .then((response) => response.json())
            .then((data) => this.setState(
                {populares: data.results} 
            ))
            .catch((error) => console.log(error));
    }
    render(){
        return
    }
}

export default ViewAll;