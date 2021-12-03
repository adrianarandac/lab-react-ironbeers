import React from 'react';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BeersList from './pages/BeersList';
import RandomBeer from './pages/RandomBeer';
import NewBeerForm from './pages/NewBeerForm';
import SpecificBeer from './pages/SpecificBeer';
import './App.css';
import axios from 'axios';

function App() {
  const [beers, setBeers] = useState([]);


  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data);
      })
      .catch(console.log);

    return console.log('first');
  }, []);

  console.log('Beers: ', beers);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={BeersList} />
        <Route exact path="/beers/random" component={RandomBeer} />
        <Route exact path="/beers/create" component={NewBeerForm} />
        <Route exact path="/beers/:id" component={SpecificBeer} />
      </Switch>
    </div>
  );
}

export default App;
