/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import React from 'react';
import Podium from '../Components/Podium';
import '../App.css';

export default class MainChart extends React.Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      barChartData: 0,
      // puntos: 10,
    };
    this.update = this.update.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  getData(snapshot) {}

  update() {}

  render() {
    return (
      <div className="App-header">
        <Podium />
      </div>
    );
  }
}
