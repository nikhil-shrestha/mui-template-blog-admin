import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

import VolumeController from './VolumeController';
import PreviousButton from './PreviousButton';
import PlayPauseButton from './PlayPauseButton';
import NextButton from './NextButton';

const MiniMuiscArt = ({
  podcast: { artworkUrl60, artworkUrl100 },
  currentEpisode: { title, description },
  player,
  playNext,
  playPrevious,
  audioState
}) => {
  const getThumbnail = () => {
    // if the thumbnail is downloaded then get it from database or else use the url to fetch
    if (artworkUrl60) {
      return window.URL.createObjectURL(artworkUrl60);
    } else {
      return artworkUrl100;
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid item container alignContent="center" lg md sm>
          <Grid direction="column" container>
            <Grid item>
              <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{description}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg md sm>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ maxWidth: 310, height: 80, margin: '0 auto' }}
          >
            <PreviousButton playPrevious={playPrevious} />
            <PlayPauseButton player={player} audioState={audioState} />
            <NextButton onPlayNext={playNext} />
          </Grid>
        </Grid>
        <Grid item container alignItems="center" lg md sm={3}>
          <Grid item md sm xs>
            <VolumeController player={player} />
          </Grid>
          <Grid item md={2} sm={3} xs={3}>
            <IconButton>
              <CloseIcon style={{ width: 22, height: 22 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MiniMuiscArt;
