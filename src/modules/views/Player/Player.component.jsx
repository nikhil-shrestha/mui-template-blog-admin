import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import TimelineController from './components/TimelineController';
import MiniMusicArt from './components/MiniMusicArt';

import container from './Player.container';

const useStyles = makeStyles((theme) => ({
  appBar: {
    bottom: 0,
    display: 'inline-block',
    transition: 'all 0.3s ease',
    [theme.breakpoints.down('xs')]: {
      bottom: '3.7em'
    }
  },
  playerMinimized: {
    transform: 'translateY(calc(100% - 106px))',
    zIndex: 1301,
    backgroundColor: 'rgba(255, 255, 255, 0.95)'
  },
  playerMaximized: {
    top: 0,
    bottom: 0,
    zIndex: 1401,
    backgroundColor: '#FFF'
  }
}));

const MainPlayer = ({ currentEpisode, podcast }) => {
  const classes = useStyles();

  // there will be 4 states
  // loading, loaded, playing, paused
  const [audioState, setAudioState] = useState(null);

  // there will be 3 states
  // maximized, minimized, playlist
  const [playerState, setPlayerState] = useState('minimized');

  const [minimized, setMinimized] = useState(true);
  const body = document.querySelector('body');

  const audioPlayer = useRef();
  const player = audioPlayer.current;

  const playAudio = () => {
    audioPlayer.current
      .play()
      .then((_) => {
        // Automatic playback started!
        // Show playing UI.
        console.log('audio played auto');
      })
      .catch((error) => {
        // Auto-play was prevented
        // Show paused UI.
        // console.log("playback prevented");
        setAudioState('paused');
      });
  };

  useEffect(() => {
    if (currentEpisode.link) {
      // console.log("yes its downloaded we will play from local file");
      // maximize the player every time id changes

      setPlayerState('minimized');
      setAudioState('loading');
      audioPlayer.current.src = currentEpisode.link;
      playAudio();
    }
  }, [currentEpisode]);

  if (playerState === 'minimized') {
    // calculate the top height and we are subtracting 148px becz
    // 48 is the value of menu bar and 100px is minimized height
    // make body overflow scroll 😝
    body.style.overflow = 'auto';
  }

  // this will be fired when song is ended
  const songEnded = () => {
    // if repeat is false we will play next else just set the time to 0
    console.log('audio ended!!!');
  };

  if (!currentEpisode.id) {
    return null;
  }

  return (
    <>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.playerMinimized]: playerState === 'minimized'
        })}
      >
        <Toolbar disableGutters>
          <Grid container direction="column">
            <TimelineController
              audioState={audioState}
              player={player}
              minimized
            />
            <Grid item container>
              <MiniMusicArt
                podcast={podcast}
                currentEpisode={currentEpisode}
                player={player}
                audioState={audioState}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <audio
        // onTimeUpdate={timeUpdate}
        onLoadStart={() => {
          setAudioState('loading');
        }}
        id="audio-element"
        // crossOrigin="anonymous"
        onPlay={() => setAudioState('playing')}
        onPlaying={() => setAudioState('playing')}
        onPause={() => setAudioState('paused')}
        onEnded={songEnded}
        autoPlay
        ref={audioPlayer}
        // type="audio/mp4"
      />
    </>
  );
};

export default container(MainPlayer);
