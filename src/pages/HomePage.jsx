import React from 'react';
import { Link } from 'react-router-dom';
import beersImg from '../assets/beers.png';
import randomBeerImg from '../assets/random-beer.png';
import newBeerImg from '../assets/new-beer.png';


function HomePage() {
  return (
    <div className='homepage'>
      <Link to="/beers">
        <img src={beersImg} alt="bar counter" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id
          faucibus nisl tincidunt eget nullam non nisi est. Sagittis vitae et
          leo duis ut diam quam.
        </p>
      </Link>
      <Link exact to="/beers/random">
        <img src={randomBeerImg} alt="beer taps" />
        <h2>Random Beer</h2>
        <p>
          Quam vulputate dignissim suspendisse in est. Rhoncus aenean vel elit
          scelerisque mauris pellentesque pulvinar pellentesque habitant. Quam
          id leo in vitae turpis massa sed. Tristique sollicitudin nibh sit amet
          commodo nulla facilisi.
        </p>
      </Link>
      <Link exact to="/beers/create">
        <img src={newBeerImg} alt="voodoo ranger beer" />
        <h2>New Beer</h2>
        <p>
          Eget nulla facilisi etiam dignissim diam. Rhoncus urna neque viverra
          justo nec. Sit amet est placerat in egestas erat imperdiet sed. Quam
          adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;
