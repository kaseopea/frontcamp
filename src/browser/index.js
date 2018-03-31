import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../js/appComponent';

ReactDOM.hydrate((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));
