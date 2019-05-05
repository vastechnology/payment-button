import React from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';

const Routing = (
    <Router>
        <div>
            <Switch>
                <Route 
                    exact
                    path="/"
                    render={() => {
                        return(
                            <Login />
                        )
                    }} 
                />
                <Route 
                    exact
                    path="/home"
                    render={() => {
                        return(
                            <Home />
                        )
                    }} 
                />
            </Switch>
        </div>
    </Router>
);

export default Routing;