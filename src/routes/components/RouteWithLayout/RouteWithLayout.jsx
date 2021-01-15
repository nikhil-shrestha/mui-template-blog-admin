import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const RouteWithLayout = ({ layout: Layout, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        );
      }}
    />
  );
};

export default RouteWithLayout;
