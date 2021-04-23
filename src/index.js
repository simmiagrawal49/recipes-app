import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chef from './components/Chef/Chef'
import News from './components/News/News'


ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/news" component={News} />
        <Route path="/chef" component={Chef} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

