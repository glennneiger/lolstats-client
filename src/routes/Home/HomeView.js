import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import HomeWelcome from './HomeWelcome';
import Section from '../../components/Section';

export default function Home() {
  return (
    <MainLayout>
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
    </MainLayout>
  )
}