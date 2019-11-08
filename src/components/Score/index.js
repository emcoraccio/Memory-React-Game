import React from 'react';

function Score(props) {

  const { score, topScore } = props

  return (
    <>
      <div className="row">
        <div className="col s6">
          <h5>Score:{score}</h5>
        </div>
        <div className="col s6">
          <h5>Top Score:{topScore}</h5>
        </div>
        
      </div>
    </>
  );

};


export default Score;