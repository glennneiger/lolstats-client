import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const InputSelectContainer = styled.div`
  display: flex;
  align-items: center;

  & > select {
    margin-left: auto;
    width: ${rem('130px')};
    height: ${rem('24px')};
  }
`;

const InputSelectComponent = styled.select`
  outline: none;
  height: ${rem('21px')};
`;

export default function InputSelect(props) {
  return (
    <InputSelectContainer>
      <span>{props.label}</span>
      <InputSelectComponent
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </InputSelectComponent>
    </InputSelectContainer>
  );
}