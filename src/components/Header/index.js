import React from 'react';
import Message from '../Message';
import Score from '../Score';

function Header({ score, topScore, feedback }) {

  return (
    <>
      <Message feedback={feedback}/>
      <Score score={score} topScore={topScore}/>
    </>
  );

}


export default Header