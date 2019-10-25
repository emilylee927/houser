import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Wizard from './Components/Wizard/Wizard.js';




export default (
    <Switch>
        <Route component={Dashboard} exact path='/'></Route>
        <Route component={Wizard} path='/wizard/1'></Route>
    </Switch>
);