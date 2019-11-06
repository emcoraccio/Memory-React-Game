import React from 'react';
import './App.css';
import animals from './animals.json';
import CardContainer from './components/CardContainer';
import Header from './components/Header';


function App() {

  return (
    <>
      <Header />
      <CardContainer animals={animals} />
    </>
  );
};

export default App;
