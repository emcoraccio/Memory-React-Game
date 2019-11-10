import React, { Component } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';


class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    feedback: "Click a picture to start. Don't click any pictures more than once."
  };

  changeScore = (set) => {

    if (set === "increase") {
      if (this.state.score === this.state.topScore || this.state.score === 11) {
        const feedback = this.state.score === 11 ? "You Win!" : "Correct!";
        const score = this.state.score === 11 ? 0 : this.state.score + 1;
        this.setState({
          score,
          topScore: this.state.score + 1,
          feedback
        });
      }
      else {
        this.setState({
          score: this.state.score + 1,
          feedback: "Correct!"
        });
      };
    }
    else if (set === "reset") {
      this.setState({
        score: 0,
        feedback: "Game Over"
      });
    };
  };


  render() {

    return (
      <div className="container">
        <Header {...this.state} />
        <CardContainer changeScore={this.changeScore} score={this.score} />
      </div>
    );

  }

};

export default App;
