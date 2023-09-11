import React, {Component} from 'react';
import './Favorites.css';

class Favorites extends Component {
    constructor() {
      super();
      this.state = {
      };
    }  
  
    componentDidMount() {
      fetch("")
        .then((response) => response.json())
        .then((data) =>
          this.setState({
          })
        )
        .catch((error) => console.log(error));
    }
  
    render() {
      console.log(this.state.personaje);
      return 
    }
  }

export default Favorites;