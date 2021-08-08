import {
  Switch,
  Route,
  Redirect, useRouteMatch
} from "react-router-dom";
import PageUnavailable from './main/page-unavailable';
import Intro from './main/intro/intro';
import Prices from './main/prices/prices';
import Enter from './main/enter/enter';
import Merchandise from './main/merchandise/merchandise';
import EntriesList from './main/entries-list/entries-list';

// Need to pass props from links to routes

export const Main = (routerProps) => {
  let { path } = useRouteMatch();
  return <Switch>
    <Route path={path} exact render={(props) => (<Intro {...props} {...routerProps} />)} />
    <Route path={`${path}/intro`} exact render={(props) => (<Intro {...props} {...routerProps} />)} />
    <Route path={`${path}/prices`} exact render={(props) => (<Prices {...props} {...routerProps} />)} />
    <Route path={`${path}/enter`} exact render={(props) => (<Enter {...props} {...routerProps} />)} />
    <Route path={`${path}/merchandise`} exact render={(props) => (<Merchandise {...props} {...routerProps} />)} />
    <Route path={`${path}/entries-list`} exact render={(props) => (<EntriesList {...props} {...routerProps} />)} />
    <Route path="*" exact render={(props) => (<PageUnavailable {...props} />)} />
    <Redirect to="/" />
  </Switch>
    ;
}
export default Main;