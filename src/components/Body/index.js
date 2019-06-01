import styled from 'styled-components';
import { rem } from 'polished';

const Body = styled.div`
  max-width: ${rem('1200px')};
  background-color: white;
  margin: ${rem('15px')} auto;
  box-shadow: ${rem('1px')} ${rem('1px')} ${rem('10px')} rgba(0, 0, 0, 0.2);
`;

export default Body;