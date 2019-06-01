import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const FooterContainer = styled.div`
  background-color: #f9f9f9;
`;

const FooterSections = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FooterSection = styled.div`
  padding: ${rem('10px')};
`;

const CopyrightBlock = styled.div`
  text-align: center;
  font-size: ${rem('14px')};
  padding: ${rem('10px')};
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterSections>
        <FooterSection>
          Section 1
        </FooterSection>
        <FooterSection>
          Section 2
        </FooterSection>
        <FooterSection>
          Section 3
        </FooterSection>
      </FooterSections>
      <CopyrightBlock>
        Copyright
      </CopyrightBlock>
    </FooterContainer>
  );
}
