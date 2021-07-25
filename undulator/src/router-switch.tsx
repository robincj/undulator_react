import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Intro from './main/intro/intro';
import Prices from './main/prices/prices';
import Enter from './main/enter/enter';
import Merchandise from './main/merchandise/merchandise';
import EntriesList from './main/entries-list/entries-list';

const PageUnavailable = () => <h1>Page not yet constructed</h1>

// Need to pass props from links to routes

export const RouterSwitch = (routerSwitchProps) =>
  <Switch>
    <Route path="/" exact render={(props) => (<Intro {...props} {...routerSwitchProps} />)} />
    <Route path="/intro" exact render={(props) => (<Intro {...props} {...routerSwitchProps} />)} />
    <Route path="/au" exact render={(props) => (<Intro {...props} {...routerSwitchProps} currentEventName='AU' />)} />
    <Route path="/a100" exact render={(props) => (<Intro {...props} {...routerSwitchProps} currentEventName='A100' />)} />
    <Route path="/prices" exact render={(props) => (<Prices {...props} {...routerSwitchProps} />)} />
    <Route path="/enter" exact render={(props) => (<Enter {...props} {...routerSwitchProps} />)} />
    <Route path="/merchandise" exact render={(props) => (<Merchandise {...props} {...routerSwitchProps} />)} />
    <Route path="/entries-list" exact render={(props) => (<EntriesList {...props} {...routerSwitchProps} />)} />
    <Route path="*" exact render={(props) => (<PageUnavailable {...props} />)} />
    <Redirect to="/" />
  </Switch>
  ;

export default RouterSwitch;