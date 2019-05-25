import React, { useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const CascadeToggleContainer = styled.div`
  margin-bottom: ${rem('5px')};
  :last-child {
    margin-bottom: 0;
  }
`;

const cascadeVisible = `
  background-color: #d3e4ff;
`;

const CascadeContent = styled.div`
  padding: 0px 10px;

  & > div {
    font-size: ${rem('14px')};
    border-bottom: solid 1px #dedede;
    padding: 4px 0;
    :first-child {
      margin-top: 1px;
    }
    :last-child {
      border: none;
    }
  }
`;

const CascadeLabel = styled.div`
  user-select: none;
  font-weight: bold;
  font-size: ${rem('16px')};
  display: flex;
  padding: 8px 10px 7px 10px;
  background-color: #F6F6F6;
  border-radius: ${rem('3px')};
  color: #428dff;

  transition: background-color 0.2s ease;

  ${(props) => props.visible ? cascadeVisible : ''}

  &:hover {
    cursor: pointer;
    ${cascadeVisible}
  }

  & > svg {
    margin-left: auto;
    transition: all 0.2s ease;
    ${(props) => props.visible ? `
      transform: rotateZ(-90deg);
    ` : ''}
  }
`;

function CascadeToggle(props) {
  const [visible, setVisible] = useState(props.visible || false);

  return (
    <CascadeToggleContainer>
      <CascadeLabel onClick={() => setVisible(!visible)} visible={visible}>
        <span>{props.label}</span>
        <FontAwesomeIcon icon={faChevronLeft} />
      </CascadeLabel>
      {visible && props.children && (
        <CascadeContent>
          {props.children}
        </CascadeContent>
      )}
    </CascadeToggleContainer>
  );
}

export default CascadeToggle;
