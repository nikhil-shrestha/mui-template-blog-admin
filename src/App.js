import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Player from './modules/views/Player';
import ScrollTop from './modules/components/ScrollTop';

import Routes from './routes';
import theme from './theme';

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router>
        <Routes
          state={state}
          setState={setState}
          loading={loading}
          setLoading={setLoading}
        />
      </Router>
      <Player />
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}

export default App;
