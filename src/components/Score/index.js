import React from 'react';

function Score({ score, topScore }) {

  return (
    <>
      <div className="row">
        <div className="col s6 m3 offset-m3 center">
          <h5>Score: {score}</h5>
        </div>
        <div className="col s6 m3 center">
          <h5>Top Score: {topScore}</h5>
        </div>
        
      </div>
    </>
  );

};


export default Score;