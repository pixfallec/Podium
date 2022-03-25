/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import React from 'react';
import '../App.css';
import propTypes from 'prop-types';
import { onValue, ref, set } from 'firebase/database';
import FormsWinners from '../Components/FormsWinners';
import RealTimeDB from '../Data/RealTimeDB';
import fields from '../Data/Fields.json';

export default class SelectCategorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '----',
      keys: Object.keys(fields),
      values: Object.values(fields),
      objects: [],
    };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.update();
  }

  update() {
    const objetos = [];
    const keys = Object.keys(fields);
    const values = Object.values(fields);
    for (let i = 0; i < keys.length; i++) {
      console.log(keys[i], values[i]);
      objetos.push(<FormsWinners categoria={keys[i]} options={values[i]} />);
    }
    // console.log(objectos);
    this.setState({ objects: objetos });
  }

  // <div className="col">
  // <FormsWinners
  //   categoria="Película Extrangera"
  //   options={['----', 'gool', 'perro', 'roca']}
  // />

  render() {
    return <div className="categorias">{this.state.objects}</div>;
  }
}
