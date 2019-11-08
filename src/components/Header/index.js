import React from 'react';
import Message from '../Message';
import Score from '../Score';

function Header(props) {

  const { score, topScore } = props;

  return (
    <>
      <Message />
      <Score score={score} topScore={topScore}/>
    </>
  );

}


export default Header