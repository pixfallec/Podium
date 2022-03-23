/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import React from 'react';
import '../App.css';
import propTypes from 'prop-types';
import FormsWinners from '../Components/FormsWinners';

export default class SelectCategorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '----',
    };
  }

  render() {
    return (
      <div className="categorias">
        <FormsWinners
          categoria="Mejor Estadio"
          options={['gool', 'perro', 'roca']}
        />
        <FormsWinners
          categoria="Mejor Peluquero"
          options={['gool', 'perro', 'roca']}
        />
        <FormsWinners
          categoria="Mejor Actor"
          options={['gool', 'perro', 'roca']}
        />
        <FormsWinners
          categoria="Mejor Bisep"
          options={['gool', 'perro', 'roca']}
        />
        <FormsWinners
          categoria="Ganadores"
          options={['gool', 'perro', 'roca']}
        />
        <FormsWinners
          categoria="Intento 5"
          options={['gool', 'perro', 'roca']}
        />
      </div>
    );
  }
}
