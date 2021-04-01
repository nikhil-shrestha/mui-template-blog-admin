import React from 'react';
import { Switch } from 'react-router-dom';

import { Main as MainLayout, Dashboard as DashboardLayout } from '../layouts';

import { RouteWithLayout } from './components';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Podcast from '../pages/Podcast';

const Routes = (props) => (
  <Switch>
    <RouteWithLayout
      exact
      path="/"
      component={Home}
      layout={MainLayout}
      {...props}
    />
    <RouteWithLayout
      exact
      path="/podcast/:id"
      component={Podcast}
      layout={MainLayout}
      {...props}
    />
    <RouteWithLayout
      exact
      path="/search"
      component={Search}
      layout={MainLayout}
      {...props}
    />
  </Switch>
);

export default Routes;
