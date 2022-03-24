/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js/auto';
import { onValue, ref } from 'firebase/database';
// import oscarsRef from '../Data/RealTimeDB';
import RealTimeDB from '../Data/RealTimeDB';
import data from '../Data/registro-oscars-2022.json';
import state from '../Data/SetData';
import '../App.css';

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
            personPoints += 10;
            console.log(person.Puntos);
          }
        }
      });
      person.Puntos = personPoints;
    });

    data.Oscars.sort((a, b) => {
      return -a.Puntos + b.Puntos;
    });

    for (let i = 0; i < 5; i++) {
      nombres.push(
        data.Oscars[i][
          'Ahora vamos a registrarte.\r\nPor favor, ingresa tu nombre y apellido'
        ],
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
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
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
              display: false,
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
          }}
        />
      </div>
    );
  }
}
