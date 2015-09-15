import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Home from './components/home/home';
import TwitterFeeds from './components/twitter/twitterFeeds';

window.React = React;
const mountNode = window.document.getElementById('app');

React.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={Home}></Route>
    <Route path="/feeds" component={TwitterFeeds}></Route>
    <Route path="*" component={Home}/>
  </Router>
), mountNode);
