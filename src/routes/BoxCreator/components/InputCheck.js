import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const InputCheckContainer = styled.div`
  display: flex;
  align-items: center;

  & > input {
    margin-left: auto;
    height: ${rem('18px')};
  }
`;

const InputCheckComponent = styled.input`
  outline: none;
  height: ${rem('21px')};
`;

export default function InputCheck(props) {
  return (
    <InputCheckContainer>
      <span>{props.label}</span>
      <InputCheckComponent
        type='checkbox'
        checked={props.value}
        onChange={props.onChange}
      />
    </InputCheckContainer>
  );
}