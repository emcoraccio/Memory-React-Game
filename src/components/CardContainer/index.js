import React from 'react';
import Card from '../Card';

function CardContainer(props) {

  const { animals } = props;

  return (
    <Card animals={animals}/>
  )
}

export default CardContainer