import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import BeerDetails from '../components/BeerDetails.jsx';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log('response.data', response.data);
        setRandomBeer(response.data);
      })
      .catch(console.log);

    return console.log('first');
  }, []);
  return (
    <div className="container-random">
      <div className="block-random">
        <Navbar />
        <BeerDetails beer={randomBeer} />
      </div>
    </div>
  );
}

export default RandomBeer;