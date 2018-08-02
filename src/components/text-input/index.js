import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextInput = ({ inputValue, handleChange }) => (
  <input 
    type='text'
    placeholder='type anything'
    onChange={ handleChange }
  />
);

TextInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextInput;