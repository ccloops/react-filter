import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import TextInput from './text-input';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
    console.log(this.state.inputValue);
  }

  render() {
    const {
      handleInputChange,
      state: { inputValue },
    } = this;
    return(
      <Fragment>
        <h1>Hello World</h1>
        <TextInput 
          inputValue={ inputValue }
          handleChange={ handleInputChange }
        />
      </Fragment>
    );
  }
}