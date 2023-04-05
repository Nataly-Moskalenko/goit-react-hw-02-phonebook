// import css from './Filter.module.css';
// import PropTypes from 'prop-types';
// import { Component } from 'react';
import { nanoid } from 'nanoid';

export default function Filter({ value, handleChange }) {
  const nameInputValue = nanoid();
  return (
    <div>
      <label htmlFor={nameInputValue}>Find contacts by name</label>
      <input
        id={nameInputValue}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
