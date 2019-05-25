import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
