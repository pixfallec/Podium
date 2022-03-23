/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import React from 'react';
import '../App.css';
import propTypes from 'prop-types';

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

  handleSubmit(event) {
    alert(`Your favorite flavor is: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="temp-id">
          {this.props.categoria}
          <select value={this.state.value} onChange={this.handleChange}>
            {this.props.options.map(object => {
              return <option value={object}>{object}</option>;
            })}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

FormsWinners.propTypes = {
  categoria: propTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: propTypes.array.isRequired,
};
