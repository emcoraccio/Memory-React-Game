import React from 'react';

function Card(props) {

  const { animals } = props;

  return (

    <div class="container">

      <div className="row">
        {animals.map(animal => (

          <div className="col s3 m3">
            <div className="card" key={animal.id}>
              <div className="card-image">
                <img src={animal.image} alt={animal.alt} />
              </div>
            </div>
          </div>
        ))};

      </div>

    </div>


  );

};


export default Card;