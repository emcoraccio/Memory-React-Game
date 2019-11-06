import React from 'react';

function Card (props) {

  const { animals } = props;

  return (

    <div className="row">
    {animals.map(animal => (

    <div className="col s6 m4">
      <div className="card" key={animal.id}>
        <div className="card-image">
          <img src={animal.image} />
        </div>
      </div>
    </div>
    ))};

  </div>

  );

};


export default Card;