import React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'react-awesome-popover/build/index.css';

import Router from './routes';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #f5f5f5;
  }

  button {
    font-family: 'Montserrat', sans-serif;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
