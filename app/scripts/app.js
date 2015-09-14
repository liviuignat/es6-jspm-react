import React from 'react';
import { Router, Route } from 'react-router'
import Home from './components/home';

window.React = React;
const mountNode = document.getElementById('app');

React.render((
  <Router>
    <Route path="/" component={Home}></Route>
  </Router>
), mountNode);
