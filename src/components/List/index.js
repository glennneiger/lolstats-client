import styled from 'styled-components';
import { rem } from 'polished';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: inline-flex;
  user-select: none;
  font-weight: bold;
  font-size: ${rem('16px')};
  display: flex;
  padding: 8px 10px 7px 10px;
  background-color: #F6F6F6;
  border-radius: ${rem('3px')};
  color: #428dff;

  transition: background-color 0.2s ease;

  margin-bottom: ${rem('5px')};

  &:hover {
    cursor: pointer;
    background-color: #d3e4ff;
  }

  &:active {
    background-color: #bad4ff;
  }
`;