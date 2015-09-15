import React from 'react';
import { Router, Route } from 'react-router'
import Home from './components/home/home';
import TwitterFeeds from './components/twitter/twitterFeeds';

window.React = React;
const mountNode = document.getElementById('app');

React.render((
  <Router>
    <Route path="/" component={Home}></Route>
    <Route path="/feeds" component={TwitterFeeds}></Route>
    <Route path="*" component={Home}/>
  </Router>
), mountNode);
