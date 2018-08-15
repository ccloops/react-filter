import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background-color: darkSlateGray;
  padding: 1.9em 3em;
  margin-left: 2em;
  color: cornSilk;
`;

const Submit = ({ handleSubmit }) => (
  <Button onClick={ handleSubmit }>Submit</Button>
);

Submit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Submit;