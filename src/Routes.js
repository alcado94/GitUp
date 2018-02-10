import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import App from './App.js';
import Board from './Components/Board.js';
import Login from './Components/Login.js';
import Proyect from './Components/Proyect.js';

class Main extends Component {
    render(){
        return (
            
            <Switch>
                <Route path="/" component={Board} />
                <Route path="/board" component={Board} />
                <Route path="/board/:repoName" component={Proyect}  />
            </Switch>
        
        );
    }
    
}
export default Main;