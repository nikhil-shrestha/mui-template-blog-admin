import * as playerActionTypes from './player.types';

export const Feature = {
  HISTORY: 'history'
};

export const PLAYER_STATE = {
  NOT_INITIATED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  LOADING: 3
};

const initialState = {
  currentTrack: {},
  toggle: false,
  isReady: false,
  state: PLAYER_STATE.NOT_INITIATED,
  playingFeature: Feature.HISTORY
};

const playerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case playerActionTypes.TOGGLE_PLAY_PAUSE:
      return {
        ...state,
        toggle: !state.toggle,
        state: payload.value
      };

    case playerActionTypes.SET_PLAYER_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: payload
      };

    case playerActionTypes.SET_IS_PLAYING:
      return {
        ...state,
        playing: payload
      };

    default:
      return state;
  }
};

export default playerReducer;
