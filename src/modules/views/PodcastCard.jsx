import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  },
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 6)
    }
  }
}));

function PodcastCard() {
  const classes = useStyles();

  return (
    <Box mt={7} mb={12}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <img
              src="https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80"
              alt=""
            />
          </Grid>
          <Grid item container direction="column" md spacing={1}>
            <Grid item>
              <Typography variant="h3">Podcast</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">By Author</Typography>
            </Grid>
            <Grid item>
              <div className={classes.root}>
                <Chip label="Basic" variant="outlined" />
              </div>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Learn french with podcasts ! Every week, Hellofrench gives you a
                free podcast to learn french. Listening the news in slow french
                is one of the best way to improve your french comprehension. At
                the end of each podcast we give you an explanation of all
                complicated words. Check https://www.hellofrenchp...
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default PodcastCard;
