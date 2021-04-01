import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

import PodcastCard from 'src/modules/views/PodcastCard';

import container from './Home.container';

function Index(props) {
  const {
    onFetchPodcastStart,
    isLoading,
    podcastIDs,
    podcasts,
    onSetCurrentPodcast,
    history
  } = props;

  useEffect(() => {
    onFetchPodcastStart();
  }, []);

  let emptyContents;
  if (isLoading && podcastIDs.length === 0) {
    emptyContents = (
      <Grid container justify="center" alignContent="center">
        <CircularProgress />
      </Grid>
    );
  } else if (!isLoading && podcastIDs.length === 0) {
    emptyContents = (
      <Alert variant="outlined" severity="error">
        Not Found
      </Alert>
    );
  }

  const items = podcastIDs.map((id) => podcasts[id]);

  return (
    <Container>
      {items.length
        ? items.map((podcast, i) => (
            <PodcastCard
              key={podcast.id}
              data={podcast}
              setCurrentPodcast={onSetCurrentPodcast}
              history={history}
            />
          ))
        : emptyContents}
    </Container>
  );
}

export default container(Index);
