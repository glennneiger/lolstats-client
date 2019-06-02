import styled from 'styled-components';
import { rem } from 'polished';

const Section = styled.section`
  min-height: ${rem('400px')};
  padding: ${rem('10px')}
  border-bottom: ${rem('1px')} solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

export default Section;
