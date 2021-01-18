import React from 'react';
import { Switch } from 'react-router-dom';

import { Main as MainLayout, Dashboard as DashboardLayout } from '../layouts';

import { RouteWithLayout } from './components';

import Home from '../pages/Home';
import Search from '../pages/Search';

const Routes = () => (
  <Switch>
    <RouteWithLayout exact path="/" component={Home} layout={MainLayout} />
    <RouteWithLayout
      exact
      path="/search"
      component={Search}
      layout={MainLayout}
    />
  </Switch>
);

export default Routes;
