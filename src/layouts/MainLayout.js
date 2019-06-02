import React from 'react';

import Body from '../components/Body';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout(props) {
  return (
    <Body>
      <Header />
      {props.children}
      <Footer />
    </Body>
  );
}