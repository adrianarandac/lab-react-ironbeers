import React from 'react';
import { Link } from 'react-router-dom';

function ListItem(props) {
  const { _id, image_url, name, tagline, abv } = props.beer;
  return (
    <Link to={`/beers/${_id}`} className="list-item">
      <div>
        <img src={image_url} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{tagline}</p>
        <p>{abv}%</p>
      </div>
    </Link>
  );
}

export default ListItem;