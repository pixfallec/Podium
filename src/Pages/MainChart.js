/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import React from 'react';
import Podium from '../Components/Podium';
import '../App.css';
import Header from '../Images/header.png';
import Footer from '../Images/footer.png';

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
      <>
        <div className="App-header">
          <div className="header">
            <img src={Header} alt="Header" />
          </div>
          <Podium />
          <div className="footer">
            <img src={Footer} alt="Footer" />
          </div>
        </div>

        <footer>
          <p className="text-center">
            {' '}
            WEB |
            <a
              href="https://github.com/pixfallec"
              target="_blank"
              rel="noreferrer"
            >
              Andrés Parra
            </a>
            |
            <a
              href="https://www.instagram.com/joel_del_castillo/"
              target="_blank"
              rel="noreferrer"
            >
              Joel del Castillo
            </a>
          </p>
        </footer>
      </>
    );
  }
}
