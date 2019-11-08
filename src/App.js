import React, { Component } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';


class App extends Component {

  state = {
    score: 0,
    topScore: 0
  }

  changeScore = (set) => {

    if (set === "increase") {
      if (this.state.score === this.state.topScore) {
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.topScore + 1
        });
      }
      else {
        this.setState({
          score: this.state.score + 1
        })
      }
    }
    else if (set === "reset") {
      this.setState({
        score: 0
      })
    }
  }




  render() {

    return (
      <>
        <Header {...this.state}/>
        <CardContainer changeScore={this.changeScore} />
      </>
    );

  }

};

export default App;
