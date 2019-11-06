import React from 'react';

function Card (props) {

  const { animals } = props;

  return (
    <>
    {animals.map(animal => (
      <img className="card" src={animal.image} />
    ))};
    </>
  );

};


export default Card;