import styled from 'styled-components';
import { rem } from 'polished';

export const BoxCreatorView = styled.div`
  display: flex;
`;

export const BoxCreatorContainer = styled.div`
  width: ${rem('900px')};
  min-height: ${rem('430px')};
  border-radius: ${rem('3px')};
  padding: ${rem('10px')};
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

export const StyleConfigColumn = styled.div`
  margin-right: ${rem('10px')};
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const StyleConfigColumnTabs = styled.div`
  margin-bottom: ${rem('5px')};
`;

export const PreviewColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;