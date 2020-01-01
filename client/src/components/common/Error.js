 
import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  width: 100%;
  padding: 8px 16px;
  background-color: #f7c5c0;
  color: #a51809;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

export default ({ msg }) => {
    return (
        <ErrorContainer>
          { msg }
        </ErrorContainer>
      );
}