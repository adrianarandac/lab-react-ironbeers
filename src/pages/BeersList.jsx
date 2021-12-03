import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ListItem from '../components/ListItem';

function BeersList() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState('');

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data);
      })
      .catch(console.log);

    return console.log('first');
  }, [beers]);
  return (
    <div>
      <Navbar />
      <input
        onChange={handleInput}
        type="text"
        name="query"
        placeholder="Search by name"
        value={query}
      />
      <div className="beers-list">
        {beers.map((oneBeer) => (
          <ListItem beer={oneBeer} key={oneBeer._id} />
        ))}
      </div>
    </div>
  );
}

export default BeersList;