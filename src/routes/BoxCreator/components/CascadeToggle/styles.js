import styled from 'styled-components';
import { rem } from 'polished';

export const CascadeToggleContainer = styled.div`
  margin-bottom: ${rem('5px')};
  :last-child {
    margin-bottom: 0;
  }
`;

const cascadeVisible = `
  background-color: #d3e4ff;
`;

export const CascadeContent = styled.div`
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

export const CascadeLabel = styled.div`
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

  &:active {
    background-color: #bad4ff;
  }

  & > svg {
    margin-left: auto;
    transition: all 0.2s ease;
    ${(props) => props.visible ? `
      transform: rotateZ(-90deg);
    ` : ''}
  }
`;