import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/style.scss';
import App from './appComponent';

ReactDOM.hydrate(<App/>, document.getElementById('root'));
