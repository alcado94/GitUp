import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

import { Route, Router } from 'react-router';

import Board from './Components/Board.js';
import Login from './Components/Login.js';
import Proyect from './Components/Proyect.js';

ReactDOM.render(
    <Router>
        <Route path="/board" component={Board}>
            <Route path="/:repoName" component={Proyect} />
        </Route>
        <Route path="/" component={Login}/>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
