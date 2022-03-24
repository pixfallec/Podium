/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import React from 'react';
import '../App.css';
import propTypes from 'prop-types';
import { ref, set } from 'firebase/database';
import RealTimeDB from '../Data/RealTimeDB';

export default class FormsWinners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '----',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // update() {
  //   const categoriaRef = ref();
  // }

  handleSubmit(event) {
    // eslint-disable-next-line no-alert
    alert(`${this.props.categoria}: ${this.state.value}`);
    const categoriaRef = ref(RealTimeDB, `Oscars/${this.props.categoria}`);
    set(categoriaRef, this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="formWinner">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="temp-id">
            <div className="label">{this.props.categoria}</div>
            <select value={this.state.value} onChange={this.handleChange}>
              {this.props.options.map(object => {
                return <option value={object}>{object}</option>;
              })}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

FormsWinners.propTypes = {
  categoria: propTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: propTypes.array.isRequired,
};
