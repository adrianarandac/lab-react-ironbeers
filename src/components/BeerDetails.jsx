import React from 'react';

function BeerDetail(props) {
  const { image_url, name, tagline, description } = props.beer;
  return (
    <>
      <img className="img-single-beer" src={image_url} alt="" />
      <h1 className="title-beer"> {name}</h1>
      <h2 className="tagline-beer">
        <i>{tagline}</i>
      </h2>
      <hr />
      <p className="description">{description}</p>
    </>
  );
}

export default BeerDetail;