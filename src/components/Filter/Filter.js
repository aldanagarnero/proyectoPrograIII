import React, {Component} from 'react';

class Filter extends Component{
    constructor(props){
        super(props); //se usa el super para usar las props si es que son necesarias
        this.state = {
            filterText: ''
        }
    }
    handleSubmit(event) {
        event.preventDefault();
      }
    handleChange(event) {
        this.setState({filterText: event.target.value}, () => this.props.filtering(this.state.filterText));
    }

    render(){
        return(
            <section className='filtrado'>
                <form onSubmit={(event)=>this.handleSubmit(event)}>
                    <input type='text' placeholder='Filtrar' onChange={(event)=>this.handleChange(event)} value={this.state.filterText} />
                    <button type="submit" value="Submit">Filtrar</button>
                </form>
            </section>
        );
    };
}

export default Filter;