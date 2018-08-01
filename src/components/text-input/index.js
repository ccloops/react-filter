import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const TextInput = ({ inputValue, handleChange }) => (
  <input 
    type='text'
    placeholder='type anything'
    onChange={ handleChange }
  />
);

export default TextInput;