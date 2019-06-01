import styled from 'styled-components';
import { rem } from 'polished';

export const Title = styled.div`
  font-size: ${rem('26px')};
  font-weight: 600;
`;

export const SocialLinks = styled.div`
  & > a {
    color: #428dff;
    text-decoration: none;
    margin-right: ${rem('14px')};
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const HeaderContainer = styled.div`
  padding: ${rem('18px')} ${rem('20px')};
  border-bottom: ${rem('1px')} solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;