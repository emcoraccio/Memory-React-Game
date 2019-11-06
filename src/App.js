import React from 'react';
import logo from './logo.svg';
import './App.css';
import animals from './animals.json';
import Card from './components/Card/index';
import CardContainer from './components/CardContainer';


function App() {


  return (
    <CardContainer animals={animals}/>
  );
}

export default App;
