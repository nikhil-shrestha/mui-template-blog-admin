import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './components/TopBar';
import Footer from './components/Footer';

const Main = ({ ...props }) => {
  const { children } = props;

  return (
    <>
      <TopBar />
      <div style={{ minHeight: '100vh' }}>{children}</div>
      <Footer />
    </>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
