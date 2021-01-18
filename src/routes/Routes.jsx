import React from 'react';
import { Switch } from 'react-router-dom';

import { Main as MainLayout, Dashboard as DashboardLayout } from '../layouts';

import { RouteWithLayout } from './components';

import Home from '../pages/Home';
import Search from '../pages/Search';
import Dashboard from '../pages/Dashboard';
// import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';
// import ForgotPassword from '../pages/ForgotPassword';

const Routes = () => (
  <Switch>
    <RouteWithLayout exact path="/" component={Home} layout={MainLayout} />
    <RouteWithLayout
      exact
      path="/search"
      component={Search}
      layout={MainLayout}
    />
    <RouteWithLayout
      exact
      path="/dashboard"
      component={Dashboard}
      layout={DashboardLayout}
    />
    {/* <RouteWithLayout
      exact
      path="/sign-in"
      component={SignIn}
      layout={MainLayout}
    />
    <RouteWithLayout
      exact
      path="/sign-up"
      component={SignUp}
      layout={MainLayout}
    />
    <RouteWithLayout
      exact
      path="/forgot-password"
      component={ForgotPassword}
      layout={MainLayout}
    /> */}
  </Switch>
);

export default Routes;
