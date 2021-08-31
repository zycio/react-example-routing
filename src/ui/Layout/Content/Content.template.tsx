import { Redirect, Route, Switch } from 'react-router-dom';
import { appRoutes } from '../../../App.routes';
import { DynamicLoader } from '../../../shared/DynamicLoader';
import classes from './Content.module.scss';

export const ContentTemplate = () => {
  const routes = appRoutes
    .map(route => (
      <Route exact path={route.path} key={route.name}>
          <DynamicLoader component={route.component} />
      </Route>
    ));

  return (
    <div className={classes.Content}>
      <Switch>
        <Route exact path="/">
          <Redirect to={appRoutes[0].path} />
        </Route>
        { routes }
        <Route path="*" exact>
          <DynamicLoader component="NotFoundPage" />
        </Route>
      </Switch>
    </div>
  );
};