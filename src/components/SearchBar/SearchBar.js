import React, { Component } from "react";
import './SearchBar.css';
import { Link } from "react-router-dom";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: '',
            movies: []
        }
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    changes(event) {
        this.setState({ valor: event.target.value })
    }

    render() {
        return (
            <form className="form" onSubmit={(event) => this.evitarSubmit(event)}>
                <div className="search">
                    <input className="input" type="text" placeholder="Buscar" onChange={(event) => this.changes(event)} value={this.state.valor} />
                    <Link to={`/SearchResults/${this.state.valor}`}><button className="buttonSearch" type="submit" value="Submit"><i class="fa-solid fa-magnifying-glass"></i></button></Link>
                </div>
            </form>
        )
    }
}
export default SearchBar;