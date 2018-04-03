import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../js/appComponent';
import '../js/redux/redux';


ReactDOM.hydrate((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));
