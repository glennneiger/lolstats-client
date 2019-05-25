import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const InputRangeContainer = styled.div`
  display: flex;
  align-items: center;

  & > span {

  }

  & > input {
    margin-left: auto;
  }
`;

const InputRangeComponent = styled.input`
  appearance: none;
  outline: none;
  height: ${rem('21px')};
  &::-webkit-slider-runnable-track {
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #d3e4ff;
    border-radius: 4px;
    height: 5px;
    border: 0px solid #000000;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #2497E3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #A1D0FF;
    cursor: pointer;
    margin-top: ${rem('-6.5px')};
  }
`;

export default function InputRange(props) {
  return (
    <InputRangeContainer>
      <span>{`${props.label} (${props.value})`}</span>
      <InputRangeComponent
        type='range'
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.onChange}
      />
    </InputRangeContainer>
  );
}