import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './screens/Home/Home';
import Favorites from './screens/Favorites/Favorites';
import ViewAll from './screens/ViewAll/ViewAll';
import ViewAllPopular from './screens/ViewAll/ViewAllPopular';
import ViewAllUpcoming from './screens/ViewAll/ViewAllUpcoming';
import SearchResults from './screens/SearchResults/SearchResults';
import MovieDetails from './screens/Details/MovieDetails';
import NotFound from './screens/NotFound/NotFound';

function App() {
  return (
    <section>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/viewAll" component={ViewAll}/>
        <Route path="/popular" component={ViewAllPopular}/>
        <Route path="/upcoming" component={ViewAllUpcoming}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/searchResults" component={SearchResults}/>
        <Route path="/moviedetails/id/:id" component={MovieDetails}/>
        <Route path="" component={NotFound}/>
      </Switch>
      <Footer/>
    </section>
  )
}

export default App;