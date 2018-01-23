import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Landing from '../components/Landing'
import Home from "../components/Home";
import Error404 from '../components/Error404';
import requireAuth from '../utils/requireAuth';

export default () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route requireAuth exact path="/dashboard" render ={props =><Home {...props} />} /> */}
            <Route path='/dashboard/' component={requireAuth(Home)}/>

            <Route exact path="/property/:id" component={Home} />
            <Route component={Error404} />
        </Switch>
        </BrowserRouter>
    );
}
