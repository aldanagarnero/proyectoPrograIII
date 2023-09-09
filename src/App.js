import React from 'react';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './screens/Home/Home';
import Favorites from './screens/Favorites/Favorites';
import ViewAll from './screens/ViewAll/ViewAll';
import SearchResults from './screens/SearchResults/SearchResults';

import {Route, Switch} from 'react-router-dom';

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