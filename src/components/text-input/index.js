import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputContainer = styled.input`
  height: 3em;
  width: 15em;
  border: 2px solid black;
  font-size: 1em;
  text-align: center;
`;

const TextInput = ({ inputValue, handleChange }) => (
  <InputContainer 
    type='text'
    placeholder='type anything'
    onChange={ handleChange }
    value={inputValue}
  />
);

TextInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextInput;