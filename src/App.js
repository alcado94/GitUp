import React, { Component } from 'react';
import './App.css';

import { Route, Router } from 'react-router';

import Board from './Components/Board.js';
import Login from './Components/Login.js';
import Proyect from './Components/Proyect.js';

class App extends Component {
  render() {
    return (
        <Router>
          <Route path="/board" component={Board}>
            <Route path="/:repoName" component={Proyect} />
          </Route>
          <Route path="/" component={Login}/>
        </Router>
    );
  }
}

export default App;
