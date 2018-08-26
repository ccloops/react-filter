import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import TextInput from './text-input';
import Submit from './submit';

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
    console.log(this.state.inputValue);
  }

  handleInputSubmit(event) {
    event.preventDefault();
    this.setState({inputValue: event.target.value});
    
    console.log(this.state.inputValue);

  }

  render() {
    const {
      handleInputChange,
      handleInputSubmit,
      state: { inputValue },
    } = this;
    return(
      <Fragment>
        <h1>CC</h1>
        <TextInput 
          inputValue={ inputValue }
          handleChange={ handleInputChange }
        />
        <Submit 
          handleSubmit={ handleInputSubmit }
        />
      </Fragment>
    );
  }
}