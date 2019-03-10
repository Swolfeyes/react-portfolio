import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import styles from './styles/Reset.scss';

ReactDOM.render(<BrowserRouter basename='/react-portfolio'><App /></BrowserRouter>, document.getElementById('root'));
