import React, { Component } from 'react';
import styled from 'styled-components';

export default class DropDown extends Component {
  render() {
    const { dogs, inputValue } = this.props;
    const results = dogs.filter(dog => dog.startsWith(inputValue));
    return(
      <ul>
        {
          results.map((item, index) => (
            <li
              key={`dog-item-${index}`}
            >{item}</li>
          ))
        }
      </ul>
    );
  }
}