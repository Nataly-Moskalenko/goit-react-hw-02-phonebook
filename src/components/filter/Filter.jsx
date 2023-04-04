// import css from './Filter.module.css';
// import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Filter extends Component {
  state = {
    inputValue: '',
  };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <label>Find contacts by name</label>
        <input type="text" value={inputValue} onChange={this.handleChange} />
      </div>
    );
  }
}
