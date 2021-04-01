import * as playerActionTypes from './player.types';

export const setPlayerCurrentTrack = (id) => ({
  type: playerActionTypes.SET_PLAYER_CURRENT_TRACK,
  payload: id,
});

export const togglePlayPause = (value) => ({
  type: playerActionTypes.TOGGLE_PLAY_PAUSE,
  payload: { value },
});

export const setPlayerState = (value) => ({
  type: playerActionTypes.SET_PLAYER_STATE,
  payload: value,
});
