import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import Body from '../../components/Body';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HomeWelcome from './HomeWelcome';

const Section = styled.section`
  height: ${rem('400px')};
  padding: ${rem('10px')}
  border-bottom: ${rem('1px')} solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

export default function Home() {
  return (
    <Body>
      <Header />
      <HomeWelcome />
      <div>
        <Section>
          Section Text 1
        </Section>
        <Section>
          Section Text 2
        </Section>
        <Section>
          Section Text 3
        </Section>
      </div>
      <Footer />
    </Body>
  )
}