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

export const RouterSwitch = () =>
  <Switch>
    <Route path="/" exact><Intro /></Route>
    <Route path="/intro" exact><Intro /></Route>
    <Route path="/prices" exact ><Prices /></Route>
    <Route path="/enter" exact component={Enter} />
    <Route path="/merchandise" exact component={Merchandise} />
    <Route path="/entries-list" exact component={EntriesList} />
    <Route path="*" exact component={PageUnavailable} />
    <Redirect to="/" />
  </Switch>
  ;

export default RouterSwitch;