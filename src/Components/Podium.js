/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { onValue, ref } from 'firebase/database';
// import oscarsRef from '../Data/RealTimeDB';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import RealTimeDB from '../Data/RealTimeDB';
import data from '../Data/oscars-contestants.json';
import state from '../Data/SetData';
import '../App.css';
import getPoints from '../Helpers/GetPoints';

export default class Podium extends React.Component {
  constructor() {
    super();
    this.state = {
      barChartData: state,
      // puntos: 10,
    };
    this.update = this.update.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    // Chart.register(ChartDataLabels);
    this.update();
  }

  // /**
  //  * @param {JSON} oscarsWinnners
  //  */
  getData(snapshot) {
    const nombres = [];
    const puntos = [];

    data.Oscars.forEach(person => {
      let personPoints = 0;
      // person.Puntos += Math.floor(Math.random() * 20);
      snapshot.forEach(child => {
        const { key } = child;
        const value = child.val();
        if (value !== 'none') {
          if (person[key] === value) {
            // console.log(getPoints(key));
            personPoints += getPoints(key);
            // console.log(person.Puntos);
          }
        }
      });
      person.Puntos = personPoints;
    });

    data.Oscars.sort((a, b) => {
      return -a.Puntos + b.Puntos;
    });

    console.log(data.Oscars);

    for (let i = 0; i < 25; i++) {
      nombres.push(
        data.Oscars[i]['Ingresa tu correo electrónico de la USFQ'].split(
          '@',
        )[0],
      );
      puntos.push(data.Oscars[i].Puntos);
    }

    return { nombres, puntos };
  }

  update() {
    const oscarsRef = ref(RealTimeDB, 'Oscars');
    onValue(oscarsRef, snapshot => {
      // winners.forEach(el => {
      //   console.log(el);
      // })
      const { nombres, puntos } = this.getData(snapshot);
      // console.log(winners);

      this.setState({
        barChartData: {
          labels: nombres,
          datasets: [
            {
              label: 'Puntos',
              backgroundColor: 'rgba(181, 145, 50, 0.1)',
              borderColor: 'rgba(181, 145, 50, 1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(238, 238, 238, 0.1)',
              hoverBorderColor: 'rgba(238, 238, 238, 1)',
              data: puntos,
            },
          ],
        },
      });
    });
  }

  render() {
    return (
      <div className="chart">
        <Bar
          // width="400%"
          // height="300%"
          data={this.state.barChartData}
          options={{
            responsive: true,
            title: {
              display: true,
              text: 'Oscars Podium',
              fontSize: 20,
            },
            legend: {
              display: true,
            },
            plugins: {
              legend: {
                display: false,
              },
              datalabels: {
                display: true,
                color: 'white',
                anchor: 'end',
                offset: -20,
                align: 'start',
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: true,
                  color: 'white',
                },
              },
              y: {
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: true,
                  color: 'white',
                },
              },
            },
          }}
        />
      </div>
    );
  }
}
