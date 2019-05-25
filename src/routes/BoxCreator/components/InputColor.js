import React from 'react';
import { ChromePicker } from 'react-color'
import styled from 'styled-components';
import { rem } from 'polished';
import Popover from 'react-awesome-popover';

const InputColorButton = styled.button`
  outline: none;
  width: ${rem('133px')};
  height: ${rem('25px')};
  padding: ${rem('3px')};
  border: 1px solid #dedede;
  border-radius: ${rem('3px')};
  background-color: #fefefe;
  cursor: pointer;
`;

const ColorBox = styled.div`
  background-color: ${(props) => props.value};
  border-radius: ${rem('3px')};
  width: 100%;
  height: 100%;
`;

const InputColorContainer = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-left: auto;
  }

  & > .rap-popper-div {
    background-color: transparent;
  }
`;

export default function InputColor(props) {
  return (
    <InputColorContainer>
      <span>{`${props.label} (${props.value})`}</span>
      <Popover placement='left' arrow={false}>
        <InputColorButton>
          <ColorBox value={props.value} />
        </InputColorButton>
        <ChromePicker color={props.value} onChange={props.onChange} />
      </Popover>
    </InputColorContainer>
  );
}