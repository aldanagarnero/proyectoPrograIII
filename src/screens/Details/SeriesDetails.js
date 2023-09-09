import React, {Component} from 'react';
import './Details.css';

class SeriesDetails extends Component{
    constructor(){
        super()
        this.state = {
            series: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/series_id?api_key=0317bbf7efac7dd04b2c2c3748377d57&language=en-US&page=1')
            .then(response => response.json())
            .then(data => this.setState(
                {series: data.results} 
            ))
            .catch(e => console.log(e));
    }
    render(){
        console.log(this.state)
        return(
            <section>
                
            </section>
        );
    };
}

export default SeriesDetails