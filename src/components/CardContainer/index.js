import React, { Component } from 'react';
// import Card from './Card';
import './styles.css'
import animals from '../../animals.json';

class CardContainer extends Component {
  constructor(props) {

    super(props);

    const { changeScore } = this.props;

    this.state = {
      clicked: [],
    };


    this.shuffleImgs = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }


    this.clickImage = (imageId) => {
      if (this.state.clicked.indexOf(imageId) === -1) {
        this.setState({
          clicked: [...this.state.clicked, imageId]
        })
        changeScore("increase");
      }
      else {
        changeScore("reset");
        this.setState({
          clicked: []
        });
      };
    };

  }


  render() {

    return (

        <div className="row">
          {this.shuffleImgs(animals)}
          {animals.map(animal => (

            <div className="col s6 m4 l3 card-col" key={animal.id}>
              <div className="card hoverable">
                <div className="card-image">
                  <img src={animal.image} alt={animal.alt} onClick={() => { this.clickImage(animal.id) }} />
                </div>
              </div>
            </div>
          ))}

        </div>

    );

  }

}

export default CardContainer