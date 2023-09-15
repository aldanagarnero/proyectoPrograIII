import React, {Component} from 'react';
import './Filter.css'
import { Link } from "react-router-dom";

class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            movies: []
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({filterText: event.target.value})
    }

    render(){
        return(
                <form className="form" onSubmit={(event)=>this.handleSubmit(event)}>
                    <div className="search">
                        <input className="input" type='text' placeholder='Filtrar' onChange={(event)=>this.handleChange(event)} value={this.state.filterText}/>
                        <button className="buttonSearch" type="submit" value="Submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
        );
    };
}

export default Filter;