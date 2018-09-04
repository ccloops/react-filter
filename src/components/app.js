'../main.scss';
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import superagent from 'superagent';

import TextInput from './text-input';
import SubmitButton from './submit-button';
import DropDown from './drop-down';

const dogs = ['prince', 'sport', 'mabel'];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isSelected: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleInputSubmit(event) {
    event.preventDefault();
    this.setState({inputValue: event.target.value});
  }

  render() {
    const {
      handleInputChange,
      handleInputSubmit,
      state: { inputValue, isSelected },
    } = this;
    return(
      <Fragment>
        <h1>CC</h1>
        <TextInput 
          inputValue={ inputValue }
          handleChange={ handleInputChange }
        />
        <DropDown dogs={ dogs }
          inputValue={ inputValue }
          isSelected={ isSelected }
          className={ isSelected ? 'hide' : 'show' }
          // className='hide'
        />
        <SubmitButton 
          handleSubmit={ handleInputSubmit }
        />
      </Fragment>
    );
  }
}