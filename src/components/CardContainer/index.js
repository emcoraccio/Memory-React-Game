import React, { Component } from 'react';
// import Card from './Card';
import animals from '../../animals.json';

class CardContainer extends Component {
  constructor(props) {

    super(props);

    const { changeScore } = this.props;

    this.state = {
      clicked: [],
    };



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

    return(

      <div className="row">
      {animals.map(animal => (
  
      <div className="col s6 m3" key={animal.id}>
        <div className="card">
          <div className="card-image">
            <img src={animal.image} alt={animal.alt} onClick={() => {this.clickImage(animal.id)}}/>
          </div>
        </div>
      </div>
      ))};
  
    </div>
      );

  }

}

export default CardContainer