import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

export default function PodcastCard(props) {
  const classes = useStyles();

  const { data, viewDisable, setCurrentPodcast, history } = props;

  const {
    collectionName: name,
    author,
    artworkUrl100,
    genres = [],
    collectionId
  } = data;

  const handleClickView = (podcast) => {
    setCurrentPodcast(podcast);
    history.push(`/podcast/${podcast.collectionId}`);
  };

  return (
    <Box mt={5} mb={5}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="name"
                src={artworkUrl100.toString()}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  By {author}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {genres.map((key) => key + ', ')}
                </Typography>
              </Grid>
              {!viewDisable && (
                <Grid item>
                  <Button color="primary" onClick={() => handleClickView(data)}>
                    View
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
