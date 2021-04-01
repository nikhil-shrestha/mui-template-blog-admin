import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
    padding: '10px 20px'
  },
  info: {
    width: '80%',
    // max-width: 50%;
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '20px auto',
    textAlign: 'left'
  },
  action: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px auto',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

export default function Podcast({ data, setPlayerEpisode }) {
  const classes = useStyles();

  const { title, description, pubDate } = data;

  const date = new Date(pubDate);

  return (
    <Box mt={5} mb={5}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item container justify="center" alignItems="center" md={2}>
            <IconButton
              aria-label="play/pause"
              onClick={() => setPlayerEpisode(data)}
            >
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
          </Grid>
          <Grid item md>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              className={classes.pos}
              color="textSecondary"
              gutterBottom
            >
              <span>Date: </span>
              {date.toLocaleString('en-EN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit'
              })}
            </Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
