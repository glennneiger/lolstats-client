import styled from 'styled-components';
import { rem } from 'polished';

const TabButton = styled.button`
  user-select: none;
  outline: none;
  display: inline-flex;
  user-select: none;
  font-weight: bold;
  font-size: ${rem('16px')};
  padding: 8px 10px 7px 10px;
  background-color: ${(props) => props.active ? '#d3e4ff' : '#F6F6F6'};
  border-style: none;
  border-radius: ${rem('3px')};
  color: #428dff;
  transition: background-color 0.2s ease;
  margin-right: ${rem('5px')};

  &:hover {
    cursor: pointer;
    background-color: #d3e4ff;
  }
`;

export default TabButton;
