import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
       <App />
    </Switch>
  </BrowserRouter>,
document.getElementById('root')
);

