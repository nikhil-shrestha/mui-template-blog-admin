import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2)
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}));

function PodcastCard(props) {
  const classes = useStyles();

  const { data } = props;

  const { collectionName: name, author, artworkUrl100, genres = [] } = data;

  return (
    <Box mt={5} mb={5}>
      <Card>
        <CardContent>
          <Grid container direction="column" spacing={3}>
            <Grid item container spacing={2}>
              <Grid item md={2} xs={4}>
                <div className={classes.cardWrapper}>
                  <CardMedia
                    className={classes.media}
                    image={artworkUrl100.toString()}
                    title={name}
                  />
                </div>
              </Grid>
              <Grid item container direction="column" spacing={1} md xs>
                <Grid item>
                  <Typography variant="h4" component="h3">
                    {name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption">By {author}</Typography>
                </Grid>
                <Grid item>
                  <div className={classes.root}>
                    {genres.map((key) => key + ', ')}
                  </div>
                </Grid>
              </Grid>

              {/* <Grid item>
                <Typography variant="body1">
                  Learn french with podcasts ! Every week, Hellofrench gives you
                  a free podcast to learn french. Listening the news in slow
                  french is one of the best way to improve your french
                  comprehension. At the end of each podcast we give you an
                  explanation of all complicated words. Check
                  https://www.hellofrenchp...
                </Typography>
              </Grid> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PodcastCard;
