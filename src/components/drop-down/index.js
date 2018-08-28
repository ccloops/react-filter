import React, { Component } from 'react';
import styled from 'styled-components';

const DropDownItem = styled.li`
  list-style-type: none;
  font-size: 2em;
  background-color: lightGray;
  width: 80%;
`;

export default class DropDown extends Component {
  render() {
    const { dogs, inputValue } = this.props;
    const results = dogs.filter(dog => dog.startsWith(inputValue));
    return(
      <ul>
        {
          results.map((item, index) => (
            <DropDownItem
              key={ `dog-item-${index}` }
            >
              {item}
            </DropDownItem>
          ))
        }
      </ul>
    );
  }
}