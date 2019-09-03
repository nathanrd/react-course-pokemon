import React from "react";
import { Redirect, Route, Switch} from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

export const Router = () => (
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Redirect from="/" exact to="/home" />
    </Switch>
);
export default Router;