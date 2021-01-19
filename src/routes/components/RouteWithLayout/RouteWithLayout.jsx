import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const RouteWithLayout = ({
  layout: Layout,
  component: Component,
  state,
  setState,
  loading,
  setLoading,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return (
          <Layout>
            <Component
              state={state}
              setState={setState}
              loading={loading}
              setLoading={setLoading}
              {...matchProps}
            />
          </Layout>
        );
      }}
    />
  );
};

export default RouteWithLayout;
