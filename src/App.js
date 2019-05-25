import React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'react-awesome-popover/build/index.css';

import Router from './routes';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
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
