import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import BeerDetails from '../components/BeerDetails';

function SpecificBeer() {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log('response.data', response.data);
        setBeer(response.data);
      })
      .catch(console.log);

    return console.log('first');
  }, []);
  return (
    <div className="container-random">
      <div className="block-random">
        <Navbar />
        <BeerDetails beer={beer} />
      </div>
    </div>
  );
}

export default SpecificBeer;
