import React from 'react';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import ViewAll from './components/ViewAll/ViewAll';
import SearchResults from './components/SearchResults/SearchResults';

import {Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <section>
      <Navbar/>
      
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/viewAll" component={ViewAll}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/searchResults" component={SearchResults}/>
        <Route path="/detallePelicula/id/:id" component={Navbar}/> 
        <Route path="/detalleSeries/id/:id" component={Navbar}/>
      </Switch>
    
      <Footer/>
    </section>
  ); // falta crearlos route de detalle con sus componentes
}

export default App;