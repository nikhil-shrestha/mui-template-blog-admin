import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();

  const { query, setQuery, onSubmit } = props;

  return (
    <Paper component="form" className={classes.root} onSubmit={onSubmit}>
      <InputBase
        className={classes.input}
        placeholder='Trending: "Tony Hsieh"'
        inputProps={{ 'aria-label': 'search' }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton
        type="submits"
        className={classes.iconButton}
        aria-label="search"
        onClick={onSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
